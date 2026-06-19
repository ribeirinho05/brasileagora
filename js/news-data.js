/* BRASIL AGORA — Base de Dados v2.0
   Atualizado: 18/06/2026 20:00 */

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
    {
        id: 1, categoria: 'tecnologia',
        destaque: true,
        titulo: 'VPR detalha transparência: Ações sem metas e ausência de serviços ao cidadão',
        resumo: 'A Vice-Presidência da República (VPR) esclareceu que seus programas e ações não são finalísticos. A instituição não divulga metas, resultados ou indicadores, nem presta serviços diretos ao cidadão. Dados adicionais estão no Portal de Transparência do Governo Federal.',
        imagem: 'https://images.pexels.com/photos/11025019/pexels-photo-11025019.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Planalto', tempo: '40 min atrás'
    },
    {
        id: 2, categoria: 'brasil',
        destaque: true,
        titulo: 'Últimas Notícias: BRASIL AGORA Mantém Você Informado',
        resumo: 'O portal BRASIL AGORA disponibiliza suas últimas notícias, trazendo os acontecimentos mais relevantes. Mantenha-se atualizado com o panorama completo dos fatos do momento.',
        imagem: 'https://images.pexels.com/photos/8032857/pexels-photo-8032857.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Planalto', tempo: '40 min atrás'
    },
    {
        id: 3, categoria: 'brasil',
        destaque: true,
        titulo: 'Agenda do Presidente em Exercício: Compromissos Oficiais',
        resumo: 'O Presidente em Exercício teve sua agenda de compromissos públicos divulgada. O cronograma inclui as atividades e reuniões previstas para seu período de atuação à frente do país.',
        imagem: 'https://images.pexels.com/photos/33891183/pexels-photo-33891183.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Planalto', tempo: '40 min atrás'
    },
    {
        id: 4, categoria: 'brasil',
        destaque: true,
        titulo: 'Setor de Empresas e Negócios em Destaque Nacional',
        resumo: 'O portal BRASIL AGORA apresenta uma visão abrangente sobre o universo corporativo e as dinâmicas do mercado. Análise das principais movimentações e tendências que moldam o ambiente empresarial no país.',
        imagem: 'https://images.pexels.com/photos/12300286/pexels-photo-12300286.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Planalto', tempo: '40 min atrás'
    },
    {
        id: 5, categoria: 'brasil',
        titulo: 'Governo estabelece perfis profissionais para altos cargos na Presidência',
        resumo: 'A Portaria SEGES/ME Nº 14.399, de 8 de dezembro de 2021, estabelece o perfil profissional desejado para a ocupação de cargos CCE ou FCE, de níveis 11 a 17. As diretrizes abrangem posições estratégicas nos órgãos da Presidência e Vice-Presidência da República.',
        imagem: 'https://images.pexels.com/photos/15869991/pexels-photo-15869991.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Planalto', tempo: '40 min atrás'
    },
    {
        id: 6, categoria: 'brasil',
        titulo: 'Brasil e Interpol impulsionam coalizão regional contra crime organizado na América do Sul',
        resumo: 'Brasil e Interpol avançam na formação de uma coalizão regional contra o crime organizado transnacional na América do Sul. A iniciativa, discutida na França com o presidente Lula, visa unir 12 países sul-americanos em um esforço conjunto. O foco será o combate ao tráfico de drogas, armas, crimes ambi',
        imagem: 'https://www.gov.br/planalto/pt-br/acompanhe-o-planalto/noticias/2026/06/brasil-e-interpol-avancam-em-coalizao-regional-contra-o-crime-organizado-na-america-do-sul/whatsapp-image-2026-06-17-at-18-25-22.jpg/@@images/6d7fc9b6-a4c1-49c1-b5bb-7a230e431235.jpeg',
        autor: 'Planalto', tempo: '40 min atrás'
    },
    {
        id: 7, categoria: 'politica',
        titulo: 'Governo veta projeto que reduzia FGTS e Previdência para jovens, citando inconstitucionalidade',
        resumo: 'O presidente em exercício, Geraldo Alckmin, vetou integralmente o projeto que criava o Programa Contrato de Primeiro Emprego para jovens. O veto se deu por inconstitucionalidade, alegando redução de garantias trabalhistas e risco ao equilíbrio da Previdência. O Congresso Nacional analisará a decisão',
        imagem: 'https://www.camara.leg.br/midias/image/2026/06/img20210203095758090-768x512.jpg',
        autor: 'Câmara dos Deputados', tempo: '39 min atrás'
    },
    {
        id: 8, categoria: 'politica',
        titulo: 'Câmara aprova PL que mantém policiais e bombeiros condenados em presídios militares',
        resumo: 'A Comissão de Segurança Pública da Câmara aprovou PL que garante a PMs e bombeiros militares estaduais cumprir penas em presídios militares. A proposta visa proteger a integridade dos agentes condenados, evitando contato com criminosos comuns e o risco de retaliação. O texto segue para análise na Câ',
        imagem: 'https://www.camara.leg.br/midias/image/2026/06/img20260224161659622-768x473.jpg',
        autor: 'Câmara dos Deputados', tempo: '39 min atrás'
    },
    {
        id: 9, categoria: 'politica',
        titulo: 'Projeto na Câmara quer fim de imóveis abandonados e riscos à população',
        resumo: 'A Câmara dos Deputados analisa um Projeto de Lei que visa obrigar proprietários de imóveis urbanos abandonados, subutilizados ou com obras paradas a mantê-los limpos, cercados e seguros. A proposta busca combater riscos à saúde, segurança e ordem urbanística, prevendo sanções para o descumprimento.',
        imagem: 'https://www.camara.leg.br/midias/image/2026/06/img20260515113856738-768x473.jpg',
        autor: 'Câmara dos Deputados', tempo: '39 min atrás'
    },
    {
        id: 10, categoria: 'politica',
        titulo: 'Câmara debate em BH novo limite de faturamento e contratação para MEIs',
        resumo: 'A Câmara dos Deputados promove em Belo Horizonte, no próximo dia 23, um seminário para debater o PLP 108/21. O projeto propõe elevar o limite de faturamento anual do MEI de R$ 81 mil para R$ 130 mil e autorizar a contratação de até dois empregados. O evento busca ouvir autoridades, sociedade civil e',
        imagem: 'https://www.camara.leg.br/midias/image/2026/05/camara-pelo-brasil-768x538.jpg',
        autor: 'Câmara dos Deputados', tempo: '39 min atrás'
    },
    {
        id: 11, categoria: 'politica',
        titulo: 'Metroviários alertam para colapso e demissões em sistemas privatizados; governo federal é cobrado',
        resumo: 'Metroviários de vários estados denunciaram sucateamento e precarização do trabalho em audiência na Câmara, cobrando ações do governo federal. Eles criticaram a manutenção de CBTU e Trensurb no PND, enquanto o Ministério das Cidades afirmou que a gestão do transporte metropolitano é responsabilidade',
        imagem: 'https://www.camara.leg.br/midias/image/2026/06/img20260616171302070-768x473.jpeg',
        autor: 'Câmara dos Deputados', tempo: '39 min atrás'
    },
    {
        id: 12, categoria: 'politica',
        titulo: 'Comissão da Câmara aprova Fator Amazônico para políticas públicas e orçamento',
        resumo: 'A Comissão da Amazônia da Câmara dos Deputados aprovou um projeto de lei que insere o "fator amazônico" em políticas públicas federais. A proposta exige que custos e prazos adicionais da região sejam considerados no planejamento e execução, visando corrigir distorções históricas no orçamento e reduz',
        imagem: 'https://www.camara.leg.br/midias/image/2026/06/img20260527210512004-768x473.jpg',
        autor: 'Câmara dos Deputados', tempo: '39 min atrás'
    },
    {
        id: 13, categoria: 'politica',
        titulo: 'Movimentos por moradia defendem projeto que facilita autogestão habitacional na Câmara',
        resumo: 'Movimentos por moradia popular defenderam na Câmara a aprovação do PL 20/20, que regulamenta a autogestão habitacional. A proposta visa desburocratizar e expandir o acesso à moradia coletiva, um modelo de propriedade via associações ou cooperativas. Atualmente, esse formato enfrenta burocracia e bai',
        imagem: 'https://www.camara.leg.br/midias/image/2026/06/img20260616150543355-768x473.jpg',
        autor: 'Câmara dos Deputados', tempo: '39 min atrás'
    },
    {
        id: 14, categoria: 'economia',
        titulo: 'Brasil Agora Explica Termos Essenciais de Legislação, Economia e Jornalismo',
        resumo: 'O portal BRASIL AGORA compilou um guia para desmistificar complexos conceitos do universo jurídico, econômico e da comunicação. O material aborda desde a estrutura de uma notícia até definições de abuso de poder, ilícitos eleitorais e ações legais importantes como a Ação Civil Pública e a Ação Decla',
        imagem: 'https://images.pexels.com/photos/9260562/pexels-photo-9260562.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Senado Federal', tempo: '39 min atrás'
    },
    {
        id: 15, categoria: 'brasil',
        titulo: 'Câmara aprova Estratégia Nacional para Conscientização sobre Transtorno da Linguagem',
        resumo: 'A Comissão de Saúde da Câmara dos Deputados aprovou a criação da Estratégia Nacional de Conscientização sobre o Transtorno do Desenvolvimento da Linguagem (TDL). A iniciativa visa informar a sociedade, incentivar o diagnóstico e garantir a inclusão social, com metas de campanhas educativas, capacita',
        imagem: 'https://www.camara.leg.br/midias/image/2026/06/img20260526125107695-768x473.jpg',
        autor: 'Câmara dos Deputados', tempo: '39 min atrás'
    },
    {
        id: 16, categoria: 'eventos',
        titulo: 'Sancionada lei que regulamenta arteterapeuta; veto parcial dispensa diploma',
        resumo: 'A Lei 15.435/26, que regulamenta a profissão de arteterapeuta, entrou em vigor após ser sancionada com veto parcial pelo presidente em exercício, Geraldo Alckmin. Um dispositivo que exigia diploma de graduação específica para a atuação do profissional foi vetado.',
        imagem: 'https://www.camara.leg.br/midias/image/2026/06/arteterapeuta-768x509.jpg',
        autor: 'Câmara dos Deputados', tempo: '39 min atrás'
    },
    {
        id: 17, categoria: 'politica',
        titulo: 'Câmara aprova regra que reinicia prazo de liberdade condicional por falta grave',
        resumo: 'A Comissão de Segurança Pública da Câmara aprovou projeto de lei que determina o reinício da contagem do tempo para a liberdade condicional em caso de falta grave do preso. A proposta, que altera o Código Penal, visa incentivar a boa conduta e reduzir a reincidência, mas ainda precisa ser avaliada p',
        imagem: 'https://www.camara.leg.br/midias/image/2026/06/img20260311113033921-768x473.jpeg',
        autor: 'Câmara dos Deputados', tempo: '39 min atrás'
    },
    {
        id: 18, categoria: 'politica',
        titulo: 'Senado Federal detalha gestão e interação em suas redes sociais oficiais',
        resumo: 'O Senado Federal divulgou sua política de uso para as plataformas de mídias sociais, detalhando a gestão de suas páginas e perfis oficiais. A atuação, a cargo do Núcleo de Mídias Sociais, prevê postagens diárias e monitoramento constante, acolhendo a participação dos usuários, mas ressalta a impossi',
        imagem: 'https://images.pexels.com/photos/7016970/pexels-photo-7016970.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Senado Federal', tempo: '39 min atrás'
    },
    {
        id: 19, categoria: 'politica',
        titulo: 'Urgência para votação de emendas da saúde para bombeiros acirra debate no Congresso',
        resumo: 'Um projeto que propõe destinar emendas parlamentares da área da saúde aos Corpos de Bombeiros avança no Congresso Nacional. A proposta, que já gerou divergências em debates, teve um pedido de urgência para sua votação aprovado e agora segue para análise da Comissão de Assuntos Econômicos (CAE).',
        imagem: 'https://images.pexels.com/photos/13072974/pexels-photo-13072974.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Senado Federal', tempo: '39 min atrás'
    },
    {
        id: 20, categoria: 'politica',
        titulo: 'Senado Federal disponibiliza acervo histórico completo de publicações',
        resumo: 'O Senado Federal disponibiliza online seu acervo histórico completo, incluindo todas as edições do Jornal do Senado, da revista Em Discussão! e publicações especiais. Para acompanhar as novidades, usuários podem se cadastrar para receber notificações do portal Senado Notícias.',
        imagem: 'https://images.pexels.com/photos/14911032/pexels-photo-14911032.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Senado Federal', tempo: '38 min atrás'
    },
    {
        id: 21, categoria: 'politica',
        titulo: 'STF anula absolvição de empresário em caso Mariana Ferrer; novo julgamento será feito',
        resumo: 'O Supremo Tribunal Federal (STF) anulou a absolvição do empresário André de Camargo Aranha, acusado de estuprar a influenciadora Mariana Ferrer em 2018. O processo será novamente julgado pela Justiça de Santa Catarina, sem a participação do juiz e promotor anteriores. A decisão atendeu a recurso da',
        imagem: 'https://images.pexels.com/photos/4328661/pexels-photo-4328661.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Agência Brasil', tempo: 'recente'
    },
    {
        id: 22, categoria: 'politica',
        titulo: 'Jaques Wagner atribui dólares da PF a diárias do Senado e relata apoio de Lula',
        resumo: 'O senador Jaques Wagner (PT-BA) afirmou que os dólares apreendidos pela Polícia Federal em sua residência são provenientes de diárias do Senado por viagens internacionais. O líder do governo negou envolvimento com Daniel Vorcaro e atuação em favor do Banco Master. Ele também revelou que o presidente',
        imagem: 'https://s2-g1.glbimg.com/6c9Z24g-Ihgzd0UpH-XxIZ8gwF8=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/A/V/PZJhNSRWOJhCjwGtSLaw/whatsapp-image-2026-06-18-at-10.41.55.jpeg',
        autor: 'G1 Política', tempo: 'agora'
    },
    {
        id: 23, categoria: 'brasil',
        titulo: 'Senado debate projeto para criar Política Nacional permanente contra violência à mulher',
        resumo: 'A Comissão de Direitos Humanos (CDH) debateu nesta quinta-feira (18) a criação de uma Política Nacional de Enfrentamento à Violência contra a Mulher. O Projeto de Lei 1.025/2026, do senador Paulo Paim (PT-RS), visa transformar e ampliar as medidas protetivas existentes em um sistema estruturado, coo',
        imagem: 'https://images.pexels.com/photos/3924906/pexels-photo-3924906.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Senado Federal', tempo: 'recente'
    },
    {
        id: 24, categoria: 'eventos',
        titulo: 'BR-070: Comissão do Senado cobra duplicação para fluxo de cargas em MT',
        resumo: 'A Comissão de Infraestrutura do Senado inspecionou a BR-070 em Mato Grosso e cobrou a duplicação da rodovia. A medida é vital para evitar acidentes e garantir o escoamento da produção, diante do intenso tráfego de cargas previsto com um novo terminal ferroviário na região.',
        imagem: 'https://www12.senado.leg.br/noticias/materias/2026/06/18/comissao-de-infraestrutura-defende-duplicacao-da-br-070-em-visita-a-mt/whatsapp-image-2026-06-18-at-16-21-58-1.jpeg',
        autor: 'Senado Federal', tempo: 'recente'
    },
    {
        id: 25, categoria: 'politica',
        titulo: 'Alcolumbre sai em defesa de Jaques Wagner após operação da PF e cobra presunção de inocência',
        resumo: 'O presidente do Senado, Davi Alcolumbre, manifestou solidariedade a Jaques Wagner (PT-BA), líder do governo, após uma operação da Polícia Federal. Alcolumbre defendeu a presunção de inocência e criticou julgamentos antecipados de agentes públicos. A assessoria de Wagner negou que ele seja alvo de de',
        imagem: 'https://www12.senado.leg.br/noticias/materias/2026/06/18/davi-alcolumbre-manifesta-apoio-a-jaques-wagner-e-defende-presuncao-de-inocencia/20260618_00743g.jpg',
        autor: 'Senado Federal', tempo: 'recente'
    },
    {
        id: 26, categoria: 'politica',
        titulo: 'Davi Alcolumbre cancela sessão do Congresso para análise de vetos e Orçamento 2026',
        resumo: 'A sessão conjunta do Congresso Nacional, marcada para esta quinta-feira (18), foi cancelada. O presidente Davi Alcolumbre justificou a decisão pela falta de acordo entre governo e parlamentares e o baixo quórum. Vetos presidenciais e projetos de créditos adicionais ao Orçamento de 2026 seriam analis',
        imagem: 'https://www12.senado.leg.br/noticias/videos/2026/06/davi-cancela-sessao-do-congresso-para-analise-de-vetos/@@images/a1e3b9f1-782e-48df-90aa-b2fcbc5dc1fe.jpeg',
        autor: 'Senado Federal', tempo: 'recente'
    },
    {
        id: 27, categoria: 'politica',
        titulo: 'Hublot e Flamengo renovam parceria de 15 anos e anunciam relógio de edição limitada',
        resumo: 'A Hublot e o Clube de Regatas do Flamengo renovaram sua parceria de 15 anos. Para celebrar, uma nova coleção de relógios exclusivos será lançada, com apenas 130 unidades numeradas em homenagem ao aniversário do clube. As peças terão preço equivalente ao praticado no mercado europeu.',
        imagem: 'https://static.poder360.com.br/uploads/2026/06/flamengo-hublot-848x477.png',
        autor: 'Poder360 ·', tempo: 'agora'
    },
    {
        id: 28, categoria: 'esportes',
        titulo: 'Copa do Mundo de 2026: A contagem regressiva para o maior evento do futebol',
        resumo: 'A Copa do Mundo de 2026 está confirmada e será a próxima grande atração do calendário esportivo internacional. O evento, que reúne as melhores seleções do planeta, já gera expectativas entre fãs e especialistas.',
        imagem: 'https://cdn.jsdelivr.net/gh/sergiosdlima/assets-ebc@1.0.0/public/thumbs/thumb_1200x600_agbrasil.png',
        autor: 'Agência Brasil', tempo: 'recente'
    },
    {
        id: 29, categoria: 'esportes',
        titulo: 'Copa do Mundo: Fifa intensifica combate ao ódio com ação em campo e bloqueios online',
        resumo: 'Capitães das seleções que jogam nesta quinta-feira na Copa do Mundo trocarão flâmulas especiais em protesto contra a discriminação e o discurso de ódio. A iniciativa marca o Dia Internacional de Combate ao Discurso de Ódio, enquanto a Fifa revela ter bloqueado centenas de milhares de publicações ofe',
        imagem: 'https://images.pexels.com/photos/38045188/pexels-photo-38045188.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Agência Brasil', tempo: 'recente'
    },
    {
        id: 30, categoria: 'esportes',
        titulo: 'Cruzeiro Feminino: Lesão de Paloma Maciel eleva para sete casos de LCA',
        resumo: 'A zagueira Paloma Maciel, do Cruzeiro feminino, rompeu o ligamento cruzado anterior (LCA) e o menisco do joelho direito durante treino da seleção brasileira para a Copa do Mundo de 2027. Com sua lesão, ela se torna a sétima atleta do clube a sofrer a mesma contusão, sendo seis delas nesta temporada,',
        imagem: 'https://images.pexels.com/photos/31756788/pexels-photo-31756788.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Lincoln Chaves - Repórter da EBC', tempo: 'agora'
    },
    {
        id: 31, categoria: 'brasil',
        titulo: 'Fenômeno Raro: Alinhamento de Vênus, Júpiter e Mercúrio com a Lua visível a olho nu',
        resumo: 'Um raro alinhamento da Lua crescente com Vênus, Júpiter e Mercúrio foi observado a olho nu em diversas regiões do Brasil nesta quarta (17) e segue visível nesta quinta (18). O fenômeno se destaca pela proximidade aparente dos astros, tornando-o excepcional, e pode ser contemplado sem equipamentos, e',
        imagem: 'https://images.pexels.com/photos/1040873/pexels-photo-1040873.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Agência Brasil', tempo: 'recente'
    },
    {
        id: 32, categoria: 'eventos',
        titulo: 'Prazo para Pontos e Pontões de Cultura em SP é prorrogado; editais somam R$ 19,2 mi',
        resumo: 'As inscrições para os programas Pontos e Pontões de Cultura em São Paulo foram prorrogadas até 13 de julho. Os editais somam R$ 19,2 milhões em fomento para até 49 projetos continuados de dois anos e R$ 3,6 milhões em premiações para 80 iniciativas. Candidaturas pelo site da Secretaria de Cultura, E',
        imagem: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Agência Brasil', tempo: 'recente'
    },
    {
        id: 33, categoria: 'politica',
        titulo: 'PF acusa Jaques Wagner de receber apartamento milionário em nova fase de operação',
        resumo: 'A Polícia Federal investiga o senador Jaques Wagner (PT-BA) por suposto recebimento de um apartamento de R$ 2,45 milhões de um banqueiro, em nova fase da Operação Compliance Zero. A apuração, autorizada pelo STF, aponta indícios de vantagens indevidas. Wagner nega as acusações e diz estar tranquilo.',
        imagem: 'https://images.pexels.com/photos/29577924/pexels-photo-29577924.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Agência Brasil', tempo: 'recente'
    },
    {
        id: 34, categoria: 'brasil',
        titulo: 'Saúde lança Padi Brasil e destina R$ 500 milhões para atendimento domiciliar a idosos',
        resumo: 'O Ministério da Saúde lançou o Programa de Atenção Domiciliar à Pessoa Idosa (Padi Brasil), com investimento de R$ 500 milhões para levar equipes multiprofissionais aos lares de idosos com limitações funcionais. A iniciativa visa ampliar o cuidado e o atendimento especializado, permitindo que municí',
        imagem: 'https://images.pexels.com/photos/6941882/pexels-photo-6941882.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Agência Brasil', tempo: 'recente'
    },
    {
        id: 35, categoria: 'politica',
        titulo: 'PCDF pede a Moraes autorização para ouvir Bolsonaro sobre arma de segurança',
        resumo: 'A Polícia Civil do DF pediu ao ministro Alexandre de Moraes, do STF, autorização para intimar o ex-presidente Jair Bolsonaro. O depoimento se refere a uma arma de fogo encontrada com um de seus seguranças, após tentativa anterior de intimação ser impedida. Se autorizado, a oitiva seria em 24 de març',
        imagem: 'https://images.pexels.com/photos/7714859/pexels-photo-7714859.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Agência Brasil', tempo: 'recente'
    },
    {
        id: 36, categoria: 'brasil',
        titulo: 'PGR defende lei que pode abrandar penas de condenados do 8/1 e Bolsonaro no STF',
        resumo: 'A PGR enviou parecer ao STF contra a suspensão da Lei da Dosimetria, que pode reduzir penas de condenados pelos atos de 8 de janeiro de 2023, incluindo o ex-presidente Jair Bolsonaro. Suspensa por Alexandre de Moraes, a norma é defendida pela Procuradoria como constitucional, pois não individualiza',
        imagem: 'https://images.pexels.com/photos/20758167/pexels-photo-20758167.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Agência Brasil', tempo: 'recente'
    },
    {
        id: 37, categoria: 'brasil',
        titulo: 'Brasil contorna alta global e tem menor reajuste de combustíveis, aponta Ineep',
        resumo: 'O Brasil registrou um aumento significativamente menor nos preços da gasolina e do diesel em comparação com a média internacional. Estudo do Ineep indica que, entre fevereiro e junho, a alta no país foi de 4,9% para gasolina e 13,6% para diesel, contra 17,5% e 23,3% globais, respectivamente. A polít',
        imagem: 'https://images.pexels.com/photos/7741111/pexels-photo-7741111.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Agência Brasil', tempo: 'recente'
    },
    {
        id: 38, categoria: 'politica',
        titulo: 'PF investiga Jaques Wagner por supostas vantagens indevidas; políticos repercutem',
        resumo: 'A Polícia Federal deflagrou a 9ª fase da Operação Compliance Zero, investigando o líder do governo no Senado, Jaques Wagner (PT-BA). O senador é suspeito de receber vantagens indevidas, como um apartamento e R$ 3,5 milhões, em troca de atuação política em um esquema bilionário. A operação provocou f',
        imagem: 'https://s2-g1.glbimg.com/KMObn_ABHYgV6wHC6-Kj012D0-Q=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/p/F/K3FwkLSnaIXEXoGKa7IA/55238712415-4ebd27fcf8-o.jpg',
        autor: 'G1 Política', tempo: '5h atrás'
    },
    {
        id: 39, categoria: 'politica',
        titulo: 'PF deflagra 9ª fase da Compliance Zero e mira senador e dono de banco por fraude bilionária',
        resumo: 'A Polícia Federal deflagrou a 9ª fase da Operação Compliance Zero nesta quinta-feira (18), investigando um suposto esquema bilionário de fraudes e lavagem de dinheiro ligado ao Banco Master. Entre os alvos estão o senador Jaques Wagner e o banqueiro Augusto Ferreira Lima, dono do Banco Pleno, instit',
        imagem: 'https://s2-g1.glbimg.com/viZhNw68U00x-bonaG-Fq-izXuc=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/4/Q/g0MHKZQWaDvLRI5yPQLQ/banco-pleno.jpg',
        autor: 'G1 Política', tempo: '9h atrás'
    },
    {
        id: 40, categoria: 'brasil',
        titulo: 'Preços de fertilizantes recuam com acordo EUA-Irã e menor demanda interna',
        resumo: 'Os preços internacionais dos fertilizantes registraram alívio após o acordo entre Estados Unidos e Irã. No mercado interno, a queda já era observada nas últimas semanas, impulsionada pela retração da demanda. Produtores brasileiros avaliam a relação de troca para garantir a lucratividade de suas ope',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/18/17818234676a3477eb3eaa8_1781823467_3x2_rt.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 41, categoria: 'brasil',
        titulo: 'Angelina Jolie aborda mortalidade e prepara filhos para sua ausência em desabafo',
        resumo: 'A atriz Angelina Jolie discorreu sobre temas delicados como a morte, a saúde e a criação dos filhos. A revelação veio durante as divulgações de seu novo filme, "Vidas Entrelaçadas", onde ela afirmou estar preparando seus filhos para a possibilidade de sua ausência.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/04/18/177654539169e3ee6fdd6e2_1776545391_3x2_rt.jpg',
        autor: 'Victoria Borges', tempo: 'agora'
    },
    {
        id: 42, categoria: 'brasil',
        titulo: 'Morre Telê Ancona Lopez, professora da USP que desvendou o modernismo de Mário de Andrade',
        resumo: 'A academia brasileira lamenta a perda de Telê Ancona Lopez, professora da USP e grande especialista em Mário de Andrade. Mesmo tendo apenas seis anos quando o modernista morreu, ela desvendou como poucos a obra e a vida do fundador do modernismo brasileiro.',
        imagem: 'https://images.pexels.com/photos/18078285/pexels-photo-18078285.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'André Fleury Moraes', tempo: 'agora'
    },
    {
        id: 43, categoria: 'brasil',
        titulo: 'Drama Gélido: Pescadora em nevasca encontra adolescente sequestrada em trama tensa',
        resumo: 'Em meio a uma nevasca implacável, a pescadora Barb embarca em uma jornada perigosa para honrar a última vontade de seu falecido marido. Ao se perder, ela se depara com uma cabana isolada, revelando um segredo sombrio: uma adolescente mantida em cativeiro.',
        imagem: 'https://images.pexels.com/photos/13250764/pexels-photo-13250764.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Jacqueline Cantore', tempo: 'agora'
    },
    {
        id: 44, categoria: 'brasil',
        titulo: 'Preso suspeito de matar PM reformado em assalto na zona leste de São Paulo',
        resumo: 'A Polícia Civil prendeu nesta quinta-feira (18) um suspeito de envolvimento na morte de um policial militar reformado. O crime ocorreu durante um roubo na terça-feira, na zona leste de São Paulo.',
        imagem: 'https://images.pexels.com/photos/13344830/pexels-photo-13344830.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Paulo Eduardo Dias', tempo: 'agora'
    },
    {
        id: 45, categoria: 'brasil',
        titulo: 'MS: Polícia confronta indígenas com bombas e tiros em terra retomada',
        resumo: 'Famílias Kaiowá e Guarani foram alvo de ação policial com bombas e tiros ao tentar retomar a Fazenda Limoeiro, em Amambai (MS). Mais de dez viaturas, incluindo o Batalhão de Choque, participaram da operação de despejo. A Força Nacional agora media o diálogo no local, onde as famílias permanecem.',
        imagem: 'https://images.pexels.com/photos/6486609/pexels-photo-6486609.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Flávia Albuquerque - Repórter da Agência Brasil', tempo: 'agora'
    },
    {
        id: 46, categoria: 'brasil',
        titulo: 'Menos frio e chuvas irregulares: El Niño altera inverno no Brasil',
        resumo: 'O inverno, que começa no próximo domingo (21), será marcado por temperaturas mais amenas no Brasil devido ao fenômeno El Niño, recém-confirmado. A previsão da consultoria Nottus aponta para chuvas intensas no Sul e risco de seca no Norte e Nordeste, especialmente a partir de agosto.',
        imagem: 'https://images.pexels.com/photos/2529048/pexels-photo-2529048.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Bruno de Freitas Moura - Repórter da Agência Brasil', tempo: 'agora'
    },
    {
        id: 47, categoria: 'politica',
        titulo: 'Gilmar Mendes propõe súmula do STF para barrar pautas-bomba no Congresso',
        resumo: 'O ministro Gilmar Mendes, do Supremo Tribunal Federal (STF), propôs a criação de uma súmula vinculante. A medida visa estabelecer critérios para coibir a aprovação de projetos legislativos, conhecidos como \'pautas-bomba\', que geram alto impacto fiscal ou desequilíbrio orçamentário no Congresso Nacio',
        imagem: 'https://images.pexels.com/photos/15434151/pexels-photo-15434151.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '1h atrás'
    },
    {
        id: 48, categoria: 'esportes',
        titulo: 'Justiça mantém prisão de instrutores por morte em salto sem corda no interior de SP',
        resumo: 'A Justiça negou o pedido de habeas corpus para dois dos três instrutores presos pela morte de uma jovem lançada sem corda durante um salto de rope jump no interior de São Paulo. Luis Felipe Feliciano Egoroff e Maicon Fernandes Cintra permanecerão detidos, acusados de homicídio com dolo eventual, enq',
        imagem: 'https://s2-g1.glbimg.com/nqSuOyTuzXjuaOdQz_IeIvXlfX8=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/e/h/jOhszNS3iH5rDz51H4GQ/screenshot-13.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 49, categoria: 'esportes',
        titulo: 'PF prende chefe de tráfico interestadual foragido há 6 meses em Fortaleza',
        resumo: 'A Polícia Federal prendeu nesta quinta-feira (18), em Fortaleza, Keven Normandia Pereira, 30 anos, apontado como líder de uma organização criminosa de tráfico interestadual de drogas. Foragido com mandado de prisão por condenação de 6 anos, ele foi capturado após seis meses de investigação e tentou',
        imagem: 'https://s2-g1.glbimg.com/Xb2FnzjivmquKPVcHX-x1aKxVDA=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/i/B/9nCHEBQ3GIwAlqBBDEOw/6e8ec15e-9e13-4e4f-9da4-35182eebb6f4.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 50, categoria: 'brasil',
        titulo: 'Condenado por violência doméstica, homem é preso em Boa Vista por agredir companheira',
        resumo: 'Um homem de 44 anos, condenado por lesão corporal no contexto de violência doméstica, foi preso em Boa Vista (RR). A prisão, realizada pela Delegacia Especializada de Atendimento à Mulher (Deam) na Operação Mulher Segura, cumpriu mandado judicial referente a agressões contra sua companheira em 2020.',
        imagem: 'https://s2-g1.glbimg.com/c5lEVSt35_EMTIeVr8UJ6wgiqQg=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/P/f/3bK1aXTe2Ub3tiAq51Og/homem-e-preso-pela-pcrr.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 51, categoria: 'brasil',
        titulo: 'Polícia Civil mira golpe do falso banco que vitimou moradores do interior de SP',
        resumo: 'A Polícia Civil de Pirapozinho (SP) deflagrou a Operação Speculum contra um golpe do falso banco, com vítimas no interior paulista. Três mandados de busca foram cumpridos em São Paulo, mirados em suspeitos que acessavam remotamente celulares para fraudar transferências e empréstimos. Um investigado',
        imagem: 'https://s2-g1.glbimg.com/PrZ5HZoCSIVJ9TKzOP5tZ_hrLTo=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/T/x/0MKXG2S760XnvtlVSf3Q/1200x800-3-52-.png',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 52, categoria: 'brasil',
        titulo: 'Operação desmantela domínio paralelo do Comando Vermelho em comunidade de São Luís',
        resumo: 'A Polícia Civil e o Ministério Público do Maranhão deflagraram nesta quinta-feira a Operação Domínio Paralelo em São Luís. A ação visa desarticular um núcleo do Comando Vermelho, investigado por extorsão, controle ilegal da comunidade Península do Ipase e lavagem de dinheiro. Três mandados de prisão',
        imagem: 'https://s2-g1.glbimg.com/csXpDzDBy93qWG0oGFvRZwE5K2g=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/j/6/7CSNYTRi66gtJh4Y6P3Q/montagens-1920-x-1080-px-43-.png',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 53, categoria: 'politica',
        titulo: 'Caso Marielle: STF forma maioria e mantém condenações de Brazões e outros três',
        resumo: 'A Primeira Turma do Supremo Tribunal Federal (STF) formou maioria para rejeitar recursos e manter as condenações de cinco envolvidos no assassinato de Marielle Franco e Anderson Gomes. Os irmãos Domingos e João Brazão tiveram suas penas de 76 anos confirmadas. As sentenças variam de 9 a 76 anos de p',
        imagem: 'https://s2-g1.glbimg.com/lNmXuXJMgwESlVewF5-mK292AaA=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/a/g/Ut45OSSB6FUEzOKUF3aw/globo-canal-4-20260225-2000-frame-23487.jpeg',
        autor: 'G1 Política', tempo: 'agora'
    },
    {
        id: 54, categoria: 'politica',
        titulo: 'Deputado do PT pede afastamento de Jaques Wagner após PF apreender US$ 49 mil',
        resumo: 'A Polícia Federal apreendeu US$ 49 mil em espécie em um endereço ligado ao senador Jaques Wagner (PT-BA) durante a 9ª fase da Operação Compliance Zero. Diante das investigações, o deputado Rogério Correia (PT-MG) defendeu o afastamento de Wagner da liderança do governo no Senado para que ele se dedi',
        imagem: 'https://s2-g1.glbimg.com/D9zygfXG_r8ZrPbC0I7ED3s3HLE=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/x/3/1HrZfsTpqJfXOPTNpK8Q/podcast-g1-rogerio-correia-29-aug-2024-frame-58797.jpeg',
        autor: 'G1 Política', tempo: 'agora'
    },
    {
        id: 55, categoria: 'politica',
        titulo: 'PF mira Jaques Wagner e Ciro Nogueira por emenda ligada a fraude bancária',
        resumo: 'PF deflagrou operação contra Jaques Wagner (PT-BA) por suspeita de articulação da \'emenda Master\'. A proposta elevaria o limite do FGC para R$ 1 milhão, sendo investigada por favorecer uma fraude do Banco Master. A PF apura o envolvimento bipartidário na aprovação da medida.',
        imagem: 'https://s2-g1.glbimg.com/_jyNBYhaTm76hwqcO-Y8ofP6ls8=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/e/8/3UA1GlQACfJCz0IIBexA/53923602044-fe040912c9-o.jpg',
        autor: 'G1 Política', tempo: '23 min atrás'
    },
    {
        id: 56, categoria: 'politica',
        titulo: 'Zema não recua em críticas a Flávio Bolsonaro por ligações com banqueiro do Master',
        resumo: 'Romeu Zema (Novo) reafirmou que não voltará atrás nas críticas a Flávio Bolsonaro (PL-RJ) sobre o caso Banco Master. O pré-candidato à Presidência reiterou que quem se aproximou do banqueiro Daniel Vorcaro deve ser visto com reservas, após mensagens do senador cobrando recursos dele virem à tona. A',
        imagem: 'https://s2-g1.glbimg.com/nfgAHrXIGlbPerJq_qs3ng8TLYM=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/S/D/G2iGM4QBG85uEVk1GPDA/encontro-pre-candidatos-andre-01-jun-2026-frame-163187.jpeg',
        autor: 'G1 Política', tempo: '1h atrás'
    },
    {
        id: 57, categoria: 'politica',
        titulo: 'PF encontra diálogos de Motta pedindo empréstimo a ex-banqueiro para cunhada',
        resumo: 'Diálogos da PF indicam Hugo Motta, presidente da Câmara, solicitou a Daniel Vorcaro, ex-dono do Banco Master, empréstimo de R$ 22 milhões para a empresa da cunhada. Motta confirmou viagem em jato e hospedagem paga por Vorcaro, alegando desconhecer irregularidades à época.',
        imagem: 'https://s2-g1.glbimg.com/DD8tjlCENHFwqmz4Af_r5kC9P2c=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2025/b/3/wdskuDRo6Czz8yUYEPVg/2025-06-09t150937z-1-lynxmpel580mf-rtroptp-4-politica-motta-iof-ambiente.jpg',
        autor: 'G1 Política', tempo: '21h atrás'
    },
    {
        id: 58, categoria: 'esportes',
        titulo: 'PF aponta Jaques Wagner como interlocutor chave em caso Master',
        resumo: 'A Polícia Federal (PF) suspeita que Jaques Wagner atuou como interlocutor relevante em temas de interesse do Master. A suspeita é embasada em mensagens encontradas no celular de Augusto Lima, ex-sócio de Vorcaro.',
        imagem: 'https://images.metroimg.com/2026/06/07042026-ln-jaques-wagner-no-metropoles-5.jpg',
        autor: 'Metrópoles', tempo: 'agora'
    },
    {
        id: 59, categoria: 'esportes',
        titulo: 'Márcia Sensitiva prevê Vini Jr. submisso a Virginia Fonseca e retorno do casal',
        resumo: 'A sensitiva Márcia Sensitiva fez uma previsão sobre o futuro do relacionamento entre Vini Jr. e Virginia Fonseca. Segundo ela, o jogador cederia às vontades da influenciadora digital, e o casal estaria prestes a reatar.',
        imagem: 'https://images.metroimg.com/2026/06/vini-jr-virginia-fonseca-presente-do-dia-dos-namorados.jpg',
        autor: 'Metrópoles', tempo: '31 min atrás'
    },
    {
        id: 60, categoria: 'esportes',
        titulo: 'Céu do Brasil exibe rara conjunção de Lua e planetas Vênus, Mercúrio e Júpiter nesta quinta',
        resumo: 'A rara conjunção astronômica entre a Lua e os planetas Vênus, Mercúrio e Júpiter poderá ser observada novamente na noite desta quinta-feira em diversas regiões do Brasil. Este fenômeno, que faz os astros parecerem próximos por uma ilusão de ótica, é considerado raro por envolver quatro corpos celest',
        imagem: 'https://images.metroimg.com/2026/06/1-6.jpg',
        autor: 'Metrópoles', tempo: '2h atrás'
    },
    {
        id: 61, categoria: 'internacional',
        titulo: 'Produtor Tay Keith, colaborador de Travis Scott e Drake, morre aos 29 anos',
        resumo: 'Tay Keith, renomado produtor musical conhecido por trabalhos com Travis Scott e Drake, foi encontrado morto em seu apartamento em Nashville, Tennessee. A notícia da morte do artista, que tinha 29 anos, foi confirmada na quinta-feira, 18 de junho.',
        imagem: 'https://images.metroimg.com/2026/06/thay-keith.jpg',
        autor: 'Metrópoles', tempo: 'agora'
    },
    {
        id: 62, categoria: 'brasil',
        titulo: 'Labubu: Famosos bonecos colecionáveis iniciam vendas oficiais no Brasil',
        resumo: 'Os aguardados bonecos Labubu, que conquistaram fãs globalmente, agora estão oficialmente disponíveis para venda no Brasil. A comercialização teve início nesta quinta-feira, 18 de junho, marcando a entrada da marca no mercado nacional.',
        imagem: 'https://images.metroimg.com/2026/06/labubus-chegam-ao-brasil.png',
        autor: 'Metrópoles', tempo: 'agora'
    },
    {
        id: 63, categoria: 'brasil',
        titulo: 'Xuxa e Paquitas Originais Anunciam Turnê \'O Último Voo da Nave\' Pelo Brasil',
        resumo: 'Xuxa Meneghel prepara o lançamento da turnê \'O Último Voo da Nave\', que percorrerá diversas cidades do Brasil. O projeto contará com a presença das Paquitas originais, prometendo um reencontro marcante para o público.',
        imagem: 'https://images.metroimg.com/2026/06/xuxa-meneghel-tera-paquitas-turne.jpg',
        autor: 'Metrópoles', tempo: 'agora'
    },
    {
        id: 64, categoria: 'brasil',
        titulo: 'FGV mantém inaptidão de candidato com nanismo em concurso para delegado',
        resumo: 'A Fundação Getúlio Vargas (FGV) divulgou o resultado do recurso de um candidato com nanismo em concurso para delegado. A decisão manteve o participante na condição de inapto, confirmando a desclassificação.',
        imagem: 'https://images.metroimg.com/2026/04/whatsapp-image-2026-04-24-at-164745_3x2.jpg',
        autor: 'Metrópoles', tempo: '41 min atrás'
    },
    {
        id: 65, categoria: 'brasil',
        titulo: 'TJD-DF agenda novo julgamento de briga generalizada após recursos',
        resumo: 'O Tribunal de Justiça Desportiva do Distrito Federal (TJD-DF) marcou um novo julgamento para a briga generalizada ocorrida em 7 de junho. A decisão vem após recursos apresentados pelos clubes envolvidos e pela procuradoria.',
        imagem: 'https://images.metroimg.com/2026/06/sobradinho-capital.jpg',
        autor: 'Metrópoles', tempo: '1h atrás'
    },
    {
        id: 66, categoria: 'brasil',
        titulo: 'Vídeo de IA de Endrick para Ancelotti viraliza em meio a expectativa por vaga',
        resumo: 'Um vídeo gerado por inteligência artificial (IA) de Endrick fazendo um apelo ao técnico Carlo Ancelotti viralizou nas redes sociais. A produção digital surge em meio à intensa expectativa dos fãs para que o jogador seja escalado como titular da Seleção Brasileira nesta sexta-feira.',
        imagem: 'https://images.metroimg.com/ed8986fb-endrick-real-madrid-lyon-ancelotti-copa-do-mundo.jpg',
        autor: 'Metrópoles', tempo: '2h atrás'
    },
    {
        id: 67, categoria: 'politica',
        titulo: 'PF mira amigo próximo de Jaques Wagner por suposta articulação em caso \'Master\'',
        resumo: 'Guilherme Henrique Sodré, apontado como "melhor amigo" do senador Jaques Wagner, foi alvo de uma operação da Polícia Federal. Ele é investigado pela PF por sua atuação como articulador de um caso, referido como "Master", junto ao parlamentar.',
        imagem: 'https://images.metroimg.com/2026/06/melhore-esse-texto-gramaticalmente-nao-mude-estilo-do-texto-e-nem-acrescente-informacoes-6-1.jpg',
        autor: 'Metrópoles', tempo: '15 min atrás'
    },
    {
        id: 68, categoria: 'brasil',
        titulo: 'Pai confessa ter matado bebê de 9 meses com tapa na cabeça por choro',
        resumo: 'Um bebê de apenas 9 meses morreu após ser agredido pelo próprio pai. O homem procurou a Polícia Militar Rodoviária e confessou ter matado a criança com um tapa na cabeça, irritado com o choro. A vítima foi deixada desacordada em uma UPA antes de falecer.',
        imagem: 'https://images.metroimg.com/2026/06/filho.jpg',
        autor: 'Metrópoles', tempo: '1h atrás'
    },
    {
        id: 69, categoria: 'brasil',
        titulo: 'Construtora do DF: 330 processos, dívida milionária e investigação por irregularidades',
        resumo: 'Uma construtora do Distrito Federal enfrenta 330 processos judiciais e está sob investigação por irregularidades. A empresa acumula uma dívida ativa com a União superior a R$ 1,6 milhão, além de ser acusada pela falta de entrega de imóveis.',
        imagem: 'https://images.metroimg.com/2026/06/empreendimento.jpg',
        autor: 'Metrópoles', tempo: '2h atrás'
    },
    {
        id: 70, categoria: 'brasil',
        titulo: 'Filho preso por deixar mãe de 68 anos na fome após tomar aposentadoria de R$ 16 mil',
        resumo: 'A Polícia Militar prendeu um homem em flagrante por deixar a própria mãe, de 68 anos, em condições desumanas de higiene e sem acesso a alimentos. Ele é acusado de ter se apropriado da aposentadoria de R$ 16 mil da idosa, que vivia em situação de fome.',
        imagem: 'https://images.metroimg.com/2026/06/filhoaposentadoria-mae-maceio.jpg',
        autor: 'Metrópoles', tempo: 'agora'
    },
    {
        id: 71, categoria: 'esportes',
        titulo: 'Copa: Volante do Canadá sofre fratura exposta em dividida violenta; jogador do Catar é expulso',
        resumo: 'O volante canadense Ismaël Koné sofreu uma fratura exposta na perna após uma dividida violenta em partida contra o Catar. O jogador precisou deixar o gramado de maca, e o adversário foi expulso pelo lance.',
        imagem: 'https://images.metroimg.com/2026/06/kone.jpg',
        autor: 'Metrópoles', tempo: 'agora'
    },
    {
        id: 72, categoria: 'politica',
        titulo: 'Delegado da PCDF informa a Moraes: escolta de Bolsonaro impediu intimação',
        resumo: 'Um delegado da Polícia Civil do Distrito Federal (PCDF) reportou ao ministro Alexandre de Moraes, do Supremo Tribunal Federal, que a equipe de segurança do ex-presidente Jair Bolsonaro impediu o cumprimento de uma intimação. O documento seria para uma oitiva.',
        imagem: 'https://images.metroimg.com/2026/02/ex-presidente-da-republica-Jair-Messias-Bolsonaro-concede-entrevista-exclusiva-ao-colunista-do-Metropoles-Igor-Gadelha-10.jpg',
        autor: 'Metrópoles', tempo: 'agora'
    },
    {
        id: 73, categoria: 'politica',
        titulo: 'Lula telefona a Jaques Wagner mais de uma vez após operação da PF',
        resumo: 'O presidente Luiz Inácio Lula da Silva telefonou ao líder do governo no Senado, Jaques Wagner, mais de uma vez. O contato ocorreu nesta quinta-feira (18/6), após uma operação deflagrada pela Polícia Federal.',
        imagem: 'https://images.metroimg.com/2026/05/foto-lula-desenrola.jpeg',
        autor: 'Metrópoles', tempo: 'agora'
    },
    {
        id: 74, categoria: 'brasil',
        titulo: 'Cariúcha considera saída do SBT um acerto e comenta críticas e vida amorosa',
        resumo: 'Em entrevista exclusiva, a apresentadora Cariúcha classificou sua saída do SBT como uma decisão acertada. Ela ainda comentou as críticas recebidas durante sua passagem pela emissora e adiantou que não planeja iniciar um novo relacionamento amoroso por enquanto.',
        imagem: 'https://images.metroimg.com/2026/02/ca-182.jpg',
        autor: 'Metrópoles', tempo: 'agora'
    },
    {
        id: 75, categoria: 'esportes',
        titulo: 'Liverpool contrata Víctor Muñoz, destaque da Espanha na Copa do Mundo',
        resumo: 'O Liverpool anunciou a contratação do atacante Víctor Muñoz, que integra a seleção da Espanha para a disputa da Copa do Mundo. O jogador se destacou na última temporada 2025/26 atuando pelo Osasuna.',
        imagem: 'https://images.metroimg.com/2026/06/victor-munoz-liverpool-espanha.jpg',
        autor: 'Metrópoles', tempo: 'agora'
    },
    {
        id: 76, categoria: 'brasil',
        titulo: 'Feijão Perfeito: Demolho Correto e Creme Nutritivo Eliminam Gases e Encorpam Caldo',
        resumo: 'Descubra os segredos para preparar um feijão delicioso e saudável. Uma técnica de demolho adequada e a adição de um creme nutritivo são essenciais para encorpar o caldo, garantir sabor e evitar desconfortos digestivos, promovendo bem-estar.',
        imagem: 'https://images.metroimg.com/2025/11/20183836/feijao-1-1.jpg',
        autor: 'Metrópoles', tempo: 'agora'
    },
    {
        id: 77, categoria: 'esportes',
        titulo: 'Mundial 2026: Rodada inicial registra maior média de gols desde 1958',
        resumo: 'A primeira rodada da Copa do Mundo de 2026 registrou uma média de 3,13 gols por jogo, com 75 bolas na rede em 24 partidas. Este é o melhor desempenho ofensivo para uma rodada de abertura desde o Mundial de 1958, na Suécia, destacando um início promissor para o torneio.',
        imagem: 'https://images.metroimg.com/2026/06/andre-carrillo-corinthians-4-1.png',
        autor: 'Metrópoles', tempo: 'agora'
    },
    {
        id: 78, categoria: 'brasil',
        titulo: 'Nordeste emerge como polo estratégico, atraindo investidores e impulsionando o crescimento nacional',
        resumo: 'Durante a 3ª edição do evento Nordeste em Pauta, especialistas ressaltaram a crescente importância da região. Eles apontaram que o Nordeste tem se consolidado como um polo estratégico, atraindo investidores e contribuindo significativamente para o crescimento econômico do Brasil.',
        imagem: 'https://images.metroimg.com/2026/06/nordeste-em-pauta-2.jpg',
        autor: 'Metrópoles', tempo: '3 min atrás'
    },
    {
        id: 79, categoria: 'brasil',
        titulo: 'Müller: Futebol atual carece dos grandes talentos de outrora',
        resumo: 'O ex-jogador Müller, ídolo do São Paulo e da Seleção Brasileira, expressou sua visão sobre o futebol moderno, afirmando que a modalidade carece dos grandes talentos de outrora. A declaração foi feita em uma entrevista bem-humorada à jornalista Stephanie Alves, durante o novo quadro "Desafie o Craque',
        imagem: 'https://images.metroimg.com/2026/06/muller.jpg',
        autor: 'Metrópoles', tempo: '19 min atrás'
    },
    {
        id: 80, categoria: 'politica',
        titulo: 'Disparos em Times Square: Homem é preso e arma de fogo apreendida',
        resumo: 'A polícia de Nova York (NYPD) prendeu um homem após um incidente com disparos na famosa Times Square. Uma arma de fogo foi apreendida no cruzamento da West 44ª com a 7ª Avenida, mas não houve registro de feridos.',
        imagem: 'https://static.poder360.com.br/uploads/2026/06/tiroteio-na-times-square-848x477.png',
        autor: 'Poder360 ·', tempo: 'agora'
    },
    {
        id: 81, categoria: 'politica',
        titulo: 'Novo Nordisk processa EMS no RJ em briga por nome de medicamento',
        resumo: 'A Novo Nordisk, fabricante do Ozempic, acionou a Justiça do Rio de Janeiro contra a farmacêutica brasileira EMS. A disputa judicial concentra-se no nome "Ozivy", que a EMS defende ser uma marca original, enquanto a Novo Nordisk contesta a similaridade.',
        imagem: 'https://static.poder360.com.br/uploads/2026/05/Ozivy-848x477.jpg',
        autor: 'Poder360 ·', tempo: 'agora'
    },
    {
        id: 82, categoria: 'politica',
        titulo: 'Itaú: Superintendente e Diretor Jurídico visitam Poder360',
        resumo: 'Jorge Lima, superintendente de Relações Governamentais do Itaú, e Alvaro Rodrigues, diretor jurídico da instituição financeira, realizaram uma visita à sede do jornal digital Poder360. O encontro marcou a presença de importantes representantes do banco no veículo de comunicação.',
        imagem: 'https://static.poder360.com.br/uploads/2026/06/Jorge-Lima-Alvaro-Rodrigues-Bruno-Galhardi-848x477.jpg',
        autor: 'Poder360 ·', tempo: 'agora'
    },
    {
        id: 83, categoria: 'politica',
        titulo: 'Moraes Ignora Prazo em Ação nos EUA; AGU Atua com Aval de Fachin',
        resumo: 'As empresas norte-americanas Rumble e Trump Media afirmam que o ministro Alexandre de Moraes, do STF, ignorou o prazo de 15 de junho para responder a uma ação judicial nos EUA. A Advocacia-Geral da União (AGU) busca agora defender Moraes no processo, após obter aval do ministro Edson Fachin.',
        imagem: 'https://static.poder360.com.br/uploads/2025/02/moraes-trump-848x477.jpg',
        autor: 'Poder360 ·', tempo: 'agora'
    },
    {
        id: 84, categoria: 'politica',
        titulo: 'Aneel prevê R$ 2,3 bilhões a mais na conta de luz por encargos até 2027',
        resumo: 'A Agência Nacional de Energia Elétrica (Aneel) atualizou a projeção de impacto nas tarifas de energia. A estimativa aponta para um acréscimo de R$ 2,3 bilhões nas contas de luz até abril de 2027, decorrente de encargos de contratações de potência.',
        imagem: 'https://static.poder360.com.br/uploads/2026/06/contaluz-848x477.png',
        autor: 'Poder360 ·', tempo: 'agora'
    },
    {
        id: 85, categoria: 'politica',
        titulo: 'PT minimiza pressão sobre Wagner sob investigação; Lula decidirá liderança',
        resumo: 'O Partido dos Trabalhadores (PT) minimizou a pressão sobre o senador Jaques Wagner, investigado pela PF, reafirmando a presunção de inocência. O deputado Pedro Uczai (PT) declarou que a decisão sobre a permanência de Wagner como líder do governo no Senado cabe exclusivamente ao presidente Lula. A PF',
        imagem: 'https://static.poder360.com.br/uploads/2026/02/img20260202205550394MED-848x477.jpg',
        autor: 'Poder360 ·', tempo: 'agora'
    },
    {
        id: 86, categoria: 'economia',
        titulo: 'Sindicato defende Enel SP na Aneel e pede segurança jurídica para investimentos',
        resumo: 'O Sindicato da Indústria de Instalação do Estado de São Paulo (Sindistalação) enviou um ofício à Agência Nacional de Energia Elétrica (Aneel). O documento, endereçado ao diretor-geral Sandoval de Araujo Feitosa Neto, defende a continuidade dos investimentos da Enel SP e pede uma avaliação regulatóri',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/04/27/177732784769efdee71b7ee_1777327847_3x2_xl.jpg',
        autor: 'Alex Sabino', tempo: 'agora'
    },
    {
        id: 87, categoria: 'economia',
        titulo: 'São Paulo inicia vacinação infantil com nova dose pneumocócica 20-valente',
        resumo: 'A Prefeitura de São Paulo inicia neste sábado (20) a aplicação da vacina pneumocócica 20-valente em crianças. O novo imunizante, destinado a menores de 5 anos, substituirá gradualmente a versão 10-valente no calendário infantil.',
        imagem: 'https://f.i.uol.com.br/fotografia/2024/02/14/170795890165cd6275474da_1707958901_3x2_rt.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 88, categoria: 'economia',
        titulo: 'Justificativa do Copom para corte da Selic gera ruído e inquietação no mercado',
        resumo: 'A justificativa do Comitê de Política Monetária (Copom) para o corte da taxa Selic, anunciado na quarta-feira (17), gerou desconforto entre agentes do mercado. A recepção negativa da comunicação do Comitê sinaliza possíveis ruídos na interpretação da política monetária.',
        imagem: 'https://images.pexels.com/photos/34023907/pexels-photo-34023907.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Tamara Nassif, Felipe Gutierrez', tempo: 'agora'
    },
    {
        id: 89, categoria: 'economia',
        titulo: 'Governo avalia FGTS para quitação integral de dívidas consignadas de CLT',
        resumo: 'O governo federal estuda a possibilidade de permitir que trabalhadores celetistas utilizem o saldo do FGTS para quitar até 100% do valor nominal de dívidas contraídas no programa Crédito do Trabalhador. Esta linha de crédito consignado, com desconto em folha, foi reformulada e relançada pela gestão',
        imagem: 'https://s2-valor.glbimg.com/YLbbRyni2T3vg-EpvnoiCVP5fdw=/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2025/A/c/tlKJWaQgC3VFrzRdtz0w/mg-8465.jpg',
        autor: 'Valor Econômico', tempo: 'agora'
    },
    {
        id: 90, categoria: 'economia',
        titulo: 'Operação contra facção: Ex-assessor e companheira presos ocupavam cargos na Rioluz',
        resumo: 'Presos em flagrante durante operação que investiga elo de agentes públicos com o TCP, o ex-assessor parlamentar Michael Johnny Vianna de Azevedo e sua companheira, Suelen Silva dos Reis, ocupavam cargos na Rioluz. Ambos foram nomeados na companhia municipal no ano passado e serão exonerados.',
        imagem: 'https://s2-valor.glbimg.com/rCZw39wPxyZnRsJez0mRzANA0FA=/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2026/B/l/usq1oeSeiA6KmS0HnSwA/rioluz.jpeg',
        autor: 'Valor Econômico', tempo: 'agora'
    },
    {
        id: 91, categoria: 'economia',
        titulo: 'Oncoclínicas prepara pedido de recuperação extrajudicial para dívida de R$ 4 bilhões',
        resumo: 'A Oncoclínicas, rede de tratamento para câncer, deve protocolar pedido de recuperação extrajudicial em até três semanas. A medida visa reestruturar uma dívida de cerca de R$ 4 bilhões, em meio a negociações avançadas com credores.',
        imagem: 'https://s2-valor.glbimg.com/dWLGXXlPEfOhCcnXv2DSvkriWqo=/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2026/A/q/0hsbTzSQiqSvr0uoPmAw/foto07emp-101-onco-b4.jpg',
        autor: 'Valor Econômico', tempo: 'agora'
    },
    {
        id: 92, categoria: 'economia',
        titulo: 'Silvio Tini revela intenção de resgatar história do GPA e Pão de Açúcar',
        resumo: 'O investidor Silvio Tini revelou ao jornal Valor sua intenção de resgatar a história do GPA. O grupo, dono dos supermercados Pão de Açúcar, é um tradicional varejista de alimentos fundado pela família do empresário Abilio Diniz.',
        imagem: 'https://s2-valor.glbimg.com/attYG2JmoA-_lgGt7sMBCAtBkJo=/i.s3.glbimg.com/v1/AUTH_63b422c2caee4269b8b34177e8876b93/internal_photos/bs/2026/1/C/A0953AT0echXEBbNXngg/foto06emp-101-gpa-b3.jpg',
        autor: 'Valor Econômico', tempo: '28 min atrás'
    },
    {
        id: 93, categoria: 'tecnologia',
        titulo: 'Bad Bunny faz história e é o primeiro latino a arrecadar US$ 1 bilhão em turnês',
        resumo: 'Bad Bunny alcançou um marco inédito na indústria musical, tornando-se o primeiro artista latino a ultrapassar a marca de US$ 1 bilhão em arrecadação de bilheteria com suas turnês. O feito histórico foi confirmado pelos dados do renomado ranking Billboard Boxscore.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/18/17818212176a346f215d49f_1781821217_3x2_rt.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 94, categoria: 'tecnologia',
        titulo: 'Setor espacial busca seguradoras para cobrir riscos de data centers em órbita',
        resumo: 'Empresas espaciais iniciaram diálogos com seguradoras para discutir a cobertura de centros de dados de inteligência artificial em órbita. A iniciativa representa um avanço inicial para este setor experimental, que conta com o apoio de gigantes como SpaceX e Blue Origin.',
        imagem: 'https://images.pexels.com/photos/37797428/pexels-photo-37797428.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Akash Sriram, Jemima Denham', tempo: 'agora'
    },
    {
        id: 95, categoria: 'internacional',
        titulo: 'Obama inaugura complexo em Chicago e faz críticas veladas à gestão da Casa Branca',
        resumo: 'O ex-presidente Barack Obama inaugurou nesta quinta-feira (18) o Centro Presidencial Obama em Chicago. Durante a cerimônia, ele direcionou críticas veladas ao atual ocupante da Casa Branca, sem citar nominalmente Donald Trump.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/18/17818160256a345ad909e2a_1781816025_3x2_rt.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 96, categoria: 'internacional',
        titulo: 'Israel expande zona militar no Líbano e desafia entendimento EUA-Irã sobre soberania',
        resumo: 'Israel divulgou nesta quinta-feira um mapa que mostra uma zona de controle militar ampliada no sul do Líbano. A ação, que inclui a ameaça de ataques além dessa área, representa um desafio direto ao entendimento entre Estados Unidos e Irã que prevê o respeito à soberania libanesa.',
        imagem: 'https://images.pexels.com/photos/15166867/pexels-photo-15166867.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: '', tempo: 'agora'
    },
    {
        id: 97, categoria: 'politica',
        titulo: 'STF avança em súmula para barrar \'pautas-bomba\' que elevam gastos públicos',
        resumo: 'O presidente do STF, Luiz Edson Fachin, deu andamento à proposta de Gilmar Mendes para uma súmula vinculante. A medida visa combater \'pautas-bomba\', leis que criam despesas ou benefícios fiscais sem previsão e compensação, freando gastos públicos sem lastro fiscal.',
        imagem: 'https://s2-g1.glbimg.com/flM_LEMTrTUNnUILFYVT3c6L4uc=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/V/2/UXPsQMT2qh36XyhQAfPw/55329245284-c3463bca89-o.jpg',
        autor: 'G1 Política', tempo: '4h atrás'
    },
    {
        id: 98, categoria: 'politica',
        titulo: 'Operação Compliance Zero: Mensagem interceptada liga Jaques Wagner à venda do Banco Master',
        resumo: 'A 9ª fase da Operação Compliance Zero, deflagrada nesta quinta, mirou o senador Jaques Wagner (PT-BA) e o gestor Augusto Lima. Em mensagem captada, Lima afirmou a Wagner que o petista integrava a venda do Banco Master ao BRB. O STF aponta Lima como principal interlocutor privado de Wagner na entrega',
        imagem: 'https://s2-g1.glbimg.com/ioWpPIPrsz13UUdwPmETl6rvo5c=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/v/u/H2GBA4Tx2NzmGDxYIl0A/copia-de-foto-2-.jpg',
        autor: 'G1 Política', tempo: '4h atrás'
    },
    {
        id: 99, categoria: 'politica',
        titulo: 'PF aponta vantagens indevidas a Jaques Wagner em caso Banco Master; PT defende senador',
        resumo: 'O senador Jaques Wagner (PT-BA) é alvo da Polícia Federal na 9ª fase da Operação Compliance Zero, que apura um esquema bilionário ligado ao Banco Master. A PF aponta que o petista recebeu vantagens indevidas, como um apartamento e R$ 3,5 milhões. O presidente do PT, Edinho Silva, defendeu o senador,',
        imagem: 'https://s2-g1.glbimg.com/F2HvaJXzEmFSlGrqVJ-Zgjff61A=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/J/K/vA6LoaSEeLuUGTlPNmug/edinho-silva1.jpg',
        autor: 'G1 Política', tempo: '4h atrás'
    },
    {
        id: 100, categoria: 'politica',
        titulo: 'Planalto e PT esperam que Wagner entregue liderança para blindar Lula após PF',
        resumo: 'O Palácio do Planalto e o PT esperam que o senador Jaques Wagner (PT-BA) entregue a liderança do governo no Senado. A expectativa surge após uma operação da Polícia Federal que investiga a relação do parlamentar com o ex-banqueiro Augusto Lima, visando blindar a campanha do presidente Lula do escând',
        imagem: 'https://s2-g1.glbimg.com/TKUFuNG7WgXs1WWJzg3hszQz3G8=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2024/D/i/oaobU1RUiVBXr3EbeSOQ/53541037517-2eae9c8e23-o.jpg',
        autor: 'G1 Política', tempo: '5h atrás'
    },
    {
        id: 101, categoria: 'politica',
        titulo: 'Aliados de Lula defendem saída de Jaques Wagner da liderança no Senado por Caso Master',
        resumo: 'Aliados do presidente Lula defendem a saída de Jaques Wagner (PT-BA) da liderança do governo no Senado para que o senador se dedique a esclarecer sua citação no Caso Master. A movimentação visa evitar desgaste político ao Planalto, enquanto a defesa de Wagner nega ser réu ou ter sido denunciado nas',
        imagem: 'https://s2-g1.glbimg.com/KMObn_ABHYgV6wHC6-Kj012D0-Q=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/p/F/K3FwkLSnaIXEXoGKa7IA/55238712415-4ebd27fcf8-o.jpg',
        autor: 'G1 Política', tempo: '5h atrás'
    },
    {
        id: 102, categoria: 'politica',
        titulo: 'Operação Compliance Zero: PF aponta oferta de aeronave a Jaques Wagner para ilha particular',
        resumo: 'A Polícia Federal identificou que o empresário Augusto Ferreira Lima ofereceu uma aeronave particular ao senador Jaques Wagner para uma viagem à Ilha da Paixão, na Bahia. A investigação, que aponta a proximidade entre os dois e se baseia em mensagens e áudios, foi revelada em decisão do STF que auto',
        imagem: 'https://s2-g1.glbimg.com/4koM_bGxos2HWeyjGTh53sucCfg=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/J/R/m3RmayQ3eZix0eMgqzSA/captura-de-tela-2026-06-18-113326.png',
        autor: 'G1 Política', tempo: '5h atrás'
    },
    {
        id: 103, categoria: 'politica',
        titulo: 'PV de SP apoia Marina Silva ao Senado, intensificando disputa na chapa de Lula',
        resumo: 'O diretório municipal do Partido Verde (PV) em São Paulo oficializou apoio à pré-candidatura de Marina Silva (Rede) ao Senado. A ex-ministra disputa uma vaga na chapa governista com Márcio França (PSB), aguardando a decisão final do presidente Lula (PT).',
        imagem: 'https://s2-g1.glbimg.com/7XpMT6CBSCPlu-7N_NRzLoypvDY=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/V/I/cPfLWCSUqergZtAtsVNg/captura-de-tela-2026-06-18-094232.jpg',
        autor: 'G1 Política', tempo: '6h atrás'
    },
    {
        id: 104, categoria: 'politica',
        titulo: 'Líder do governo, Jaques Wagner é investigado por ingressos de Taylor Swift avaliados em R$ 63 mil p',
        resumo: 'A Polícia Federal (PF) investiga o senador Jaques Wagner (PT-BA), líder do governo, por supostamente ter recebido cinco ingressos VIP para um show de Taylor Swift em 2023, no valor de R$ 63.339. Os bilhetes teriam sido comprados por um gestor do Banco Master e destinados a familiares. A assessoria d',
        imagem: 'https://s2-g1.glbimg.com/Rd-3NpywCvDNPknogjGsIjXBfJI=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/b/B/EKrGXBQAawv9Po163CDg/sem-nome-1200-x-900-px-.jpg',
        autor: 'G1 Política', tempo: '6h atrás'
    },
    {
        id: 105, categoria: 'politica',
        titulo: 'PF apreende US$ 49 mil em endereço ligado a Jaques Wagner em nova fase da Compliance Zero',
        resumo: 'A Polícia Federal apreendeu US$ 49 mil (equivalente a R$ 250 mil) em um endereço em Brasília ligado ao senador Jaques Wagner (PT-BA). A ação desta quinta-feira (18) é parte da 9ª fase da Operação Compliance Zero, que investiga um esquema bilionário de corrupção e apura o recebimento de vantagens ind',
        imagem: 'https://s2-g1.glbimg.com/6c9Z24g-Ihgzd0UpH-XxIZ8gwF8=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/A/V/PZJhNSRWOJhCjwGtSLaw/whatsapp-image-2026-06-18-at-10.41.55.jpeg',
        autor: 'G1 Política', tempo: '6h atrás'
    },
    {
        id: 106, categoria: 'politica',
        titulo: 'Operação Compliance Zero: PF cita cobrança de enteado de Wagner a gestor do Master',
        resumo: 'A Polícia Federal (PF) apura se a empresa do enteado do senador Jaques Wagner, Eduardo Mendonça Sodré Martins, recebeu R$ 3,5 milhões em supostas vantagens indevidas. O montante, transferido em outubro de 2025, teria sido precedido por cobranças de Eduardo a um gestor do Banco Master, alvo da Operaç',
        imagem: 'https://s2-g1.glbimg.com/SNEnPQA8-Dcnkq27mXs00Q6JRug=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/L/w/kP2klISEWasblHiR4z3A/55268276416-6576e4b70b-o.jpg',
        autor: 'G1 Política', tempo: '6h atrás'
    },
    {
        id: 107, categoria: 'politica',
        titulo: 'PF aponta que Jaques Wagner recebeu apartamento por atuar para Banco Master',
        resumo: 'A Polícia Federal aponta que o senador Jaques Wagner (PT-BA) teria recebido um apartamento de R$ 2,4 milhões por atuar em benefício do Banco Master. A 9ª fase da Operação Compliance Zero investiga a suposta influência do parlamentar em temas de crédito consignado e no FGC, com tratativas que teriam',
        imagem: 'https://s2-g1.glbimg.com/SNEnPQA8-Dcnkq27mXs00Q6JRug=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/L/w/kP2klISEWasblHiR4z3A/55268276416-6576e4b70b-o.jpg',
        autor: 'G1 Política', tempo: '7h atrás'
    },
    {
        id: 108, categoria: 'politica',
        titulo: 'PF investiga Jaques Wagner por R$ 3,5 milhões e apartamento de luxo em Salvador',
        resumo: 'A 9ª fase da Operação Compliance Zero, autorizada pelo STF, mira o senador Jaques Wagner (PT-BA). A investigação apura o suposto recebimento de R$ 3,5 milhões e um apartamento de luxo em Salvador, em troca de atuação política no Congresso para beneficiar o Banco Master.',
        imagem: 'https://s2-g1.glbimg.com/aeWqdAi9N0O3UU04AzXxLJftewA=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/Z/o/bonemwR2y6ylwH4POiIA/wagner-waldemir-barreto-agencia-senado.jpg',
        autor: 'G1 Política', tempo: '7h atrás'
    },
    {
        id: 109, categoria: 'politica',
        titulo: 'PF mira Jaques Wagner, líder do governo, em 9ª fase da Operação Compliance Zero',
        resumo: 'A PF deflagrou a 9ª fase da Operação Compliance Zero, com o senador Jaques Wagner, líder do governo no Senado, entre os alvos. Ele é investigado por suposto recebimento de vantagens ilícitas para beneficiar o Banco Master. Ação apura corrupção e lavagem de dinheiro.',
        imagem: 'https://s2-g1.glbimg.com/SNEnPQA8-Dcnkq27mXs00Q6JRug=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/L/w/kP2klISEWasblHiR4z3A/55268276416-6576e4b70b-o.jpg',
        autor: 'G1 Política', tempo: '7h atrás'
    },
    {
        id: 110, categoria: 'politica',
        titulo: 'Caiado evita confirmar Kassab como vice e remete decisão para convenção do PSD',
        resumo: 'O pré-candidato do PSD à Presidência, Ronaldo Caiado, não confirmou Gilberto Kassab como seu vice para 2026. Ele afirmou que a composição da chapa será definida na convenção nacional do partido, marcada para 26 de julho, considerando as necessidades políticas e regionais da campanha.',
        imagem: 'https://s2-g1.glbimg.com/3_7OyM6Fu9I9Zg3VpKxycpJ5LRY=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/E/4/1ezeCfTtAknundOHlm1w/fta20260330184.jpg',
        autor: 'G1 Política', tempo: '8h atrás'
    },
    {
        id: 111, categoria: 'politica',
        titulo: 'Caiado avalia que Flávio Bolsonaro perdeu chance de derrotar Lula',
        resumo: 'O pré-candidato à Presidência, Ronaldo Caiado (PSD), declarou que Flávio Bolsonaro (PL) perdeu a oportunidade de vencer o presidente Luiz Inácio Lula da Silva (PT) em uma eleição. Em entrevista, Caiado justificou a análise com pesquisas que, segundo ele, mostram Bolsonaro se distanciando de Lula em',
        imagem: 'https://s2-g1.glbimg.com/NOh4ZfVjxcpPtYZFZ17MOl1CZwE=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/9/s/6VP66iR6mcnBA4rapZZQ/tn220260525016.jpg',
        autor: 'G1 Política', tempo: '8h atrás'
    },
    {
        id: 112, categoria: 'politica',
        titulo: 'Lula e Trump trocam farpas após G7; Brasil é \'politicamente perigoso\', diz Trump',
        resumo: 'O presidente Lula encerrou sua décima participação na cúpula do G7 na França, com reuniões bilaterais e expectativa pelo encontro com Donald Trump. Após o evento, os líderes trocaram farpas publicamente. Trump classificou o Brasil como "politicamente perigoso", enquanto Lula reafirmou que o american',
        imagem: 'https://s2-g1.glbimg.com/30QVTEoPiJ5kYf0FI8fpuqxRgwY=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/9/Y/e1TEUcQIasM6KH5pOLWQ/8a99b2c0-6aa6-11f1-8546-8f19e4fe30f4.jpg.webp',
        autor: 'G1 Política', tempo: '11h atrás'
    },
    {
        id: 113, categoria: 'brasil',
        titulo: 'Eurofarma reduz em até 48% preço de medicamentos com semaglutida no Brasil',
        resumo: 'A Eurofarma anunciou nesta quinta-feira (18) uma redução de até 48% nos preços de seus medicamentos à base de semaglutida no Brasil. Os produtos Poviztra, indicado para tratamento de obesidade e sobrepeso, e Extensior, para diabetes tipo 2, terão os valores ajustados.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/18/17818235436a347837f384a_1781823543_3x2_rt.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 114, categoria: 'esportes',
        titulo: 'Copa 2026: Tuchel lamenta momento arruinado por fotógrafos em cerimônia',
        resumo: 'O técnico da Inglaterra, Thomas Tuchel, manifestou desconforto na quarta-feira (17) com a presença de fotógrafos. Ele relatou que um \'momento especial foi arruinado\' durante a cerimônia dos hinos na partida de abertura do Grupo L da Copa do Mundo de 2026 contra a Croácia.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/18/17818227916a3475477659b_1781822791_3x2_rt.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 115, categoria: 'esportes',
        titulo: 'Campanha do Chelsea com Carlinhos Maia para novo uniforme gera enxurrada de críticas',
        resumo: 'O Chelsea, clube inglês de alto investimento, divulgou fotos do influenciador Carlinhos Maia como modelo para o uniforme da próxima temporada. A publicação, nesta quinta-feira (18), gerou uma enxurrada de críticas nas redes sociais.',
        imagem: 'https://f.i.uol.com.br/fotografia/2026/06/18/17818174546a34606ebd758_1781817454_3x2_lg.jpg',
        autor: '', tempo: 'agora'
    },
    {
        id: 116, categoria: 'brasilia',
        titulo: 'Nasce bebê em carro de aplicativo no Eixo Monumental de Brasília',
        resumo: 'Uma mulher deu à luz dentro de um carro de aplicativo no Eixo Monumental, centro de Brasília, na manhã desta quinta-feira (18). O Serviço de Atendimento Móvel de Urgência (Samu) foi acionado por testemunhas e prestou os primeiros socorros, levando mãe e bebê em segurança ao hospital.',
        imagem: 'https://s2-g1.glbimg.com/tOZycElccx9Wo1xwRA9pFXemdyQ=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/t/Q/bbYNngSPaQvAboGichIA/imagem-g1-9-.png',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 117, categoria: 'brasilia',
        titulo: 'Espetáculo celeste: Conjunção de Lua e Vênus encanta brasilienses',
        resumo: 'Brasilienses presenciaram um belo espetáculo celeste com a conjunção entre a Lua e Vênus. O fenômeno, visível na noite de quarta-feira (17/6), poderá ser novamente observado nesta quinta (18/6) pelos moradores da capital.',
        imagem: 'https://images.metroimg.com/2026/06/fenomeno-lua-venus.jpg',
        autor: 'Metrópoles', tempo: '10h atrás'
    },
    {
        id: 118, categoria: 'internacional',
        titulo: 'Zema em Recife: Pré-candidato elogia Nordeste e vê potencial turístico após polêmicas',
        resumo: 'Em evento no Recife, Romeu Zema (Novo), pré-candidato à Presidência, expressou "apreço enorme" pelo Nordeste, valorizando seu potencial turístico pela proximidade com Europa e EUA. A declaração ocorre após polêmicas geradas por suas críticas à região em 2023, que ele minimizou como má interpretação',
        imagem: 'https://s2-g1.glbimg.com/AEsx1ZUVeQqMxr8A9ocAjucBquA=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/N/b/CD6nUxTnSdt5TakvgMAA/zema.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 119, categoria: 'eventos',
        titulo: 'Porto Velho: Alunos de Direito celebram formatura com carreata pelas ruas',
        resumo: 'Alunos de Direito em Porto Velho celebraram o fim da graduação com uma carreata festiva na quarta-feira (17). A mobilização, com carros de som, percorreu as ruas da capital e foi vista pelos formandos como a celebração de anos de dedicação e a conquista de um sonho.',
        imagem: 'https://s2-g1.glbimg.com/1NbZFLl7K_IP7jPIJyvYPwRk228=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/4/K/U873RyT8mNp7PGitp2Kw/design-sem-nome-2026-06-18t185950.524.png',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 120, categoria: 'eventos',
        titulo: 'UPA de São Pedro da Aldeia: Vigilância apura Raios X realizados em sala de curativos',
        resumo: 'A Vigilância Sanitária de São Pedro da Aldeia investiga denúncia de exames de Raios X feitos em sala de curativos da UPA. O CRTR-RJ aponta que o local não tinha segurança para evitar risco de radiação durante obras.',
        imagem: 'https://s2-g1.glbimg.com/PjCFY9Yf5MqyFj2ls_I8SUKeHi4=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/Y/g/awM7ARSau05wHcJUNh8Q/upa.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 121, categoria: 'eventos',
        titulo: 'Turista espanhol é resgatado após queda de 2 metros na Pedra do Arpoador, Rio',
        resumo: 'Um turista espanhol de 58 anos foi resgatado na tarde de quinta-feira (18) após cair de uma altura de cerca de dois metros na Pedra do Arpoador, Zona Sul do Rio. Com ferimento no tornozelo, ele foi socorrido pela Guarda Municipal e Bombeiros, sendo encaminhado ao Hospital Miguel Couto. Seu estado de',
        imagem: 'https://s2-g1.glbimg.com/PmazQRAjZy_jJC-kp-2HriXxfD0=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/L/o/5ASw81RNKfQURT1l8GYg/imagem-cortada-2026-06-18t193824.479.jpg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 122, categoria: 'eventos',
        titulo: 'Montes Claros celebra Arraial das Formigas com shows, quadrilhas e entrada gratuita',
        resumo: 'Montes Claros celebra as tradições juninas neste fim de semana com o Arraial das Formigas, festival gratuito que oferece shows, apresentações de quadrilhas e comidas típicas. O evento, na Avenida Viriato Ribeiro de Aquino, busca valorizar a cultura e a gastronomia regional.',
        imagem: 'https://s2-g1.glbimg.com/qokgaP2wQWXQgZc6caCqssLNRqA=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/Z/c/BR35uuQOG8zBzeQNS3sQ/arraia-do-jatoba.jpeg',
        autor: 'G1', tempo: 'agora'
    },
    {
        id: 123, categoria: 'internacional',
        titulo: 'Homem é detido após menino de 3 anos cair em habitat de crocodilos e ficar grave no Reino Unido',
        resumo: 'Um menino de três anos está em estado grave após cair no habitat de crocodilos do zoológico Johnsons of Old Hurst, no Reino Unido. Um homem foi preso sob suspeita de tentativa de homicídio; a polícia investiga o incidente e acredita que o detido não conhecia a criança.',
        imagem: 'https://s2-g1.glbimg.com/Xxi7kiPJc-HaPT9Pz7fo2O1wIAM=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/s/o/OHXrOMRgWCRSq8shc3nA/design-sem-nome-19-.jpg',
        autor: 'G1 Mundo', tempo: '3h atrás'
    },
    {
        id: 124, categoria: 'internacional',
        titulo: 'México: Homem é preso acusado de alugar credencial da Copa do Mundo de 2026',
        resumo: 'Um homem de 24 anos foi detido na Cidade do México sob acusação de alugar credenciais de acesso para a Copa do Mundo de 2026. A investigação, iniciada após denúncia da organização do Mundial, identificou diversas publicações em redes sociais onde o suspeito oferecia o documento. A prisão ocorreu qua',
        imagem: 'https://s2-g1.glbimg.com/cFPrAhnAqpf7CqMxB1KMA6uNtsY=/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2026/f/Z/GnA1RQQze1MGTk8lDv9g/2026-06-11t175746z-1976336438-up1em6b1dw8e7-rtrmadp-3-soccer-worldcup-mex-zaf.jpg',
        autor: 'G1 Mundo', tempo: '10h atrás'
    },
    {
        id: 125, categoria: 'brasilia',
        titulo: 'Após 40 anos, idoso do DF desaparecido é localizado no Sertão de Alagoas',
        resumo: 'Um idoso do Distrito Federal, cujo desaparecimento durava quatro décadas, foi encontrado no Sertão de Alagoas. A localização encerra um longo período de incertezas sobre o paradeiro do homem.',
        imagem: 'https://images.pexels.com/photos/29471962/pexels-photo-29471962.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '10h atrás'
    },
    {
        id: 126, categoria: 'brasilia',
        titulo: 'Última chance: Novos beneficiários do DF Social devem abrir conta no BRB até dia 23',
        resumo: 'Novos beneficiários do programa DF Social têm prazo final para abrir suas contas no Banco de Brasília (BRB). A data limite para a abertura da conta bancária é o dia 23, sendo essencial para garantir o recebimento do auxílio. O cumprimento do prazo é crucial para o acesso ao benefício.',
        imagem: 'https://images.pexels.com/photos/36482790/pexels-photo-36482790.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '33 min atrás'
    },
    {
        id: 127, categoria: 'brasilia',
        titulo: 'Lideranças do SINASEFE e Andes-SN se reúnem presencialmente em Brasília',
        resumo: 'Representantes do SINASEFE e do Andes-SN, importantes sindicatos da educação, realizaram um encontro presencial em Brasília. A reunião na capital federal marca um momento de articulação entre as entidades.',
        imagem: 'https://images.pexels.com/photos/2847616/pexels-photo-2847616.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: 'agora'
    },
    {
        id: 128, categoria: 'tecnologia',
        titulo: 'Piso renovado sem obras: especialista ensina técnica de pintura de baixo custo',
        resumo: 'Uma técnica de pintura de pisos surge como solução para renovar revestimentos encardidos sem a necessidade de obras. O método abrange todas as etapas, da limpeza e preparação à aplicação e secagem, com dicas essenciais para a conservação do acabamento. A proposta oferece uma alternativa prática e ec',
        imagem: 'https://cdn.oantagonista.com/uploads/2026/06/Ceramic_floor_half_renovated_202606171209.jpg',
        autor: 'Gustavo Gabriel Miranda', tempo: 'agora'
    },
    {
        id: 129, categoria: 'tecnologia',
        titulo: 'Coober Pedy: A Cidade Subterrânea da Austrália que Desafia o Calor Extremo',
        resumo: 'No interior árido da Austrália, a cidade de Coober Pedy se destaca por sua peculiar vida subterrânea. Cerca de metade de sua população reside em casas escavadas na rocha, onde as temperaturas internas permanecem estáveis entre 23°C e 25°C. Essa engenhosa solução permite aos moradores escapar do calo',
        imagem: 'https://cdn.oantagonista.com/uploads/2026/06/ff662317-7f65-4d0b-9c91-c182c32a0ee5.jpg',
        autor: 'José Dantas', tempo: 'agora'
    },
    {
        id: 130, categoria: 'tecnologia',
        titulo: 'Estudo Alerta: Desastres Climáticos Ameaçam Quase 80% dos Data Centers Globais',
        resumo: 'Um novo estudo revela que uma parcela alarmante de 79% da capacidade global de data centers está vulnerável a riscos climáticos. Esses centros de dados, cruciais para a infraestrutura digital, enfrentam ameaças como enchentes e incêndios.',
        imagem: 'https://olhardigital.com.br/wp-content/uploads/2026/06/incendios-1024x682.jpg',
        autor: 'Ana Luiza Figueiredo', tempo: 'agora'
    },
    {
        id: 131, categoria: 'tecnologia',
        titulo: 'El Niño intensifica rinite e asma: especialista explica impacto em alergias',
        resumo: 'O fenômeno El Niño está associado a alterações climáticas que podem intensificar alergias respiratórias. Especialista explica como variações de temperatura, umidade e qualidade do ar agravam quadros de rinite e asma.',
        imagem: 'https://olhardigital.com.br/wp-content/uploads/2025/12/chuva-sao-paulo-1024x642.jpg',
        autor: 'Ana Luiza Figueiredo', tempo: 'agora'
    },
    {
        id: 132, categoria: 'tecnologia',
        titulo: 'NASA: Asteroide Donaldjohanson teve água líquida e passa por mudanças',
        resumo: 'Dados da missão Lucy, da NASA, sugerem que o asteroide Donaldjohanson abrigou água líquida em seu passado distante. A análise aponta ainda para transformações na superfície do corpo celeste.',
        imagem: 'https://olhardigital.com.br/wp-content/uploads/2025/04/Captura-de-tela-2025-04-23-095854-1024x843.png',
        autor: 'Ana Luiza Figueiredo', tempo: 'agora'
    },
    {
        id: 133, categoria: 'internacional',
        titulo: 'Ex-BBB Larissa Tomásia anuncia primeira gravidez e exibe barriga ao lado do namorado',
        resumo: 'A ex-participante do Big Brother Brasil, Larissa Tomásia, revelou que está esperando seu primeiro filho. O anúncio foi feito no último domingo (14) ao lado do namorado, Luciano Taborda, com quem a ex-BBB exibiu a barriga da gestação.',
        imagem: 'https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2026/06/larissa.webp?w=1024',
        autor: 'lauratoyama', tempo: 'agora'
    },
    {
        id: 134, categoria: 'brasilia',
        titulo: 'DER-DF Completa 66 Anos: Legado na Infraestrutura do Distrito Federal é Celebrado',
        resumo: 'O Departamento de Estradas de Rodagem do Distrito Federal (DER-DF) celebra 66 anos de sua fundação. A instituição é peça-chave na construção e manutenção da infraestrutura viária, garantindo mobilidade e serviços essenciais à população da capital.',
        imagem: 'https://images.pexels.com/photos/14128895/pexels-photo-14128895.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '7h atrás'
    },
    {
        id: 135, categoria: 'brasilia',
        titulo: 'Operário morre soterrado após cair em vala de obra no centro de Brasília',
        resumo: 'Um operário morreu soterrado após cair em uma vala durante obras na região central de Brasília. O incidente trágico ocorreu em um canteiro de obras da capital federal. As circunstâncias do acidente ainda não foram detalhadas.',
        imagem: 'https://images.pexels.com/photos/2449231/pexels-photo-2449231.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
        autor: 'Redação', tempo: '2d atrás'
    },
];

