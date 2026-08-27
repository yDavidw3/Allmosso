export const DATA = [
  {
    id: '1',
    title: 'Restaurantes',
    image: 'https://cdn-icons-png.flaticon.com/512/3310/3310748.png',
  },
  {
    id: '2',
    title: 'Promoções',
    image: 'https://static.vecteezy.com/system/resources/previews/072/950/914/non_2x/3d-discount-icon-yellow-sale-tags-with-white-percentage-symbol-isolated-on-transparent-background-free-png.png',
  },
  {
    id: '3',
    title: 'Bebidas',
    image: 'https://cdn-icons-png.magnific.com/256/1980/1980881.png?semt=ais_white_label',
  },
  {
    id: '4',
    title: 'Lasanha',
    image: 'https://cdn-icons-png.flaticon.com/512/6785/6785760.png',
  },
  {
    id: '5',
    title: 'Prato feito',
    image: 'https://cdn-icons-png.flaticon.com/512/857/857681.png',
  },
]

export const RESTAURANTES = [
  {
    id: '1',
    title: 'Restaurante do Palmeirense',
    image: 'https://img.magnific.com/vetores-premium/design-de-logotipo-vintage-retro-de-restaurantes-e-catering_807399-1320.jpg?semt=ais_hybrid&w=740&q=80',
    avaliacao: '5.0',
    tempo: '10-15 min',
    distancia: '2,6 km',
    tag: '25% OFF acima de R$ 60'
  },
  {
    id: '2',
    title: 'La Casa de Trigo',
    image: 'https://play-lh.googleusercontent.com/xSUG513KOdEhpD8th5ju6dvKAlzlApKdAYGZsX6OXLDjNRyEPUXfV2VeXyAVHmVfmJZAsfBXzToC1dsWluQptg',
    avaliacao: '4.6',
    tempo: '10-12 min',
    distancia: '2,0 km',
    tag: 'Itens até 55% OFF'
  },
  {
    id: '3',
    title: 'Senhor Batata - Batataria',
    image: 'https://s3-sa-east-1.amazonaws.com/projetos-artes/fullsize%2F2021%2F03%2F25%2F03%2FLogo-274740_303126_032824906_479307665.jpg',
    avaliacao: '4.8',
    tempo: '20-30 min',
    distancia: '4,0 km',
    tag: 'Entrega Grátis'
  },
  {
    id: '4',
    title: 'Divino Fogão',
    image: 'https://gsobmidia.com.br/uploads/lojas/24/divino-fogao_1604579724.jpg',
    avaliacao: '4.6',
    tempo: '30-60 min',
    distancia: '7,0 km',
    tag: 'Entrega: R$10 - 20'
  },
  {
    id: '5',
    title: "MC Donalds's",
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/McDonald%27s_square_2020.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original',
    avaliacao: '4.3',
    tempo: '20-25 min',
    distancia: '10,0 km',
    tag: 'Entrega grátis'
  },
  {
    id: '6',
    title: 'Burger King',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Burger_King_2020.svg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
    avaliacao: '5.0',
    tempo: '15-30 min',
    distancia: '9,0 km',
    tag: 'Entrega grátis'
  },
  {
    id: '7',
    title: 'Subway',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQB8QW-j_COCVQDW3rSWgUOaWQ38DudBlVzes8koCCcXwTMqmzmb9rTYqD&s=10',
    avaliacao: '4.5',
    tempo: '15-20 min',
    distancia: '3,2 km',
    tag: 'Cupom de R$ 5'
  },
  {
    id: '8',
    title: "Habib's",
    image: 'https://jovempan.com.br/wp-content/uploads/sites/2/2026/08/Restaurante-Habibs.jpg?w=1200&h=675&crop=1',
    avaliacao: '4.2',
    tempo: '25-40 min',
    distancia: '5,1 km',
    tag: 'Entrega grátis'
  },
  {
    id: '9',
    title: 'Outback Steakhouse',
    image: 'https://yt3.googleusercontent.com/pRkDst45tIeTlE4wjyIUZbtiaxFSifa22n3CTYvJP3X4iBdPSoK830s27nh1ioQTLhYcFK5bHQ=s900-c-k-c0x00ffffff-no-rj',
    avaliacao: '4.9',
    tempo: '40-55 min',
    distancia: '8,5 km',
    tag: 'Frete grátis'
  },
  {
    id: '10',
    title: 'Coco Bambu',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyeSpH0MOVdWGXthsk1j8mG7oCk2oFuv5VVoR3vLp0Rv1RnnQTR3GMPY&s=10',
    avaliacao: '4.8',
    tempo: '50-60 min',
    distancia: '12,0 km',
    tag: 'Entrega: R$ 15'
  },
  {
    id: '11',
    title: 'Pizza Hut',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWNG81znPjzSD2p1lzvanz9Iln93x-EvPEkJkje3Cuz0vm2tMGoQ8Dt59q&s=10',
    avaliacao: '4.7',
    tempo: '30-45 min',
    distancia: '6,5 km',
    tag: '30% OFF'
  }
];

