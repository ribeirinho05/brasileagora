/* BRASIL AGORA — Base de Dados v2.0
   Placeholder — será substituído pelo bot */

const CATEGORIAS = {
    politica: { nome: 'Política', cor: '#C0392B', icone: 'account_balance', gradient: 'linear-gradient(135deg, #C0392B, #962D22)' },
    economia: { nome: 'Economia', cor: '#27AE60', icone: 'trending_up', gradient: 'linear-gradient(135deg, #27AE60, #1E8449)' },
    brasilia: { nome: 'Brasília', cor: '#2980B9', icone: 'location_city', gradient: 'linear-gradient(135deg, #2980B9, #1A5276)' },
    tecnologia: { nome: 'Tecnologia', cor: '#8E44AD', icone: 'devices', gradient: 'linear-gradient(135deg, #8E44AD, #6C3483)' },
    esportes: { nome: 'Esportes', cor: '#E67E22', icone: 'sports_soccer', gradient: 'linear-gradient(135deg, #E67E22, #D35400)' },
    brasil: { nome: 'Brasil', cor: '#1B4332', icone: 'flag', gradient: 'linear-gradient(135deg, #1B4332, #2D6A4F)' },
    internacional: { nome: 'Mundo', cor: '#34495E', icone: 'public', gradient: 'linear-gradient(135deg, #34495E, #1D3557)' },
    eventos: { nome: 'Cultura', cor: '#F39C12', icone: 'event', gradient: 'linear-gradient(135deg, #F39C12, #F4A261)' },
};

const noticias = [
    { id: 1, categoria: 'politica', destaque: true, titulo: 'Congresso Nacional aprova nova legislação de impacto nacional', resumo: 'A medida foi aprovada com ampla maioria e entra em vigor nos próximos 30 dias, trazendo mudanças significativas para o país.', imagem: 'https://picsum.photos/seed/ba1/800/500', autor: 'Redação', tempo: 'agora' },
    { id: 2, categoria: 'economia', destaque: true, titulo: 'Ibovespa atinge nova máxima histórica com otimismo do mercado', resumo: 'O índice superou os 140 mil pontos impulsionado por resultados positivos do setor financeiro e agronegócio.', imagem: 'https://picsum.photos/seed/ba2/800/500', autor: 'Redação', tempo: '1h atrás' },
    { id: 3, categoria: 'brasilia', destaque: true, titulo: 'Governo Federal anuncia novo pacote de investimentos em infraestrutura', resumo: 'O programa prevê R$ 100 bilhões em obras de rodovias, ferrovias e portos nos próximos 4 anos.', imagem: 'https://picsum.photos/seed/ba3/800/500', autor: 'Redação', tempo: '2h atrás' },
    { id: 4, categoria: 'tecnologia', destaque: true, titulo: 'Brasil avança no desenvolvimento de inteligência artificial soberana', resumo: 'Iniciativa reúne universidades e empresas nacionais para criar modelos de IA em português brasileiro.', imagem: 'https://picsum.photos/seed/ba4/800/500', autor: 'Redação', tempo: '3h atrás' },
    { id: 5, categoria: 'esportes', destaque: true, titulo: 'Seleção Brasileira convocada para as Eliminatórias da Copa do Mundo', resumo: 'Técnico apresenta lista com novidades e veteranos para as próximas partidas decisivas.', imagem: 'https://picsum.photos/seed/ba5/800/500', autor: 'Redação', tempo: '4h atrás' },
    { id: 6, categoria: 'internacional', titulo: 'Cúpula do G20 discute mudanças climáticas e economia global', resumo: 'Líderes mundiais se reúnem para debater ações conjuntas contra o aquecimento global.', imagem: 'https://picsum.photos/seed/ba6/800/500', autor: 'Redação', tempo: '5h atrás' },
    { id: 7, categoria: 'brasil', titulo: 'Amazônia registra queda no desmatamento pelo terceiro mês consecutivo', resumo: 'Dados do INPE mostram redução de 30% na área desmatada em comparação ao mesmo período do ano anterior.', imagem: 'https://picsum.photos/seed/ba7/800/500', autor: 'Redação', tempo: '6h atrás' },
    { id: 8, categoria: 'eventos', titulo: 'Festival de cinema de Brasília anuncia programação especial', resumo: 'Evento trará produções nacionais e internacionais durante uma semana de exibições gratuitas.', imagem: 'https://picsum.photos/seed/ba8/800/500', autor: 'Redação', tempo: '7h atrás' },
];

const videos = [];
const breakingNews = ['URGENTE: Congresso aprova nova legislação com impacto direto na economia brasileira', 'AGORA: Mercado financeiro reage positivamente às novas medidas econômicas', 'ÚLTIMA HORA: Governo Federal anuncia pacote bilionário de investimentos'];
const cotacoes = [
    { nome: 'Dólar', icone: 'attach_money', valor: 'R$ 5.45', variacao: '-0.3%', direcao: 'down' },
    { nome: 'Euro', icone: 'euro', valor: 'R$ 5.92', variacao: '+0.1%', direcao: 'up' },
    { nome: 'Ibovespa', icone: 'show_chart', valor: '140.250', variacao: '+1.2%', direcao: 'up' },
    { nome: 'Bitcoin', icone: 'currency_bitcoin', valor: 'R$ 520.000', variacao: '+2.5%', direcao: 'up' },
];
const clima = { cidade: 'Brasília', estado: 'DF', temperatura: 25, temp_min: 18, temp_max: 30, umidade: 50, condicao: 'Céu Limpo', icone: 'wb_sunny', vento: 10 };
const trending = ['#BrasilAgora', '#Brasília', '#Economia', '#Política', '#Tecnologia', '#Brasil'];