const videos = [
    {
        id: 1, titulo: '[AO VIVO] JORNAL DA NOITE - 18/06/2026',
        thumb: 'https://img.youtube.com/vi/UTzysf5X61w/hqdefault.jpg', duracao: '1:30:00',
        videoId: 'UTzysf5X61w', embedUrl: 'https://www.youtube.com/embed/UTzysf5X61w'
    },
    {
        id: 2, titulo: '[AO VIVO] AGROBAND | 19/06/2026',
        thumb: 'https://img.youtube.com/vi/z4JqBGCX_WM/hqdefault.jpg', duracao: '1:30:00',
        videoId: 'z4JqBGCX_WM', embedUrl: 'https://www.youtube.com/embed/z4JqBGCX_WM'
    },
    {
        id: 3, titulo: 'AO VIVO: CNN PRIME TIME - 18/06/2026',
        thumb: 'https://img.youtube.com/vi/ud9wRYLA5N8/hqdefault.jpg', duracao: '1:30:00',
        videoId: 'ud9wRYLA5N8', embedUrl: 'https://www.youtube.com/embed/ud9wRYLA5N8'
    },
    {
        id: 4, titulo: 'AO VIVO: WW - 18/06/2026',
        thumb: 'https://img.youtube.com/vi/HwNip4pWJdM/hqdefault.jpg', duracao: '1:30:00',
        videoId: 'HwNip4pWJdM', embedUrl: 'https://www.youtube.com/embed/HwNip4pWJdM'
    },
    {
        id: 5, titulo: 'JORNAL JOVEM PAN - 18/06/2026',
        thumb: 'https://img.youtube.com/vi/lhIHWFuM3xc/hqdefault.jpg', duracao: '08:00',
        videoId: 'lhIHWFuM3xc', embedUrl: 'https://www.youtube.com/embed/lhIHWFuM3xc'
    },
    {
        id: 6, titulo: '"Mulher não pode ter medo de andar na rua", diz Flávio sobre segurança',
        thumb: 'https://img.youtube.com/vi/CUf6hIKVlF0/hqdefault.jpg', duracao: '08:00',
        videoId: 'CUf6hIKVlF0', embedUrl: 'https://www.youtube.com/embed/CUf6hIKVlF0'
    },
    {
        id: 7, titulo: '🔴AO VIVO: NEWS NOITE, com Leandro Magalhães | #SBTNews',
        thumb: 'https://img.youtube.com/vi/oIZxxr3VwoI/hqdefault.jpg', duracao: '1:30:00',
        videoId: 'oIZxxr3VwoI', embedUrl: 'https://www.youtube.com/embed/oIZxxr3VwoI'
    },
    {
        id: 8, titulo: 'MAPA DAS URNAS | 18/06/2026',
        thumb: 'https://img.youtube.com/vi/FhJv70N-U_0/hqdefault.jpg', duracao: '08:00',
        videoId: 'FhJv70N-U_0', embedUrl: 'https://www.youtube.com/embed/FhJv70N-U_0'
    },
];