export const PEDIDOS = [
  {
    id: '1',
    restaurante: 'Restaurante do Palmeirense',
    itens: '2 itens',
    valor: 'R$ 47,90',
    data: 'Hoje, 19:32',
    status: 'A caminho'
  },
  {
    id: '2',
    restaurante: 'La Casa de Trigo',
    itens: '1 item',
    valor: 'R$ 32,50',
    data: 'Ontem, 20:15',
    status: 'Entregue'
  },
  {
    id: '3',
    restaurante: 'Senhor Batata - Batataria',
    itens: '3 itens',
    valor: 'R$ 68,00',
    data: '12/08, 13:04',
    status: 'Entregue'
  }
];

export const ENDERECOS = [
  {
    id: '1',
    apelido: 'Etec',
    icone: 'home',
    cor: '#007AFF',
    rua: 'R. Feliciano de Mendonça, 290',
    complemento: 'sala 7 - 2DSA - Guaianases, São Paulo',
    tag: 'Padrão'
  },
  {
    id: '2',
    apelido: 'Trabalho',
    icone: 'briefcase',
    cor: '#7B1FA2',
    rua: 'Av. Paulista, 1578',
    complemento: 'Sala 8 - Bela Vista, São Paulo',
    tag: ''
  },
  {
    id: '3',
    apelido: 'Casa da vó',
    icone: 'heart',
    cor: '#FF6B35',
    rua: 'R. dos Trilhos, 105',
    complemento: 'Mooca, São Paulo',
    tag: ''
  }
];

export const PAGAMENTOS = [
  {
    id: '1',
    tipo: 'Crédito',
    icone: 'card',
    cor: '#FF6B35',
    descricao: 'Mastercard •••• 4821',
    vencimento: 'Vence em 09/29',
    tag: 'Padrão'
  },
  {
    id: '2',
    tipo: 'Débito',
    icone: 'card',
    cor: '#007AFF',
    descricao: 'Visa •••• 1093',
    vencimento: 'Vence em 03/28',
    tag: ''
  },
  {
    id: '3',
    tipo: 'Pix',
    icone: 'qr-code',
    cor: '#00A86B',
    descricao: 'admin@email.com',
    vencimento: 'Aprovação na hora',
    tag: ''
  }
];

export const CUPONS = [
  {
    id: '1',
    codigo: 'ALLMOSSO10',
    descricao: 'R$ 10 OFF em pedidos acima de R$ 40',
    validade: 'Vale até 30/08',
    tag: 'Disponível'
  },
  {
    id: '2',
    codigo: 'FRETEGRATIS',
    descricao: 'Entrega grátis na primeira compra',
    validade: 'Vale até 15/09',
    tag: 'Disponível'
  },
  {
    id: '3',
    codigo: 'VOLTEISEMPRE',
    descricao: '20% OFF em bebidas',
    validade: 'Venceu em 01/08',
    tag: 'Expirado'
  }
];

