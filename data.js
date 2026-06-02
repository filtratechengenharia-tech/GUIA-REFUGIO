/* ===========================================================
   Refúgio Atrás da Pedra — content data
   =========================================================== */
window.GUIDE = {

  /* ---- 1. NA PROPRIEDADE ---- */
  propriedade: [
    {
      img: 'assets/deck-view.jpg',
      badge: { t: 'Imperdível', c: 'destaque' },
      title: 'Deck ao Amanhecer',
      tall: true,
      desc: 'Em dias frios e úmidos — sobretudo no inverno e no outono — a névoa desce das pedras logo cedo, com o canto dos pássaros e o silêncio absoluto da Mantiqueira. Quando acontece, é inesquecível. Depende da temperatura e da época: vale sempre tentar. ☕'
    },
    {
      img: 'assets/hero-pool.jpg',
      title: 'Piscina Aquecida com Deck',
      desc: 'Relaxe a qualquer hora do dia. A piscina é aquecida — ideal para as noites frias da serra — com deck e vista aberta para as montanhas.'
    },
    {
      img: 'assets/aerial.jpg',
      title: 'Trilha no Terreno',
      desc: 'Explore o entorno da propriedade, com vista para as pedras e serras da Mantiqueira. Ótima para crianças e pets logo na chegada.'
    }
  ],

  /* ---- 2. CACHOEIRAS ---- */
  cachoeiras: {
    grupos: [
      {
        label: '🟢 Fácil Acesso',
        cards: [
          { title: 'Cachoeira do Simão', badges: [{t:'Gratuito',c:'gratis'}], loc: '3,7 km do centro',
            desc: 'Trilha curtinha de 5 minutos pela mata. Lugar tranquilo durante a semana — pode encher em feriados.' },
          { title: 'Cachoeira do Retiro', badges: [{t:'Gratuito',c:'gratis'}], loc: 'Bairro São Sebastião',
            desc: 'Fácil acesso pela estrada. Uma das mais altas de Gonçalves, com água gelada e cristalina ótima para banho.' },
          { title: 'Cachoeira dos Henriques', badges: [{t:'Gratuito',c:'gratis'}], loc: '9,7 km do centro',
            desc: 'A mais tranquila por ser afastada. Várias quedas com ótimo poço na parte superior — siga pelas pedras à esquerda para a vista privilegiada. As vaquinhas são bem mansas!' },
          { title: 'Cachoeira das Sete Quedas', badges: [{t:'Taxa de entrada',c:'pago'}], loc: 'Bairro Retiro, 1,5 km — Estrada São Sebastião',
            desc: 'Vista incrível do deck logo na entrada. Estrutura com banheiros, lanchonete e trilha autoguiada. Fora de temporada abre só nos fins de semana.',
            meta: [ {l:'⚠️ Atenção:', v:'Não é própria para banho, mas belíssima para contemplação e fotos.'},
                    {l:'💡 Dica:', v:'Combine com a Cachoeira do Retiro na mesma saída.'} ] }
        ]
      },
      {
        label: '🟡 Moderado',
        cards: [
          { title: 'Cachoeira das Andorinhas', badges: [{t:'Fechada p/ manutenção',c:'aviso'}], loc: 'Bairro Martins, 2 km do centro',
            desc: 'Uma das maiores e mais volumosas quedas de Gonçalves. <strong>Atualmente fechada para manutenção — confirme antes de ir.</strong>',
            meta: [ {l:'💡 Recomendação:', v:'Contratar guia local para o acesso.'} ] }
        ]
      }
    ],
    notice: { icon: 'pack', html: 'Leve sempre: <strong>roupa de banho, sandália de borracha, toalha e água.</strong>' }
  },

  /* ---- 3. TRILHAS E MIRANTES ---- */
  trilhas: {
    grupos: [
      {
        label: '🟢 Fácil',
        cards: [
          { title: 'Mirante do Cruzeiro', badges:[{t:'Gratuito',c:'gratis'}], loc:'Portal de entrada de Gonçalves — 1ª estradinha à direita',
            desc:'Carro chega até o portão de madeira; pedestres entram livremente. Vista da cidade de um lado e da serra do outro. Passeio simples e rápido — ideal para o fim do dia.' },
          { title: 'Pedra do Cruzeiro', badges:[{t:'Gratuito',c:'gratis'},{t:'Nosso bairro',c:'destaque'}], loc:'~5 km do centro — Bairro Atrás da Pedra',
            desc:'O cartão de visitas de Gonçalves, com vista para a Serra dos Venâncios e dos Remédios. Saída ideal logo cedo. Pergunte ao anfitrião o melhor acesso saindo da propriedade.' }
        ]
      },
      {
        label: '🟡 Moderado',
        cards: [
          { title: 'Pedra Chanfrada', badges:[{t:'Gratuito',c:'gratis'}], loc:'1 km do restaurante ao topo — ~1h30 ida e volta',
            desc:'Trilha só de subida pela mata fechada, a 1.710 m. No topo, uma cruz de madeira e vista para a Pedra do Forno.',
            meta:[{l:'💡 Dica:', v:'Almoce no Restaurante Ao Pé da Pedra após a descida.'}] },
          { title: 'Pedra do Forno', loc:'Estrada São Sebastião — ~3,4 km, 1h30 ida e volta',
            desc:'Trilha sombreada por araucárias. A 1.970 m, oferece vista de 360° — Campos do Jordão, Monte Verde e a Pedra do Baú. No topo, uma via ferrata de ~10 degraus e uma capelinha.',
            meta:[{l:'⚠️ Atenção:', v:'Não recomendada para quem tem medo de altura. Pequena taxa de manutenção.'}] },
          { title: 'Pedra de São Domingos', badges:[{t:'Moderado / Difícil',c:'moderado'}], loc:'Região de Córrego do Bom Jesus, ~20 min',
            desc:'Trilha desafiadora com paisagens exuberantes da Mantiqueira. Pode ser combinada com o Pico da Raposa num dia completo de aventura.',
            meta:[{l:'💡 Recomendação:', v:'Ir com guia local.'}] }
        ]
      },
      {
        label: '🚗 Acesso de Carro — Mirante',
        cards: [
          { title: 'Pico da Raposa', badges:[{t:'Carro comum',c:'carro'}], loc:'Córrego do Bom Jesus, ~20 min — estrada com placas',
            desc:'A 1.480 m, por estrada pavimentada — qualquer carro chega. Vista panorâmica da Mantiqueira, Córrego do Bom Jesus e Cambuí, com rampa de parapente. O pôr do sol daqui é espetacular.' }
        ]
      }
    ],
    notice: { icon:'pack', html:'Leve sempre: <strong>tênis fechado, água (mín. 1,5 L), protetor solar, repelente e casaco leve.</strong>' }
  },

  /* ---- 4. GASTRONOMIA ---- */
  gastronomia: {
    grupos: [
      {
        label: '🌿 Zona Rural & Bairros',
        cards: [
          { title:'Bar do Zezé', badges:[{t:'Raiz',c:'destaque'}], loc:'Bairro Lambari — AMG-1930, km 07',
            desc:'Boteco mineiro raiz: feijoada, quirera, panqueca e cerveja gelada. Clima autêntico de interior, sem frescura. Ótimo para grupos.',
            phone:'(35) 99815-0162', insta:'bardozeze.goncalves' },
          { title:'Sabor sem Freio', badges:[{t:'MasterChef',c:'destaque'}], loc:'Estrada São Sebastião, km 1,5 — Retiro',
            desc:'Cozinha mineira autoral do chef Danilo Costa (semifinalista MasterChef 2023). Truta com virado encapotado, galinhada e bife ancho. Pet-friendly.',
            phone:'(35) 99753-8322', insta:'saborsemfreio', meta:[{l:'⚠️', v:'Reserva recomendada'}] },
          { title:'Bistrô Todos os Vinhos', badges:[{t:'Enogastronomia',c:'destaque'}], loc:'Estrada São Sebastião, km 1 — Fazenda Retiro',
            desc:'Os vinhos são os protagonistas — ampla seleção de rótulos com cardápio autoral que muda conforme a temporada. Vale reservar.',
            phone:'(35) 99660-6244', insta:'todososvinhos' },
          { title:'Quinta do Tacho', loc:'Estrada São Sebastião, km 1 — Fazenda Retiro',
            desc:'Comida mineira no fogão a lenha com vista para as montanhas. Considerado o melhor por quilo de Gonçalves. Polenta frita com canastra e linguiça especial. Pet-friendly na área externa.',
            phone:'(35) 99957-6270', hours:'Sex–Dom: 12h–15/16h' },
          { title:'Sebastian Bar', badges:[{t:'Música ao vivo',c:'destaque'}], loc:'Estrada São Sebastião das Três Orelhas, km 2',
            desc:'Casarão cercado de verde com carnes, massas, risotos e aperitivos. Música ao vivo frequente. Vinhos e cervejas selecionados.',
            phone:'(35) 3654-1265', insta:'sebastianbarerestaurante_', hours:'Qui–Dom: 12h–18h' },
          { title:'Sabores da Mantiqueira', loc:'Estrada Retiro / Terra Fria, km 6 — Três Orelhas',
            desc:'Comfort food com ingredientes da própria horta. Famoso pelo bisquiche (sanduíche de biscoito de queijo), quiches e sopas autorais. Opções veganas. A partir das 18h30.',
            phone:'(35) 99993-7479', insta:'saboresmantiqueira', web:'saboresdamantiqueira.com.br' },
          { title:'Cervejaria Bergway', badges:[{t:'Cerveja + Pizza',c:'destaque'}], loc:'Estrada Bernardino M. de Castro, km 7 — Sertão do Cantagalo',
            desc:'Cerveja artesanal própria e pizzas com ingredientes locais. Também serve feijoada. Música ao vivo frequente, cenário encantador.',
            phone:'(35) 99872-1001', insta:'cervejariabergway', hours:'Qui–Dom: 11/12h–21/22h' },
          { title:"MariTaca's", badges:[{t:'Criativo',c:'destaque'}], loc:'Praça São João Batista, Bairro dos Costas (~20 min)',
            desc:'Chef Juliana Pellis, ex-D.O.M de Alex Atala. Cozinha criativa mineira: tempurá de quiabo com maionese de pequi, purê de banana com truta. Fecha às quartas.',
            phone:'(35) 99927-4337', insta:'maritacas_restaurante' },
          { title:'Restaurante Karu', loc:'Estrada dos Venâncios',
            desc:'Gastronomia contemporânea no meio do mato, chef Gabriela Gradim. Brunch com truta defumada, rabada com parmesão e ovos cremosos. Surpreendente!' },
          { title:'Ao Pé da Pedra', loc:'Acesso pela trilha da Pedra Chanfrada',
            desc:'Comida mineira no fogão a lenha, vista para a Pedra Chanfrada. Feijão tropeiro, frango caipira e o famoso suco de amora. Ideal após a trilha.',
            insta:'restauranteaopedapedra', hours:'Sáb, Dom e feriados: 12h–15h30' },
          { title:'Restaurante Sauá', badges:[{t:'Enoturismo',c:'destaque'}], loc:'Pousada Bicho do Mato — Cantagalo, km 7,5',
            desc:'Cozinha contemporânea com raízes caipiras, chef Vitor Pompeu. Ambiente panorâmico, cozinha integrada ao salão. Winebar da Vinícola Artesã com degustação de vinhos e queijos.',
            insta:'restaurantesaua', web:'restaurantesaua.com.br' },
          { title:'Nó de Pinho', badges:[{t:'Romântico',c:'destaque'}], loc:'Três Orelhas, km 2,5 — Pousada Solar d’Araucária',
            desc:'Ambiente romântico com lareiras. Risoto de pinhão, peixe com farinha de amêndoa e frango na cerveja. Um dos mais sofisticados — confirme disponibilidade (atende sobretudo hóspedes).',
            phone:'(35) 3654-1398', insta:'nodepinhogastronomia', hours:'Sex/Sáb/feriados: 13h e 19h' },
          { title:'Restaurante da Vilma', loc:'Estrada dos Venâncios, km 8',
            desc:'Comida típica mineira no fogão a lenha, self-service à vontade. Aquela sensação de parar no tempo. Fins de semana e feriados.',
            phone:'(35) 99837-0876' },
          { title:'Restaurante Vida Verde', loc:'Estrada de São Sebastião, km 3,5 — Boa Vista',
            desc:'Culinária mineira tradicional em pousada aberta ao público. Filé ao molho madeira e pratos caseiros com porções generosas. Ambiente familiar com jardim.' }
        ]
      },
      {
        label: '🏘️ Centro de Gonçalves',
        cards: [
          { title:'San Benedetto', loc:'R. Capitão Antônio Carlos, 195',
            desc:'Fondue de queijo, ancho, tilápia à parmegiana e pratos mineiros. Um dos únicos que abre todos os dias, almoço e jantar.',
            phone:'(35) 99142-9206', hours:'Todos os dias: 11h–15h e 18h–22h30' },
          { title:'Chalezinho Gastrobar', loc:'R. Capitão Antônio Carlos, 282',
            desc:'Cozinha contemporânea com releituras regionais. Costelinha mineira na chapa com tutu, couve e torresmo em panelinhas. Dadinhos de tapioca e cervejas artesanais.',
            phone:'(12) 99653-8077', hours:'Qua–Dom a partir das 12h' },
          { title:'Mariá Restobar', loc:'Praça Monsenhor Dutra, 138 (casinha verde)',
            desc:'Carne de lata feita na casa, linguiça de porco caseira e torresmo. Atendimento caloroso do Valdemir. Só almoço. Pet-friendly.',
            insta:'mariarestobar_', hours:'Dom–Qui: 11h–15h | Sex–Sáb: 11h–16h' },
          { title:'Gastrô.massas', loc:'Praça Monsenhor Dutra, 285',
            desc:'Massas artesanais refinadas: sofioli de limão siciliano, gorgonzola e sardela. Ótimo para um almoço mais elaborado no centro.' },
          { title:'A Casinha Vinhos & Grill', badges:[{t:'Wine Bar',c:'destaque'}], loc:'R. Antônio Caetano da Rosa, 370',
            desc:'Wine bar com massas artesanais e vinhos selecionados pelos donos. Destaque para as pastas e a atenção pessoal nos rótulos.',
            phone:'(35) 95305-0112', hours:'Qui–Seg e feriados: 12h–15h e 18h–22h' },
          { title:'Janelas com Tramela', badges:[{t:'Música ao vivo',c:'destaque'}], loc:'R. Coronel João Vieira, 65',
            desc:'Bar e boteco desde 2010 com música ao vivo (sertanejo, MPB, blues, rock). Truta, fondue, parmegiana, petiscos. Pet-friendly e sazonal.',
            phone:'(35) 99944-2030', insta:'janelas.oficial' },
          { title:'Cabana Empório', loc:'Av. Francisco T. Ribeiro Neto, 240',
            desc:'Buffet diário farto com carnes, truta e comida mineira variada. Também vende produtos regionais.',
            phone:'(35) 3654-1353', hours:'Todos os dias: 11h–15h' },
          { title:'Restaurante Mantiqueira', loc:'R. Joaquim Ferreira Souza, 37',
            desc:'O mais antigo de Gonçalves (1979). Comida caseira simples e saborosa a preços justos, com clima de interior mineiro. Só almoço.',
            hours:'11h–15h' },
          { title:'Bendita Villa', loc:'Centro',
            desc:'Charmosa boutique para uma pausa: bolos artesanais, chás e lanches. Destaque para o chá gelado de amora e bolo de cacau.' },
          { title:'Padaria São Francisco', loc:'Centro — fachada colorida',
            desc:'Padaria tradicional, ponto de encontro dos moradores. Pão com linguiça, guaraná Jota Fé e café da manhã mineiro.' },
          { title:'Feira de Orgânicos', badges:[{t:'Gratuito',c:'gratis'}], loc:'R. Fausto Rezende de Souza, 183',
            desc:'Sábados das 9h às 13h. Frutas, legumes, queijos, geleias e temperos direto dos produtores. Experiência autêntica da Serra.',
            hours:'Sábados: 9h–13h' },
          { title:'Bendita Torra', badges:[{t:'Café especial',c:'destaque'}], loc:'Centro de Gonçalves',
            desc:'Torrefação de cafés especiais da Mantiqueira. Conheça os tipos de café, veja o processo de torra e prove na xícara o que a altitude faz com os grãos. Uma experiência à parte.',
            insta:'benditatorra', web:'benditatorra.com' }
        ]
      }
    ],
    notice: { icon:'phone', html:'<strong>Confirme horários e disponibilidade por telefone</strong> antes de ir — especialmente em dias de semana e baixa temporada.' }
  },

  /* ---- 5. CERVEJARIAS ---- */
  cervejarias: {
    cards: [
      { title:'Cervejaria 3 Orelhas', badges:[{t:'Mais visitada',c:'destaque'}], loc:'Estrada das 3 Orelhas, km 5 — Sítio Santa Fé',
        desc:'A mais famosa da região. Bar, restaurante, petiscos e cervejas direto da câmara fria em 15 torneiras, com vista para a serra. Visitas guiadas à fábrica e cervejas exclusivas só no local.',
        phone:'(11) 94131-9899', insta:'cervejaria3orelhas', web:'cervejaria3orelhas.com', hours:'Dom–Qui: 11h–18h | Sex–Sáb: 11h–20h' },
      { title:'Odara Cervejaria', loc:'Estrada Municipal São Sebastião, km 1',
        desc:'Cervejas autorais e música ao vivo. Destaque para a Tropicália, com milho crioulo defumado. Ambiente acolhedor, pet-friendly, com o famoso bolinho de bacalhau.',
        phone:'(35) 99946-2304', insta:'odara.cervejaria', hours:'Confirmar diretamente' },
      { title:'Nano Cervejaria Tereza', loc:'Estrada do Mundo Novo, km 4,6',
        desc:'Produção pequena com 9 estilos, das leves às encorpadas. Ambiente de quintal de roça com vista para as montanhas e um lago. Não perca o Guioza da Tereza.',
        phone:'(11) 99559-4602', insta:'cerveja_tereza', hours:'Sex: 13h–19h | Sáb–Dom e feriados: 11h–19h' },
      { title:'Cervejaria Sapucaí', badges:[{t:'~20 min',c:'carro'}], loc:'Estrada do Rio Manso — Sapucaí-Mirim, MG',
        desc:'Produzida com água mineral da própria fonte. Sabores tropicais da Mantiqueira: maracujá, manga e cambuci. Uma experiência diferente e regional.',
        insta:'sapucaicervejaria', web:'cervejariasapucai.com.br', hours:'Confirmar diretamente' }
    ],
    notice: { icon:'phone', html:'<strong>Importante:</strong> confirme os horários por telefone antes de visitar — sobretudo em dias de semana, feriados e baixa temporada.' }
  },

  /* ---- 6. CAVALO ---- */
  cavalo: {
    cards: [
      { title:'Rancho André Neto', loc:'Gonçalves',
        desc:'Passeios a cavalo com mais de 10 anos de experiência. Aulas de equitação, doma inteligente e pensão. Ótimo para famílias e crianças — acolhedor e seguro.',
        insta:'ranchoandreneto' },
      { title:'Mantiqueira Ecoturismo', loc:'Gonçalves',
        desc:'Passeios a cavalo pela região, combinando trilhas rurais com as paisagens da Serra da Mantiqueira.',
        phone:'(35) 98436-9548', insta:'mantiqueiraecoturismo', web:'mantiqueiratur.com.br' }
    ],
    notice: { icon:'pack', html:'Leve <strong>calça comprida e tênis fechado ou bota.</strong> Ideal para qualquer nível de experiência com cavalos — agende com antecedência.' }
  },

  /* ---- 7. 4x4 ---- */
  offroad: {
    grupos: [
      {
        label: '🏔️ Roteiros',
        cards: [
          { title:'Serra da Balança', badges:[{t:'Imperdível',c:'destaque'}], loc:'Venâncios (Gonçalves) → Serrano (São Bento do Sapucaí, SP)',
            desc:'Antigo caminho de tropeiros entre 1.300 e 1.750 m. Mata Atlântica, araucárias e pastagens, com paredes verticais de +100 m sobre o Vale do Sapucaí. Do alto se avista a Pedra do Baú e Campos do Jordão.',
            meta:[{l:'⚠️ Veículo:', v:'4×4 com reduzida e pneu MT (pickup/jipe). SUV pode ter dificuldades.'},{l:'⏱️ Duração:', v:'~3 horas'}] },
          { title:'Pedra do Jair + Serra da Balança', loc:'Saída de Gonçalves',
            desc:'Passeio completo por cachoeiras, Pedra Chanfrada, Pedra do Jair e Serra da Balança, com mirante para São Bento do Sapucaí. Dia inteiro de aventura.',
            meta:[{l:'⚠️ Veículo:', v:'4×4 com reduzida — pickup e jipes. Não indicado para SUV padrão.'}] },
          { title:'Alambique + Cachoeiras', loc:'Zona rural de Gonçalves',
            desc:'Roteiro pela zona rural passando por cachoeiras e terminando no Alambique Três Barras. Qualquer carro chega ao alambique — natureza e cultura local juntas.' }
        ]
      },
      {
        label: '🧭 Agências para contratar',
        cards: [
          { title:'Mantiqueira Ecoturismo', desc:'Roteiros off-road e ecoturismo da região.', web:'mantiqueiratur.com.br' },
          { title:'Conexão Gonçalves', desc:'Guia local especializado em roteiros off-road e ecoturismo.' },
          { title:'Caminhos da Fer', desc:'Roteiros guiados pela Serra da Mantiqueira.', web:'caminhosdafer.com.br' }
        ]
      }
    ],
    notice: { icon:'warn', html:'Para off-road, recomenda-se <strong>veículo 4×4 com reduzida e guia especializado.</strong> Com chuva, as estradas ficam muito mais difíceis.' }
  },

  /* ---- 8. CULTURA ---- */
  cultura: {
    cards: [
      { title:'Ateliê da Dona Rosa', badges:[{t:'Único',c:'destaque'}], loc:'Bairro Remédios — ~10 km do centro', accent:'culture',
        desc:'Dona Rosa Ribeiro pinta quadros com terra — arte única que traduz a alma de Gonçalves. Com mais de 81 anos, é uma das artistas mais amadas da cidade. Uma visita que emociona.',
        insta:'rosapintacomterra', meta:[{l:'💡 Dica:', v:'Leve dinheiro para comprar uma obra. É souvenir com alma.'}] },
      { title:'Casa de Pau a Pique Centenária', badges:[{t:'Gratuito',c:'gratis'}], loc:'Estrada dos Venâncios — 7 km do centro', accent:'culture',
        desc:'A casa mais antiga do município, com mais de 150 anos. Preservada externamente como foi construída — admire de fora ao passar pela Estrada dos Venâncios.' },
      { title:'Igreja Nossa Senhora das Dores', badges:[{t:'Gratuito',c:'gratis'}], loc:'Centro de Gonçalves', accent:'culture',
        desc:'Marco histórico e arquitetônico no coração da cidade. Sede da centenária Banda Musical Lira Nossa Senhora das Dores.' }
    ],
    notice: { icon:'phone', html:'Entre em contato antes de visitar para <strong>confirmar disponibilidade de atendimento.</strong>' }
  },

  /* ---- 9. COMPRAS ---- */
  souvenirs: [
    { e:'🧀', n:'Queijo Canastra Artesanal' },
    { e:'🍯', n:'Doce de Leite de Tachão' },
    { e:'🥃', n:'Cachaça Três Barras', note:'Acesso p/ qualquer carro' },
    { e:'🍺', n:'Cervejas da 3 Orelhas' },
    { e:'🖼️', n:'Quadro de Terra — Dona Rosa' },
    { e:'☕', n:'Café Especial — Bendita Torra' },
    { e:'🫙', n:'Geleias — Sra. das Especiarias' },
    { e:'🌿', n:'Orgânicos — Feira do Sábado' }
  ],
  lojas: [
    { title:'Alambique Três Barras — Cachaça Gonçalves', badges:[{t:'Visita + Degustação',c:'destaque'}], loc:'Estrada São Bento–Gonçalves, km 3,9 — 8 min do centro',
      desc:'Fundado em 1952, produz cachaça 100% artesanal com engenho movido à água. Visita guiada pelo engenho, destilação e barris de carvalho, com degustação gratuita: pura, banana, figo, canela, mel e mais. <strong>Acesso para qualquer veículo.</strong>',
      meta:[{l:'📍 Waze:', v:'"Alambique Cachaça Gonçalves"'}], insta:'alambique_goncalves', web:'cachacagoncalves.com.br', hours:'Seg–Sáb: 9h–18h | Dom: 9h–16h' },
    { title:'A Pioneira — Empório', loc:'Centro de Gonçalves',
      desc:'Queijos, geleias, doces, vinhos, cachaças e cervejas locais — com degustação! Uma perdição.' },
    { title:'A Senhora das Especiarias', loc:'Centro de Gonçalves',
      desc:'Geleias exóticas, temperos artesanais e sorvetes orgânicos de amora. Parada obrigatória.' }
  ]
};
