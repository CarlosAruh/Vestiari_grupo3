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
      name: 'Macarrão ao Molho Branco com Queijo, Brócolis e Bacon',
      slug: 'macarrao-branco-queijo-brocolis-bacon',
      category: 'Hot-Bowls',
      image: '/images/HotBowls-macarraoBrocolisQueijo_1.png',
      price: 12,
      countInStock: 10,
      brand: 'Sadia',
      rating: 4.5,
      numReviews: 15,
      description:
        'Advertência de Consumo!Produto quente! Após o preparo, retire o produto do forno micro-ondas com cuidado, segurando nas extremidades com o auxilio de luva térmica e apoio. Não preparar o produto em forno convencional (gás) ou elétrico. Ingredientes: Molho branco com queijo (água, creme de leite, leite integral em pó, queijo mussarela, cebola, amido modificado, alho, margarina**, açúcar, sal), macarrão de sêmola, água, brócolis, bacon em cubos**, óleo de soja**. ** Bacillus thuringiensis, streptomyces viridochromogenes, agrobacterium tumefaciens e zea mays. Açúcares Adicionados____0.2 g Açúcares Totais____1.7 g Carboidratos____19 g	Fibra Alimentar	____1.1 g Gorduras Saturadas____3.7 g Gorduras Totais	____7 g Gorduras Trans____0 g Proteínas_____6.9 g Sódio____263 mg Valor energético____166 kcal',
    },
    {
      //_id: '2',
      name: 'Hot-Bowls Mac n Cheese Sabor Cheddar',
      slug: 'hot-bowls-macn-cheese-sabor-cheddar',
      category: 'Hot Browls',
      image: '/images/HotBows_cheddar_2.png',
      price: 12,
      countInStock: 15,
      brand: 'Sadia',
      rating: 3.5,
      numReviews: 10,
      description:
        'Advertência de Consumo!Produto quente! Após o preparo, retire o produto do forno micro-ondas com cuidado, segurando nas extremidades com o auxilio de luva térmica e apoio. Não preparar o produto em forno convencional (gás) ou elétrico. Ingredientes: Molho branco com queijo (água, creme de leite, leite integral em pó, queijo mussarela, cebola, amido modificado, alho, margarina**, açúcar, sal), macarrão de sêmola, água, brócolis, bacon em cubos**, óleo de soja**. ** Bacillus thuringiensis, streptomyces viridochromogenes, agrobacterium tumefaciens e zea mays. Açúcares Adicionados____0.2 g Açúcares Totais____1.7 g Carboidratos____19 g	Fibra Alimentar	____1.1 g Gorduras Saturadas____3.7 g Gorduras Totais	____7 g Gorduras Trans____0 g Proteínas_____6.9 g Sódio____263 mg Valor energético____166 kcal',
    },
    {
      //_id: '3',
      name: 'Hot-Bowls Macn Cheese Sabor Cheddar e Calabresa',
      slug: 'hot-bowls-macn-cheese-sabor-cheddar-calabresa',
      category: 'Hot-Bowls',
      image: '/images/HotBows_cheddarcalabresa_3.png',
      price: 12,
      countInStock: 25,
      brand: 'Sadia',
      rating: 4,
      numReviews: 12,
      description:
        'Advertência de Consumo!Produto quente! Após o preparo, retire o produto do forno micro-ondas com cuidado, segurando nas extremidades com o auxilio de luva térmica e apoio. Não preparar o produto em forno convencional (gás) ou elétrico. Ingredientes: Molho branco com queijo (água, creme de leite, leite integral em pó, queijo mussarela, cebola, amido modificado, alho, margarina**, açúcar, sal), macarrão de sêmola, água, brócolis, bacon em cubos**, óleo de soja**. ** Bacillus thuringiensis, streptomyces viridochromogenes, agrobacterium tumefaciens e zea mays. Açúcares Adicionados____0.2 g Açúcares Totais____1.7 g Carboidratos____19 g	Fibra Alimentar	____1.1 g Gorduras Saturadas____3.7 g Gorduras Totais	____7 g Gorduras Trans____0 g Proteínas_____6.9 g Sódio____263 mg Valor energético____166 kcal',
    },
    {
      //_id: '4',
      name: 'Torta de Palmito com Requeijão',
      slug: 'torta-palmito-requeijao',
      category: 'Tortas',
      image: '/images/tortaPalmitoQueijo_4.png',
      price: 25,
      countInStock: 0,
      brand: 'Sadia',
      rating: 3.5,
      numReviews: 20,
      description:
        'Farinha de trigo enriquecida com ferro e ácido fólico, iogurte natural, óleo de soja, água, ovo, palmito, tomate, queijo parmesão, requeijão cremoso, condimentos naturais e pimenta preta, leite integral em pó, azeitona, amido modificado, magarina, sal, fermentos químicos: fosfato monocálcio ( INS 341i), pirofosfato dissódico ( INS 450i) e bicarbonato de sódio ( INS 500ii), acidulante ácido cítrico ( INS 330) e melhorador de farinha metabissulfito de sódio ( INS 223). CONTÉM GLUTÉN. Ingredientes: Farinha de trigo enriquecida com ferro e ácido fólico, iogurte parcialmente desnatado, água, óleo de soja**, ovo, palmito, tomate, queijo parmesão, requeijão, cebola, leite em pó integral, azeitona, amido modificado, margarina**, amido**, sal (cloreto de sódio), salsa, pimenta-preta, aromatizante: aroma idêntico ao natural, acidulante: ácido cítrico, melhorador de farinha: metabissulfito de sódio. **Bacillus thuringiensis, streptomyces viridochromogenes, agrobacterium tumefaciens e zea mays. Carboidratos_____23 g Fibra Alimentar	___1.9 g Gorduras Saturadas____5.9 g Gorduras Totais	______20 g Gorduras Trans________0 g Proteínas__________6.6 g Sódio_____________488 mg Valor energético_________298 kcal',
    },
    {
      //_id: '5',
      name: 'Torta de Frango com Palmito, Milho e Catupiry',
      slug: 'torta-frango-palmito-milho-catupiry',
      category: 'Tortas',
      image: '/images/tortaPalmitoMilhoCatupiry_5.png',
      price: 25,
      countInStock: 8,
      brand: 'Sadia',
      rating: 5,
      numReviews: 25,
      description:
        'Farinha de trigo enriquecida com ferro e ácido fólico, iogurte natural, óleo de soja, carne de frango, ovo, água, molho de tomate, palmito, queijo parmesão, cebola, azeitona, requeijão cremoso, milho, amido modificado, margarina, sal, pimentas calabresa e preta, fermentos químicos: fosfato monocálcico (INS 341i), pirofosfato dissódico (INS 500ii) e bicarbonato de sódio (INS500ii), acidulante ácido cítrico (INS 330) e melhorador de farinha metabissulfito de sódio (INS 223). \n   CONTÉM GLÚTEN. \n    Ingredientes:      Farinha de trigo fortificada com ferro e ácido fólico, iogurte parcialmente desnatado, carne de frango, óleo de soja, ovo, água, molho de tomate, palmito, queijo parmesão, cebola, milho, requeijão, azeitona, amido modificado, margarina, sal, pimenta calabresa, pimenta-preta, pirofosfato dissódico e bicarbonato de sódio, aromatizante: aroma idêntico ao natural de carne, acidulante: ácido cítrico, antioxidante: metabissulfito de sódio.  Carboidratos_____21 g        Fibra Alimentar	___1.7 g        Gorduras Saturadas____5.7 g        Gorduras Totais	______20 g        Gorduras Trans________0 g        Proteínas__________9 g        Sódio_____________498 mg        Valor energético_________299 kcal',
    },
    {
      //_id: '6',
      name: 'Torta de Frango com Requeijão',
      slug: 'torta-frango-requeijao',
      category: 'Tortas',
      image: '/images/tortaFrangoRequeijao_6.png',
      price: 25,
      countInStock: 0,
      brand: 'Sadia',
      rating: 3.5,
      numReviews: 8,
      description:
        'Farinha de trigo enriquecida com ferro e ácido fólico, requeijão, gordura vegetal hidrogenada, frango, molho de tomate, creme de leite em pó, amido modificado, ovo, azeitona, condimentos naturais, azeite de oliva, margarina, sal, queijo parmesão aroma natural, melharadores de farinha: bissulfito de sódio (INS 222) e cloridrato de L - cisteína (INS 920)CONTÉM GLÚTEN Ingredientes: Farinha de trigo fortificada com ferro e ácido fólico, água, gordura vegetal, carne de frango (peito de frango, água, sal, proteína de soja, amido modificado, cebola, estabilizantes: tripolifosfato de sódio, polifosfato de sódio, espessante: carragena, antioxidante: isoascorbato de sódio, aromatizante: aroma natural de alho), requeijão, creme de leite, molho de tomate, leite em pó integral, amido modificado, azeitona, margarina, azeite de oliva, cebola, ovo, sal, cloreto de potássio, alho, salsa, cebolinha, cloridrato de l-cisteína, óleo de palma, óleo de coco, antioxidante: metabissulfito de sódio e aromatizantes: aroma natural e aroma idêntico ao natural. Carboidratos_____35 g       Fibra Alimentar	___2.2 g       Gorduras Saturadas____11 g       Gorduras Totais	______27 g        Gorduras Trans________0 g      Proteínas__________9 g        Sódio_____________288 mg        Valor energético_________417 kcal',
    },
  ],
};

export default data;