const breakingNews = [
    'URGENTE: Brasil e Interpol impulsionam coalizão regional contra crime organizado na América do Sul.',
    'AGORA: VPR revela ações sem metas e ausência de serviços ao cidadão em detalhe de transparência.',
    'ÚLTIMA HORA: Governo estabelece novos perfis profissionais para altos cargos na Presidência.',
];

const cotacoes = [
    { nome: 'Dólar', icone: 'attach_money', valor: 'R$ 5.18', variacao: '+1.2%', direcao: 'up' },
    { nome: 'Euro', icone: 'euro', valor: 'R$ 5.93', variacao: '+0.8%', direcao: 'up' },
    { nome: 'Ibovespa', icone: 'show_chart', valor: '168.278', variacao: '-0.1%', direcao: 'down' },
    { nome: 'Soja (sc)', icone: 'eco', valor: 'R$ 129.94', variacao: '+0.9%', direcao: 'up' },
    { nome: 'Milho (sc)', icone: 'grass', valor: 'R$ 50.90', variacao: '-0.8%', direcao: 'down' },
    { nome: 'Café (sc)', icone: 'coffee', valor: 'R$ 1815', variacao: '-4.3%', direcao: 'down' },
    { nome: 'Algodão (@)', icone: 'agriculture', valor: 'R$ 135.40', variacao: '+3.2%', direcao: 'up' },
    { nome: 'Trigo (sc)', icone: 'bakery_dining', valor: 'R$ 70', variacao: '+0.1%', direcao: 'up' },
    { nome: 'Ouro (g)', icone: 'diamond', valor: 'R$ 698.25', variacao: '-3.5%', direcao: 'down' },
    { nome: 'Petrobras', icone: 'oil_barrel', valor: 'R$ 38.85', variacao: '+0.7%', direcao: 'up' },
    { nome: 'Vale', icone: 'landscape', valor: 'R$ 79.94', variacao: '+0.2%', direcao: 'up' },
    { nome: 'Itaú', icone: 'account_balance', valor: 'R$ 40.49', variacao: '-0.8%', direcao: 'down' },
    { nome: 'Bradesco', icone: 'account_balance', valor: 'R$ 17.47', variacao: '-0.5%', direcao: 'down' },
    { nome: 'Banco do Brasil', icone: 'account_balance', valor: 'R$ 19.53', variacao: '+0.6%', direcao: 'up' },
    { nome: 'S&P 500', icone: 'public', valor: '7501', variacao: '+1.1%', direcao: 'up' },
    { nome: 'Dow Jones', icone: 'public', valor: '51.565', variacao: '+0.1%', direcao: 'up' },
    { nome: 'Boi Gordo (@)', icone: 'pets', valor: 'R$ --', variacao: '0.0%', direcao: 'up' },
    { nome: 'Arroz (sc)', icone: 'rice_bowl', valor: 'R$ 86.06', variacao: '+5.7%', direcao: 'up' },
    { nome: 'Bitcoin', icone: 'currency_bitcoin', valor: 'R$ 325.922', variacao: '-0.9%', direcao: 'down' },
];

const clima = {
    cidade: 'Brasília', estado: 'DF',
    temperatura: 18, temp_min: 18, temp_max: 18,
    umidade: 53, condicao: 'Chuva Leve',
    icone: 'grain', vento: 10.5
};

const trending = [
    '#BrasilAgora #Brasília #TransparênciaPública',
    '#BrasilAgora #Brasília #EconomiaBrasil',
    '#BrasilAgora #Brasília #SegurançaPública',
    '#BrasilAgora #Brasília #DireitosSociais',
    '#BrasilAgora #Brasília #FatorAmazônico',
    '#BrasilAgora #Brasília #AgendaLegislativa',
];
