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
    /*{
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
    },*/
  ],
  products: [
    {
      //_id: '1',
      name: 'Vestido Calduch vermelho',
      slug: 'vestido-calduch-vermelho',
      category: 'Vestidos',
      image: '/images/red_1.jpg',
      price: 250,
      countInStock: 10,
      brand: 'Calduch',
      rating: 4.5,
      numReviews: 15,
      description:
        'Tecido em Crepe. Apresenta relevo em sua estampa. Otimo para passeios no final da tarde',
    },
    {
      //_id: '2',
      name: 'Vestido Merli vermelho alisarina',
      slug: 'vestido-merli-vermelho-alisarina',
      category: 'Vestidos',
      image: '/images/Merli1.jpg',
      price: 560,
      countInStock: 15,
      brand: 'Merli',
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
