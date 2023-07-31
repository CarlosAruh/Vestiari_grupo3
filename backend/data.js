import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Carlos',
      email: 'carlos@enoix.com',
      password: bcrypt.hashSync('1234'),
      isAdmin: true,
    },
    {
      name: 'Josafa',
      email: 'josabolado@enoix.com',
      password: bcrypt.hashSync('4321'),
      isAdmin: false,
    },
    {
      name: 'Luziana Cardoso Coelho',
      email: 'lulurivotril@enoix.com',
      password: bcrypt.hashSync('5268'),
      //isAdmin: false,
    },
    {
      name: 'Judriani De Brito',
      email: 'judagainstmachine@enoix.com',
      password: bcrypt.hashSync('1672'),
    },
    {
      name: 'Wilb',
      email: 'wildosesquemas@enoix.com',
      password: bcrypt.hashSync('6248'),
    },
    {
      name: 'Ueslei Morais',
      email: 'lemorais@enoix.com',
      password: bcrypt.hashSync('9534'),
    },
    {
      name: 'Sandro Cristiano',
      email: 'sandrao@enoix.com',
      password: bcrypt.hashSync('2579'),
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Peru Fácil',
      slug: 'peru-facil',
      category: 'Aves',
      image: '/images/peru.png',
      price: 50,
      countInStock: 10,
      brand: 'Sadia',
      rating: 4.5,
      numReviews: 15,
      description:
        'Valor Energético: 186 Kcal  \n Carboidratos: 0,6 \n Proteínas: 17g \n Gorduras Totais: 13g \n Gorduras Saturadas: 4,2 \n Gordura Trans: 0g \n Sódio: 320mg',
    },
    {
      //_id: '2',
      name: 'Hot Bowns Macarrão com Queijo e Brocolis',
      slug: 'hot-brows-macarrao-queijo-brocolis',
      category: 'Hot Brows',
      image: '/images/HotBowls_macarraobrocolisqueijo_1',
      price: 560,
      countInStock: 15,
      brand: 'Sadiai',
      rating: 3.5,
      numReviews: 10,
      description:
        'vestido em Jersey com detalhes na cintura em guipir, fenda protuberante e saia esvoaçante. Fique mais linda que a noiva no casamento.',
    },
    {
      //_id: '3',
      name: 'Jaqueta Jogguer Ruizz ocre',
      slug: 'jaqueta-jogguer-ruizz-ocre',
      category: 'Jaquetas',
      image: '/images/Ruizz4.webp',
      price: 200,
      countInStock: 25,
      brand: 'Ruizz',
      rating: 4,
      numReviews: 12,
      description:
        'Jaqueta em sarja com forro, bolsos frontais. Componha seu look no inverno com estilo.',
    },
    {
      //_id: '4',
      name: 'Vestido Sweetmoon azul',
      slug: 'vestido-sweetmoon-azul',
      category: 'Vestidos',
      image: '/images/Sweetmoon1.jpg',
      price: 340,
      countInStock: 0,
      brand: 'Sweetmoon',
      rating: 3.5,
      numReviews: 20,
      description:
        ' Vestido em seda, e tule com detalhes em glitter. Saia Mullet com brilho e top com aro e bojo. A Barbie vai ficar morrendo de inveja',
    },
    {
      //_id: '5',
      name: 'Conjunto Fitchic',
      slug: 'conjunto-fitchic',
      category: 'Conjuntos',
      image: '/images/fitchic5.webp',
      price: 400,
      countInStock: 8,
      brand: 'Fitchic',
      rating: 5,
      numReviews: 25,
      description:
        'Moleton leve azul e legging preta. Ambos em tecido antisuor. Na academia ou no parque, você vai arrasar!',
    },
    {
      //_id: '6',
      name: 'Casaco Doir preto',
      slug: 'casaco-doir-preto',
      category: 'Casacos',
      image: '/images/Doir1.jpg',
      price: 800,
      countInStock: 0,
      brand: 'Doir',
      rating: 3.5,
      numReviews: 8,
      description:
        'Casaco sobretudo puffer,   seja abençoado com todo esse aconchego',
    },
  ],
};

export default data;
