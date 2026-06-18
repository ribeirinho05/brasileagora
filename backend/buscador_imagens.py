"""
BRASIL AGORA — Buscador de Imagens
Busca imagens reais via Pexels API ou usa imagens originais das fontes
"""

import requests
import logging
import re
import hashlib
from http_utils import requisicao_com_retry

logger = logging.getLogger('brasileagora.buscador_imagens')

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}
TIMEOUT = 10

TERMOS_CATEGORIA = {
    'politica': ['government building', 'politics', 'city hall', 'parliament'],
    'brasilia': ['brasilia brazil', 'congress building', 'government', 'capital city'],
    'tecnologia': ['technology', 'computer', 'smartphone', 'digital'],
    'eventos': ['festival', 'event', 'celebration', 'concert'],
    'brasil': ['brazil', 'brasilia', 'brazilian flag'],
    'esportes': ['soccer', 'sports', 'stadium', 'athlete'],
    'economia': ['economy', 'agriculture', 'farm soybean', 'stock market']
}

_imagens_usadas = set()
_cache_pexels = {}


def buscar_imagem(noticia):
    imagem_original = noticia.get('imagem')
    if imagem_original and _imagem_valida(imagem_original):
        return imagem_original

    imagem_pexels = _buscar_pexels(noticia)
    if imagem_pexels:
        return imagem_pexels

    seed = hashlib.md5(noticia.get('titulo', 'default').encode()).hexdigest()[:10]
    return f'https://picsum.photos/seed/{seed}/800/500'


def _imagem_valida(url):
    if not url or not url.startswith('http'):
        return False

    invalidas = ['placeholder', 'default', 'no-image', 'logo', 'favicon', 'icon',
                 '1x1', 'pixel', 'tracking', 'blank', 'spacer', 'transparent']
    url_lower = url.lower()
    if any(inv in url_lower for inv in invalidas):
        return False

    extensoes_validas = ('.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp', '.avif')
    caminho = url_lower.split('?')[0]
    if any(caminho.endswith(ext) for ext in extensoes_validas):
        return True

    cdns_imagem = ['img.', 'image.', 'cdn.', 'static.', 'media.', 'upload.',
                   'wp-content/uploads', '/fotos/', '/imagens/', '/photos/']
    if any(cdn in url_lower for cdn in cdns_imagem):
        return True

    return True


def _buscar_pexels(noticia):
    from config import PEXELS_API_KEY

    if not PEXELS_API_KEY:
        return None

    categoria = noticia.get('categoria', 'brasil')
    titulo = noticia.get('titulo', '')

    termos = TERMOS_CATEGORIA.get(categoria, ['news'])

    palavras_titulo = re.findall(r'\b[A-Za-zÀ-ÿ]{4,}\b', titulo.lower())
    termos_especificos = {
        'ponte': 'bridge construction',
        'hospital': 'hospital',
        'escola': 'school education',
        'estrada': 'road highway',
        'soja': 'soybean agriculture',
        'milho': 'corn agriculture',
        'futebol': 'soccer football',
        'rio': 'river',
        'parque': 'park nature',
        'feira': 'market fair',
        'festival': 'festival celebration',
        'câmara': 'city hall government',
        'prefeito': 'mayor government',
        'segurança': 'security police',
        'trânsito': 'traffic road',
        'educação': 'education classroom',
        'incêndio': 'fire emergency',
        'enchente': 'flood rain',
        'operação': 'police operation',
        'saúde': 'health medical',
        'moradia': 'housing building',
        'transporte': 'public transport bus',
        'tecnologia': 'technology computer',
        'meio ambiente': 'environment nature',
        'congresso': 'congress government building',
        'senado': 'senate government',
        'planalto': 'government palace',
        'inteligência artificial': 'artificial intelligence robot',
        'startup': 'startup office technology',
    }

    query = None
    for palavra in palavras_titulo:
        if palavra in termos_especificos:
            query = termos_especificos[palavra]
            break

    if not query:
        import random
        query = random.choice(termos)

    titulo_hash = hashlib.md5(titulo.encode()).hexdigest()[:8]
    page_offset = int(titulo_hash, 16) % 10 + 1

    try:
        cache_key = f"{query}_{page_offset}"
        if cache_key in _cache_pexels:
            photos = _cache_pexels[cache_key]
        else:
            resp = requisicao_com_retry(
                'https://api.pexels.com/v1/search',
                headers={'Authorization': PEXELS_API_KEY},
                params={'query': query, 'per_page': 15, 'page': page_offset, 'orientation': 'landscape'},
                timeout=TIMEOUT
            )
            if not resp:
                return None
            resp.raise_for_status()
            data = resp.json()
            photos = data.get('photos', [])
            _cache_pexels[cache_key] = photos

        for photo in photos:
            url = photo.get('src', {}).get('landscape') or photo.get('src', {}).get('large')
            if url and url not in _imagens_usadas:
                _imagens_usadas.add(url)
                return url

        if photos:
            idx = int(titulo_hash, 16) % len(photos)
            url = photos[idx].get('src', {}).get('landscape') or photos[idx].get('src', {}).get('large')
            if url:
                return url

    except Exception as e:
        logger.warning(f"Erro Pexels '{query}': {e}")

    return None


def processar_imagens(noticias):
    logger.info(f"Processando imagens para {len(noticias)} notícias...")

    _imagens_usadas.clear()
    _cache_pexels.clear()

    originais = 0
    pexels_count = 0
    fallback_count = 0

    for n in noticias:
        imagem_antes = n.get('imagem')
        if imagem_antes and _imagem_valida(imagem_antes):
            _imagens_usadas.add(imagem_antes)

    for n in noticias:
        imagem_antes = n.get('imagem')
        n['imagem'] = buscar_imagem(n)

        if imagem_antes and n['imagem'] == imagem_antes:
            originais += 1
        elif 'pexels' in (n['imagem'] or '').lower():
            pexels_count += 1
        else:
            fallback_count += 1

    logger.info(f"Imagens: {originais} originais, {pexels_count} Pexels, {fallback_count} fallback")
    return noticias
