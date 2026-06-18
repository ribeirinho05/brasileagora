"""
BRASIL AGORA — Configuração Central do Backend
Portal nacional de notícias do Brasil com foco em Brasília
"""

import os
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), '.env'))

GEMINI_API_KEY = os.getenv('GEMINI_API_KEY', '')
NEWSAPI_KEY = os.getenv('NEWSAPI_KEY', '')
PEXELS_API_KEY = os.getenv('PEXELS_API_KEY', '')
OPENWEATHERMAP_KEY = os.getenv('OPENWEATHERMAP_KEY', '')

GEMINI_MODEL = 'gemini-2.5-flash'

CIDADE = 'Brasília'
ESTADO = 'DF'

FONTES_GOV = {
    'planalto': {
        'nome': 'Planalto',
        'url_lista': 'https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias',
        'url_base': 'https://www.gov.br',
        'prioridade': 100
    },
    'camara': {
        'nome': 'Câmara dos Deputados',
        'url_lista': 'https://www.camara.leg.br/noticias/ultimas',
        'url_base': 'https://www.camara.leg.br',
        'prioridade': 95
    },
    'senado': {
        'nome': 'Senado Federal',
        'url_lista': 'https://www12.senado.leg.br/noticias/ultimas',
        'url_base': 'https://www12.senado.leg.br',
        'prioridade': 95
    },
    'agencia_brasil': {
        'nome': 'Agência Brasil',
        'url_lista': 'https://agenciabrasil.ebc.com.br/ultimas',
        'url_base': 'https://agenciabrasil.ebc.com.br',
        'prioridade': 90
    },
}

FONTES_RSS = [
    {'nome': 'G1', 'url': 'https://g1.globo.com/rss/g1/', 'categoria_forcada': None},
    {'nome': 'G1 Política', 'url': 'https://g1.globo.com/rss/g1/politica/', 'categoria_forcada': 'politica'},
    {'nome': 'G1 Economia', 'url': 'https://g1.globo.com/rss/g1/economia/', 'categoria_forcada': 'economia'},
    {'nome': 'G1 DF', 'url': 'https://g1.globo.com/rss/g1/distrito-federal/', 'categoria_forcada': 'brasilia'},
    {'nome': 'UOL Notícias', 'url': 'https://rss.uol.com.br/feed/noticias.xml', 'categoria_forcada': None},
    {'nome': 'Folha de S.Paulo', 'url': 'https://feeds.folha.uol.com.br/emcimadahora/rss091.xml', 'categoria_forcada': None},
    {'nome': 'Jornal Nacional', 'url': 'https://g1.globo.com/rss/g1/jornal-nacional/', 'categoria_forcada': 'brasil'},
    {'nome': 'CNN Brasil', 'url': 'https://www.cnnbrasil.com.br/feed/', 'categoria_forcada': None},
    {'nome': 'CNN International', 'url': 'http://rss.cnn.com/rss/edition.rss', 'categoria_forcada': 'internacional'},
    {'nome': 'Fox News', 'url': 'https://moxie.foxnews.com/google-publisher/latest.xml', 'categoria_forcada': 'internacional'},
    {'nome': 'New York Times World', 'url': 'https://rss.nytimes.com/services/xml/rss/nyt/World.xml', 'categoria_forcada': 'internacional'},
    {'nome': 'G1 Mundo', 'url': 'https://g1.globo.com/rss/g1/mundo/', 'categoria_forcada': 'internacional'},
    {'nome': 'O Antagonista', 'url': 'https://oantagonista.com.br/feed/', 'categoria_forcada': None},
    {'nome': 'Bloomberg', 'url': 'https://feeds.bloomberg.com/markets/news.rss', 'categoria_forcada': 'economia'},
    {'nome': 'GE (Globo Esporte)', 'url': 'https://ge.globo.com/rss/ge/', 'categoria_forcada': 'esportes'},
    {'nome': 'R7 Notícias', 'url': 'https://noticias.r7.com/feed.xml', 'categoria_forcada': None},
    {'nome': 'Band News', 'url': 'https://www.band.uol.com.br/rss/noticias.xml', 'categoria_forcada': None},
    {'nome': 'Metrópoles', 'url': 'https://www.metropoles.com/feed', 'categoria_forcada': None},
    {'nome': 'Valor Econômico', 'url': 'https://pox.globo.com/rss/valor/', 'categoria_forcada': 'economia'},
    {'nome': 'Agência Brasil', 'url': 'https://agenciabrasil.ebc.com.br/rss/ultimasnoticias/feed.xml', 'categoria_forcada': None},
    {'nome': 'InfoMoney', 'url': 'https://www.infomoney.com.br/feed/', 'categoria_forcada': 'economia'},
    {'nome': 'Poder360', 'url': 'https://www.poder360.com.br/feed/', 'categoria_forcada': 'politica'},
    {'nome': 'G1 Tecnologia', 'url': 'https://g1.globo.com/rss/g1/tecnologia/', 'categoria_forcada': 'tecnologia'},
    {'nome': 'Olhar Digital', 'url': 'https://olhardigital.com.br/feed/', 'categoria_forcada': 'tecnologia'},
]