export const PRODUTOS_FILTRADOS = [
  {
    id: '1',
    nome: 'Coca-Cola 2L',
    preco: 'R$ 12,00',
    chave: 'bebidas',
    image: 'https://www.extramercado.com.br/img/uploads/1/277/33334277.png'
  },
  {
    id: '2',
    nome: 'Stella Artois Long Neck',
    preco: 'R$ 8,00',
    chave: 'bebidas',
    image: 'https://www.jauserve.com.br/dw/image/v2/BFJL_PRD/on/demandware.static/-/Sites-jauserve-master/default/dw24b83400/7891991296441.png?sw=1800'
  },
  {
    id: '3',
    nome: 'Suco Integral de Laranja Natural One 900ml',
    preco: 'R$ 9,00',
    chave: 'bebidas',
    image: 'https://img.superhoje.com/img.produtos/7898553442933/img_500_1.png'
  },
  {
    id: '4',
    nome: 'Guaraná Antarctica 350ml',
    preco: 'R$ 5,50',
    chave: 'bebidas',
    image: 'https://www.guaranaantarctica.com.br/sites/g/files/wnfebl12901/files/styles/webp/public/Guaran%C3%A1/350ml.png.webp?itok=WqRju383'
  },
  {
    id: '5',
    nome: 'Água Mineral Natural sem Gás Crystal Garrafa 500ml',
    preco: 'R$ 3,00',
    chave: 'bebidas',
    image: 'https://giassi.vtexassets.com/arquivos/ids/9060709/Agua-Mineral-Natural-sem-Gas-Crystal-Garrafa-500ml.png?v=638802484883730000'
  },
  {
    id: '6',
    nome: 'Cerveja Heineken 600ml',
    preco: 'R$ 14,90',
    chave: 'bebidas',
    image: 'https://www.marquesvendaspmg.shop/images/cerveja-heineken-pure-malt-lager-garrafa-600-ml-cx-12-un-pmg-atacadista.jpg'
  },
  {
    id: '7',
    nome: 'Red Bull Energy Drink 473ml',
    preco: 'R$ 11,90',
    chave: 'bebidas',
    image: 'https://tdc0wy.vteximg.com.br/arquivos/ids/165351-1000-1000/ENERGETICO%20RED%20BULL%20LATA%20473ML%20ENERGY%20DRINK.png.png?v=638750727796900000'
  },
  {
    id: '8',
    nome: 'Prato Feito (PF)',
    preco: 'R$ 19,99',
    chave: 'almoços',
    image: 'https://png.pngtree.com/png-clipart/20240327/original/pngtree-rice-beans-french-fries-and-meat-png-image_14691905.png'
  },
  {
    id: '9',
    nome: 'Strogonoff de Carne',
    preco: 'R$ 29,99',
    chave: 'almoços',
    image: 'https://png.pngtree.com/png-clipart/20240327/original/pngtree-chicken-stroganoff-rice-potato-straw-png-image_14692164.png'
  },
  {
    id: '10',
    nome: 'Feijoada Completa (Média)',
    preco: 'R$ 35,00',
    chave: 'almoços',
    image: 'https://png.pngtree.com/png-clipart/20240308/original/pngtree-feijoada-the-brazilian-cuisine-tradition-png-image_14542564.png'
  },
  {
    id: '11',
    nome: 'Macarronada à Bolonhesa',
    preco: 'R$ 24,90',
    chave: 'almoços',
    image: 'https://png.pngtree.com/png-clipart/20241208/original/pngtree-delicious-pasta-bolognese-on-transparent-background-png-image_17738515.png'
  },
  {
    id: '12',
    nome: 'Bife à Parmegiana',
    preco: 'R$ 32,50',
    chave: 'almoços',
    image: 'https://png.pngtree.com/png-vector/20240124/ourmid/pngtree-the-steak-parmigiana-with-potato-and-rice-png-image_11486007.png'
  },
  {
    id: '13',
    nome: 'Marmitex Bife Acebolado',
    preco: 'R$ 27,00',
    chave: 'almoços',
    image: 'https://png.pngtree.com/png-clipart/20250525/original/pngtree-a-photograph-of-marmita-redonda-de-isopor-food-container-filled-with-png-image_21076414.png'
  },
  {
    id: '14',
    nome: 'Salada Havaiana',
    preco: 'R$ 38,00',
    chave: 'almoços',
    image: 'https://png.pngtree.com/png-clipart/20240323/original/pngtree-tasty-fresh-hawaiian-salmon-poke-salad-png-image_14663982.png'
  },
  {
    id: '15',
    nome: 'X-Tudão',
    preco: 'R$ 18,00',
    chave: 'lanches',
    image: 'https://png.pngtree.com/png-vector/20231016/ourmid/pngtree-burger-food-png-free-download-png-image_10199386.png'
  },
  {
    id: '16',
    nome: 'Hot-Dog Completo',
    preco: 'R$ 9,99',
    chave: 'lanches',
    image: 'https://png.pngtree.com/png-vector/20241123/ourmid/pngtree-loaded-hot-dog-with-savory-toppings-png-image_14549006.png'
  },
  {
    id: '17',
    nome: 'Hambúrguer Artesanal',
    preco: 'R$ 25,00',
    chave: 'lanches',
    image: 'https://png.pngtree.com/png-clipart/20250130/original/pngtree-juicy-burger-with-bacon-strips-and-cheddar-cheese-topping-png-image_20099411.png'
  },
  {
    id: '18',
    nome: 'Misto Quente',
    preco: 'R$ 7,50',
    chave: 'lanches',
    image: 'https://png.pngtree.com/png-clipart/20250416/original/pngtree-toasted-sandwich-with-layers-of-ham-and-cheese-between-golden-brown-png-image_20822875.png'
  },
  {
    id: '19',
    nome: 'Porção de Batata Frita',
    preco: 'R$ 15,00',
    chave: 'lanches',
    image: 'https://png.pngtree.com/png-vector/20231017/ourmid/pngtree-french-fries-on-white-bowl-isolated-fried-fast-food-snack-isolated-png-image_10155460.png'
  },
  {
    id: '20',
    nome: 'Pizza Broto Calabresa',
    preco: 'R$ 22,00',
    chave: 'lanches',
    image: 'https://rickesdigital.com/wp-content/uploads/2023/10/Pizza-broto-calabresa.png'
  }
]