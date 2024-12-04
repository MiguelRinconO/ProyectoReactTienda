const products = [
  {
    name: "Air Jordan 4 Retro fear",
    image:
      "https://nikeco.vtexassets.com/arquivos/ids/710907-800-auto?v=638639138135130000&width=800&height=auto&aspect=true",
    description:
      "Adéntrate en un clásico. Estos AJ4 regresan en cuero de pleno grano y sintético, más unos textiles de primera. Los colores exuberantes y los toques metálicos actualizan este ícono; además, gracias a los elementos de diseño originales, como ojales flotantes y detalles inspirados en la malla, brindan la misma frescura que en 1989.",
    rating: 4.5,
    numReview: 6,
    price: 1100000,
    countInStock: 20,
  },
  {
    name: "Nair Max 97",
    image:
      "https://nikeco.vtexassets.com/arquivos/ids/203431-800-auto?v=638343798336900000&width=800&height=auto&aspect=true",
    description:
      "el Nike Air Max 97 brinda un look para impulsar tu estilo a máxima velocidad.Con la revolucionaria unidad Nike Air larga que sacudió el mundo del running y nuevos estampados de pitón y detalles reflectantes, este calzado te permite pisar con comodidad de primer nivel.",
    rating: 4.4,
    numReview: 2,
    price: 950000,
    countInStock: 20,
  },
  {
    name: "Nike Waffle Nav",
    image:
      "https://nikeco.vtexassets.com/arquivos/ids/713695-800-auto?v=638666974034670000&width=800&height=auto&aspect=true",
    description:
      "Lo retro se moderniza con este calzado elegante inspirado en el Nike Daybreak. La gamuza y el nylon que evocan a otra época se combinan en colores complementarios, y la entresuela wedge actualizada te brinda un impulso adicional. Estilo, comodidad y la icónica suela tipo waffle: esta es una nueva adición perfecta para tu rotación diaria.",
    rating: 4.4,
    numReview: 2,
    price: 620000,
    countInStock: 10,
  },
  {
    name: "Tenis Samba OG",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8d2af4ef5c244e2f95f6b948c79fdedf_9366/Tenis_Samba_OG_Negro_IH3119_01_standard.jpg",
    description:
      " son un clásico atemporal de Adidas que combina estilo retro con funcionalidad moderna. Este diseño icónico, inspirado en el calzado de fútbol, presenta una parte superior en cuero de alta calidad con detalles en gamuza que le otorgan textura y un toque sofisticado.",
    rating: 4.4,
    numReview: 2,
    price: 400000,
    countInStock: 10,
  },
  {
    name: "Tenis Ultraboost 5x",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/645b890f3f9647aab5c779f41ce0a043_9366/Tenis_Ultraboost_5x_Turquesa_IH3113_HM1.jpg",
    description:
      "son el epítome de la innovación y el rendimiento deportivo. Diseñados para ofrecer máxima comodidad y soporte, cuentan con la tecnología Boost en la entresuela, que devuelve energía a cada paso, brindando una experiencia de carrera más ligera y eficiente.",
    rating: 4.4,
    numReview: 2,
    price: 850000,
    countInStock: 10,
  },
  {
    name: "Tenis de Trail Running Terrex Trail Rider",
    image: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e6195b55723d4efdbca803ba93f93f02_9366/Tenis_de_Trail_Running_Terrex_Trail_Rider_Negro_HR1182_HM1.jpg",
    description:
      "Adéntrate en un clásico. Estos AJ4 regresan en cuero de plena flor y cuero sintético, más unos textiles de primera.",
    rating: 4.4,
    numReview: 2,
    price: 300000,
    countInStock: 20,
  },
  {
    name: "PUMA x ALEX TOUSSAINT Deviate NITRO™ 3",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/312491/01/sv01/fnd/PNA/fmt/png/PUMA-x-ALEX-TOUSSAINT-Deviate-NITRO%E2%84%A2-3-Women's-Running-Shoes",
    description:
      "Adéntrate en un clásico. Estos AJ4 regresan en cuero de plena flor y cuero sintético, más unos textiles de primera.",
    rating: 4.4,
    numReview: 200,
    price: 450000,
    countInStock: 200,
  },
  {
    name: "X-Cell Lightspeed",
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/309972/13/sv01/fnd/PNA/fmt/png/X-Cell-Lightspeed-Men's-Running-Shoe",
    description:
      "Adéntrate en un clásico. Estos AJ4 regresan en cuero de plena flor y cuero sintético, más unos textiles de primera.",
    rating: 4.4,
    numReview: 300,
    price: 250000,
    countInStock: 20,
  },
  {
    name: "Men's 1000",
    image: "https://newbalance.com.co/cdn/shop/files/M1000EA-1_d5d0e895-a2f6-4e69-a919-a7b483a25d20.jpg?v=1732045960&width=493",
    description:
      "La reedición de la 1000 saca de los archivos un clásico del cambio de milenio. Lanzadas originalmente en 1999, las 1000 encarnaban el estilo atrevido y futurista de la época con un diseño aerodinámico pero intrincadamente detallado. ",
    rating: 4.4,
    numReview: 300,
    price: 610000,
    countInStock: 100,
  },
  {
    name: "Unisex 530",
    image: "https://newbalance.com.co/cdn/shop/files/MR530ADA-1_hb7a1m.jpg?v=1731617923&width=493",
    description:"La MR530 original combinaba la estética del cambio de milenio con la fiabilidad de una zapatilla de running de alto kilometraje. La reintroducida 530 aplica una perspectiva contemporánea de estilo cotidiano a este diseño orientado al rendimiento",
    rating: 4.4,
    numReview: 200,
    price: 460000,
    countInStock: 100,
  },
  {
    name: "Women's 550",
    image: "https://newbalance.com.co/cdn/shop/files/BBW550ED-1.jpg?v=1731617895&width=493",
    description:
      "La 550 original debutó en 1989 y dejó su huella en las canchas de baloncesto de costa a costa. Tras su lanzamiento inicial, las 550 se archivaron, antes de ser reintroducidas en ediciones limitadas a finales de 2020, y volvieron a la alineación a tiempo completo en 2021, convirtiéndose rápidamente en un favorito de la moda mundial.",
    rating: 4.4,
    numReview: 2000,
    price: 560000,
    countInStock: 100,
  },
  {
    name: "Unisex 9060",
    image: "https://newbalance.com.co/cdn/shop/files/U9060NRH-1_o1dnyn.jpg?v=1726528600&width=493",
    description:
      "El 9060 es una nueva expresión del estilo refinado y el diseño innovador de la serie 99X clásica. La 9060 reinterpreta elementos familiares de la 99X con una sensibilidad deformada inspirada en la estética orgullosamente futurista y visiblemente tecnológica de la era del efecto 2000.",
    rating: 4.4,
    numReview: 220,
    price: 825500,
    countInStock: 100,
  },
  {
    name: " Reebok Nano X3",
    image: "https://reebokcol.vtexassets.com/arquivos/ids/1083209/100033527_1.jpg?v=638633031740730000",
    description:
      " el Nano X3 brinda soporte y estabilidad, con una suela exterior flexible diseñada para el movimiento en cualquier dirección. Ideal para sesiones intensas en el gimnasio o entrenamiento físico funcional.",
    rating: 4.4,
    numReview: 3200,
    price: 450000,
    countInStock: 100,
  },
  {
    name: " Energen Tech Plus 2 ",
    image: "https://reebokcol.vtexassets.com/arquivos/ids/884629/100204828_1.jpg?v=638569567880100000",
    description:
      "ofrece una amortiguación sensible y un diseño audaz, que combina comodidad y estilo tanto para uso informal como para rendimiento durante entrenamientos",
    rating: 4.4,
    numReview: 500,
    price: 220000,
    countInStock: 100,
  },
  {
    name: "Club C Bulc",
    image: "https://reebokcol.vtexassets.com/arquivos/ids/1069283/100074248_1.jpg?v=638572638632270000",
    description:
      "Diseñado para entrenamientos de alta intensidad,  ofrece un excelente agarre, con una parte superior de malla transpirable y una entresuela de EVA para soportar movimientos explosivos y levantamientos.",
    rating: 4.4,
    numReview: 2000,
    price: 400000,
    countInStock: 100,
  },
  {
    name: " Club C 85",
    image: "https://reebokcol.vtexassets.com/arquivos/ids/1054149/100074163_1.jpg?v=638571116152730000",
    description:
      "Estas Zapatillas Para Hombre Reinventan El Concepto De Lo Vintage Combinando Elementos Retro De Los Años 80 Y 90 Para Crear Un Diseño Completamente Nuevo. La Parte Superior De Cuero Se Mantiene Fiel A La Versión Original. La Etiqueta De La Lengüeta Incorpora El Tradicional Logo Starcrest Y El Moderno Logo Vector Para Conseguir El Estilo Característico De Reebok.",
    rating: 4.4,
    numReview: 200,
    price: 300000,
    countInStock: 100,
  },
  {
    name: "FILA Axilus 2 Energized",
    image: "https://www.tiendasfilacolombiaonline.com/images/large/tiendafilacolombia/Zapatos_Tenis_FILA_Axilus_2_Energized_Mu-Colombia-521607_ZOOM.jpg",
    description:
      "Diseñado para ayudarte a superar a tu oponente en la cancha. Fabricado con materiales livianos para máxima agilidad y de calidad. Icónico en todas parte",
    rating: 4.4,
    numReview: 2,
    price: 100000,
    countInStock: 100,
  },
  {
    name: "Baloncesto FILA Grant Hill 3,",
    image: "https://www.tiendasfilacolombiaonline.com/images/large/tiendafilacolombia/Zapatillas_Baloncesto_FILA_Grant_Hill_3_-Colombia-273548_ZOOM.jpg",
    description:
      "Una zapatilla de baloncesto clásica de una de las leyendas del baloncesto.La suela azul hielo añade un elemento de intriga.Icónico en todas partes",
    rating: 4.4,
    numReview: 2,
    price: 250000,
    countInStock: 100,
  },
  {
    name: "FILA Ray Tracer Tr 2 Mid",
    image: "https://www.tiendasfilacolombiaonline.com/images/large/tiendafilacolombia/Botas_Deportivas_FILA_Ray_Tracer_Tr_2_Mi-Colombia-853914_ZOOM.jpg",
    description:
      "Hecho cómodo para recorrer las calles o caminar por un sendero. Diseñado con un estilo único para un perfil atractivo. Icónico en todas partes",
    rating: 4.4,
    numReview: 2,
    price: 250000,
    countInStock: 100,
  },
  {
    name: "FILA Disruptor 2",
    image: "https://www.tiendasfilacolombiaonline.com/images/large/tiendafilacolombia/Zapatos_Atl%C3%A9ticos_FILA_Disruptor_2_Mujer-Colombia-829016_ZOOM.jpg",
    description:
      "Cómodo, duradero y de excelente apariencia, este calzado deportivo es una nueva versión de un viejo favorito. ¡Serás imparable con estos",
    rating: 4.4,
    numReview: 2,
    price: 200000,
    countInStock: 100,
  },
];
module.exports = products;