NEWSAPI_QUERIES = ['Brasil', 'Brasília governo', 'economia Brasil', 'tecnologia Brasil']
NEWSAPI_DOMAINS = 'g1.globo.com,uol.com.br,folha.uol.com.br,metropoles.com,poder360.com.br'

GOOGLE_NEWS_QUERIES = ['Brasil+governo+federal', 'Brasília+DF', 'Brasil+economia+hoje']

CATEGORIAS = {
    'politica': {
        'nome': 'Política',
        'cor': '#C0392B',
        'icone': 'account_balance',
        'gradient': 'linear-gradient(135deg, #C0392B, #962D22)',
        'palavras_chave': ['governo', 'governador', 'prefeito', 'prefeitura', 'câmara', 'vereador',
                           'deputado', 'senador', 'eleição', 'partido', 'lula', 'bolsonaro',
                           'congresso', 'senado', 'stf', 'tse', 'tcu', 'cgu',
                           'assembleia', 'legislativo', 'projeto de lei', 'votação',
                           'ministro', 'ministério', 'reforma', 'político', 'política',
                           'planalto', 'esplanada', 'plenário', 'medida provisória']
    },
    'economia': {
        'nome': 'Economia',
        'cor': '#27AE60',
        'icone': 'trending_up',
        'gradient': 'linear-gradient(135deg, #27AE60, #1E8449)',
        'palavras_chave': ['economia', 'mercado', 'bolsa', 'ibovespa', 'dólar', 'inflação',
                           'pib', 'juros', 'selic', 'investimento', 'emprego', 'desemprego',
                           'petrobras', 'vale', 'banco', 'crédito', 'startup', 'fintech',
                           'exportação', 'importação', 'indústria', 'comércio', 'agronegócio',
                           'safra', 'commodities', 'tesouro', 'orçamento']
    },
    'brasilia': {
        'nome': 'Brasília',
        'cor': '#2980B9',
        'icone': 'location_city',
        'gradient': 'linear-gradient(135deg, #2980B9, #1A5276)',
        'palavras_chave': ['brasília', 'distrito federal', 'plano piloto', 'asa sul', 'asa norte',
                           'taguatinga', 'ceilândia', 'samambaia', 'gama', 'planaltina',
                           'esplanada dos ministérios', 'congresso nacional', 'três poderes',
                           'lago sul', 'lago norte', 'sobradinho', 'guará', 'águas claras',
                           'metrô df', 'brt df', 'gdf', 'ibaneis']
    },
    'tecnologia': {
        'nome': 'Tecnologia',
        'cor': '#8E44AD',
        'icone': 'devices',
        'gradient': 'linear-gradient(135deg, #8E44AD, #6C3483)',
        'palavras_chave': ['tecnologia', 'inteligência artificial', 'startup', 'inovação',
                           'digital', 'aplicativo', 'software', 'hardware', 'celular',
                           'smartphone', 'internet', 'rede social', 'dados', 'cibersegurança',
                           'bitcoin', 'blockchain', 'fintech', 'google', 'apple', 'microsoft',
                           'meta', 'tesla', 'openai', '5g', 'robô', 'automação']
    },
    'esportes': {
        'nome': 'Esportes',
        'cor': '#E67E22',
        'icone': 'sports_soccer',
        'gradient': 'linear-gradient(135deg, #E67E22, #D35400)',
        'palavras_chave': ['futebol', 'brasileirão', 'libertadores', 'copa', 'gol', 'campeonato',
                           'flamengo', 'palmeiras', 'corinthians', 'são paulo', 'santos',
                           'vasco', 'fluminense', 'botafogo', 'grêmio', 'inter', 'atlético',
                           'cruzeiro', 'seleção brasileira', 'cbf', 'neymar', 'vini jr',
                           'fórmula 1', 'olimpíadas', 'basquete', 'vôlei', 'tênis', 'mma', 'ufc']
    },
    'brasil': {
        'nome': 'Brasil',
        'cor': '#1B4332',
        'icone': 'flag',
        'gradient': 'linear-gradient(135deg, #1B4332, #2D6A4F)',
        'palavras_chave': ['brasil', 'brasileiro', 'federal', 'nacional', 'país',
                           'sus', 'educação', 'saúde', 'segurança', 'violência', 'crime',
                           'polícia', 'incêndio', 'acidente', 'tragédia', 'operação',
                           'meio ambiente', 'desmatamento', 'amazônia', 'pantanal']
    },
    'internacional': {
        'nome': 'Mundo',
        'cor': '#34495E',
        'icone': 'public',
        'gradient': 'linear-gradient(135deg, #34495E, #1D3557)',
        'palavras_chave': ['eua', 'estados unidos', 'trump', 'biden', 'china', 'rússia',
                           'ucrânia', 'europa', 'putin', 'guerra', 'israel', 'gaza',
                           'onu', 'otan', 'mundial', 'global', 'internacional',
                           'oriente médio', 'áfrica', 'ásia']
    },
    'eventos': {
        'nome': 'Cultura',
        'cor': '#F39C12',
        'icone': 'event',
        'gradient': 'linear-gradient(135deg, #F39C12, #F4A261)',
        'palavras_chave': ['evento', 'show', 'festival', 'exposição', 'teatro', 'cinema',
                           'museu', 'cultura', 'carnaval', 'réveillon', 'feira', 'congresso',
                           'conferência', 'lançamento', 'inauguração', 'arte', 'música',
                           'livro', 'literatura', 'patrimônio', 'ccbb']
    },
}

