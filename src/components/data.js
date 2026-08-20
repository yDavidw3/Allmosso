export const DATA =[
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
    title: "Burger King",
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Burger_King_2020.svg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=original',
    avaliacao: '5.0',
    tempo: '15-30 min',
    distancia: '9,0 km',
    tag: 'Entrega grátis'
  },
];



// pedidos que aparecem na tela Pedidos
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

// endereços salvos que aparecem na tela Endereços
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

// cartões salvos que aparecem na tela Formas de pagamento
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

// cupons que aparecem na tela Cupons
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
