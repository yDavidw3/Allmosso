export const DATA =[
  {
    id: '1',
    title: 'Restaurantes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXkIlEwKeYhHjv3diAXmvTfM7Y8s0nLiJoJKnfbH4WiUnXfQNbzw_p-G3w&s=10',
  },
  {
    id: '2',
    title: 'Promoções',
    image: 'https://png.pngtree.com/png-vector/20221020/ourmid/pngtree-discount-icon-png-image_6368574.png',
  },
  {
    id: '3',
    title: 'Bebidas',
    image: 'https://cdn-icons-png.magnific.com/256/1980/1980881.png?semt=ais_white_label',
  },
  {
    id: '4',
    title: 'Lasanha',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5avpfMFR9BB268bDTEhKeghVk05-O86GbH6ASafvww&s=10',
  },
  {
    id: '5',
    title: 'Prato feito',
    image: 'https://img.magnific.com/vetores-gratis/ilustracao-desenhada-a-mao-feijoada_23-2148793223.jpg?semt=ais_test_b&w=740&q=80',
  },
]

export const RESTAURANTES = [
  {
    id: '1',
    title: 'Restaurante do Palmeirense',
    image: 'https://gstatic.com',
    avaliacao: '5.0',
    tempo: '10-15 min',
    distancia: '2,6 km',
    tag: '25% OFF acima de R$ 60'
  },
  {
    id: '2',
    title: 'La Casa de Trigo',
    image: 'https://pngtree.com',
    avaliacao: '4.6',
    tempo: '10-12 min',
    distancia: '2,0 km',
    tag: 'Itens até 55% OFF'
  },
  {
    id: '3',
    title: 'Senhor Batata - Batataria',
    image: 'https://magnific.com',
    avaliacao: '4.8',
    tempo: '20-30 min',
    distancia: '4,0 km',
    tag: 'Entrega Grátis'
  }
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