CANAIS_YOUTUBE = [
    {'nome': 'Band Jornalismo', 'channel_id': 'UCMNi2NaFERhTpEpLPAyRRdQ', 'url': 'https://www.youtube.com/@BandJornalismo', 'prioridade': 100},
    {'nome': 'CNN Brasil', 'channel_id': 'UCbBr1ZjjQxTiMonument-KIPA', 'url': 'https://www.youtube.com/@CNNbrasil', 'prioridade': 95},
    {'nome': 'Jovem Pan News', 'channel_id': 'UCzXTml0sPRmwHQkPsPZ4k1Q', 'url': 'https://www.youtube.com/@JovemPanNews', 'prioridade': 90},
    {'nome': 'SBT News', 'channel_id': 'UC-U1fF8sLzwdHSpgnSQR7OA', 'url': 'https://www.youtube.com/@SBTNews', 'prioridade': 85},
    {'nome': 'TV Senado', 'channel_id': 'UCJqOXHat1kFHNGE2yCTJc_g', 'url': 'https://www.youtube.com/@TVSenado', 'prioridade': 80},
    {'nome': 'TV Câmara', 'channel_id': 'UC4SiGFGNOwsDK7dR91OwTTg', 'url': 'https://www.youtube.com/@TVCamara', 'prioridade': 75},
]
QUANTIDADE_VIDEOS = 8
QUANTIDADE_NOTICIAS = 140

CIDADE_COORDS = {'lat': -15.7801, 'lon': -47.9292}

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CAMINHO_JS = os.path.normpath(os.path.join(BASE_DIR, '..', 'js', 'news-data.js'))
CAMINHO_LOG = os.path.join(BASE_DIR, 'logs')

HORARIOS_ATUALIZACAO = ['08:00']
DIAS_ATUALIZACAO = ['monday', 'thursday']

PROMPT_REESCRITA = """Você é um editor do portal BRASIL AGORA, um grande portal nacional de notícias.
Reescreva a notícia abaixo com linguagem jornalística profissional em português brasileiro.

REGRAS:
1. Título: máximo 90 caracteres, impactante e informativo
2. Resumo: 2-3 frases, máximo 280 caracteres, objetivo e claro
3. NÃO invente informações
4. NÃO use aspas no título
5. Se a notícia for propaganda/publicidade, retorne {{"rejeitar": true}}

Título original: {titulo}
Texto: {texto}

Responda APENAS em JSON: {{"titulo": "...", "resumo": "..."}}"""

PROMPT_BREAKING = """Analise as notícias mais importantes do Brasil e gere 3 chamadas de URGENTE.
Cada chamada deve ter no máximo 120 caracteres e começar com URGENTE:, AGORA: ou ÚLTIMA HORA:.

Notícias:
{noticias}

Responda em JSON: {{"breaking": ["URGENTE: ...", "AGORA: ...", "ÚLTIMA HORA: ..."]}}"""

PROMPT_TRENDING = """Com base nas notícias abaixo do Brasil, gere 6 trending topics (hashtags).
Inclua sempre #BrasilAgora e #Brasília.

Notícias:
{noticias}

Responda em JSON: {{"trending": ["#BrasilAgora", "#Brasília", ...]}}"""
