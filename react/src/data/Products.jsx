const products = [
  {/* men*/},
  {
    id: 1,
    title: "Men Printed Casual Shirt",
    price: 999,
    image: "https://campussutra.com/cdn/shop/files/CSMSSRT7738_1_3b3a4a5e-5da6-48a2-9bb3-c4bfdbe43f3f.jpg?v=1731147468&width=1600",
    description: "Stylish printed casual shirt made from premium cotton. Perfect for daily wear and outings.",
    category: "men",
    brand: "Damensch"
  },
  {
    id: 2,
    title: "Men Slim Fit Formal Shirt",
    price: 1099,
    image: "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240109/UQtd/659d45a374cb305fe00d7f0c/-473Wx593H-466090562-green-MODEL.jpg",
    description: "Elegant slim fit formal shirt ideal for office and formal occasions.",
    category: "men",
    brand: "Damensch"
  },
  {
    id: 3,
    title: "Men Regular Fit Jeans",
    price: 1299,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSCfo_-lr2R1RREu0vhsZCS_IvMgMkOUcVXZoMnL26c_d2U2Vfv165XRvzPWe1kDNLIQ-_ukeJaw2VlonDeJl67jCgW_Il8rQ2YswsBzJT82gwEXqNELTe1Gw",
    description: "Comfortable regular fit jeans with durable denim fabric.",
    category: "men",
    brand: "Levi's"
  },
  {
    id: 4,
    title: "Men Round Neck T-Shirt",
    price: 499,
    image: "https://bodycareapparels.com/cdn/shop/files/PLAMTS014_BLACK_2_e1117153-2575-426c-a113-c3b5664e7caa.jpg?v=1769506096&width=800",
    description: "Soft cotton t-shirt with round neck for everyday comfort.",
    category: "men",
    brand: "Nike"
  },
  {
    id: 5,
    title: "Men Polo T-Shirt",
    price: 799,
    image: "https://m.media-amazon.com/images/I/61LDRdYnQ0L._SX679_.jpg",
    description: "Premium polo t-shirt with breathable fabric and stylish look.",
    category: "men",
    brand: "Adidas"
  },
  {
    id: 6,
    title: "Men Hoodie Sweatshirt",
    price: 1499,
    image: "https://rukminim2.flixcart.com/image/1536/1536/xif0q/sweatshirt/t/b/f/-original-imahg5z6d3wxunns.jpeg?q=90",
    description: "Warm hoodie sweatshirt perfect for winter season.",
    category: "men",
    brand: "Puma"
  },
  {
    id: 7,
    title: "Men Denim Jacket",
    price: 1999,
    image: "https://www.urbanofashion.com/cdn/shop/files/jakt-denimvint-dblue_ea174286-d9fa-4e9f-9835-8f1a49b5ac28.jpg?v=1758282519&width=360",
    description: "Trendy denim jacket for a stylish casual look.",
    category: "men",
    brand: "Levi's"
  },
  {
    id: 8,
    title: "Men Sports Track Pants",
    price: 899,
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRgCCn4zgHbHJnFeCihcqeI5xTCpTq_rHOnDAS2w8AfbUy5ucfvbCaQYtItoxhPIicRsBokDEVEk8L7dPwh_LXxM1cn8YnAUwotkSefZw9sIgjmTrjYfZAo9g",
    description: "Comfortable track pants ideal for gym and sports activities.",
    category: "men",
    brand: "Reebok"
  },
  {
    id: 9,
    title: "Men Casual Shorts",
    price: 599,
    image: "https://rukminim2.flixcart.com/image/767/767/xif0q/short/o/d/2/4xl-srtcodr0b-indiclub-original-imahgahyjma2cukv.jpeg?q=90",
    description: "Lightweight casual shorts for summer wear.",
    category: "men",
    brand: "HRX"
  },
  {
    id: 10,
    title: "Men Leather Jacket",
    price: 2499,
    image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/8/b8ee1ef0925JKTPU0301Black_1.jpg?rnd=20200526195200&tr=w-720",
    description: "Premium leather jacket with modern fit and style.",
    category: "men",
    brand: "Zara"
  },

  {/*women*/},

  {
  id: 11,
  title: "Women Floral Dress",
  price: 1499,
  image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
  description: "Elegant floral dress perfect for summer outings.",
  category: "women",
  brand: "Zara"
},
{
  id: 12,
  title: "Women Denim Jacket",
  price: 1999,
  image: "https://levi.in/cdn/shop/files/237880049_01_Styleshot.jpg?v=1765273452",
  description: "Stylish denim jacket for a casual look.",
  category: "women",
  brand: "Levis"
},
{
  id: 13,
  title: "Women Kurti Set",
  price: 999,
  image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
  description: "Comfortable cotton kurti set for daily wear.",
  category: "women",
  brand: "Biba"
},
{
  id: 14,
  title: "Women Party Gown",
  price: 2999,
  image: "https://macduggal.com/cdn/shop/files/56188-WIN-AB.jpg?v=1766608459&width=990",
  description: "Beautiful party gown for special occasions.",
  category: "women",
  brand: "Forever21"
},
{
  id: 15,
  title: "Women Crop Top",
  price: 699,
  image: "https://images.unsplash.com/photo-1519741497674-611481863552",
  description: "Trendy crop top for a modern look.",
  category: "women",
  brand: "H&M"
},
{
  id: 16,
  title: "Women Palazzo Pants",
  price: 899,
  image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWOsH4-T-VQK7vbJprepQKJQKa0Iz-_qBep0nik_tzOtvDaHgkJkv9jiY9gHqV9xJZbf2NRN6lT-YRSOy6iNVINdcURxbdA84u_kR18hlg",
  description: "Comfortable palazzo pants with stylish design.",
  category: "women",
  brand: "W"
},
{
  id: 17,
  title: "Women Saree",
  price: 2499,
  image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c",
  description: "Traditional saree with elegant design.",
  category: "women",
  brand: "Manyavar"
},
{
  id: 18,
  title: "Women Hoodie",
  price: 1299,
  image: "https://images.unsplash.com/photo-1554568218-0f1715e72254",
  description: "Warm hoodie perfect for winter season.",
  category: "women",
  brand: "Nike"
},
{
  id: 19,
  title: "Women Formal Shirt",
  price: 1199,
  image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c",
  description: "Perfect formal shirt for office wear.",
  category: "women",
  brand: "Van Heusen"
},
{
  id: 20,
  title: "Women Maxi Dress",
  price: 1799,
  image: "https://images.unsplash.com/photo-1509631179647-0177331693ae",
  description: "Flowy maxi dress for a stylish appearance.",
  category: "women",
  brand: "Zara"
},
{/*kid*/},
{
  id: 21,
  title: "Kids Cartoon T-Shirt",
  price: 499,
  image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/20795460a.webp",
  description: "Soft cotton t-shirt with fun cartoon prints.",
  category: "kids",
  brand: "Babyhug"
},
{
  id: 22,
  title: "Kids Denim Dungaree",
  price: 899,
  image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRyhlt7zoEZv6-0DAa2N8K3GV5Ep-USA3s-9K_gw39cTw_bD46s-Wrth634Xy6rJBNWiJDOby9bwyRBo-tBz-18QDLM4J0FPMNR6GsDpt0Ka1-ANBkq4xea",
  description: "Stylish denim dungaree for a cute look.",
  category: "kids",
  brand: "Mothercare"
},
{
  id: 23,
  title: "Kids Party Dress",
  price: 1299,
  image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/4/a/4a5bb19PCF25_1.jpg?rnd=20200526195200&tr=w-720",
  description: "Beautiful party dress for special occasions.",
  category: "kids",
  brand: "Hopscotch"
},
{
  id: 24,
  title: "Kids Hoodie",
  price: 799,
  image: "https://assets-jiocdn.ajio.com/medias/sys_master/root1/20250904/n79E/68b9c0798bfb9009acdc26b3/-473Wx593H-465349162-red-MODEL.jpg",
  description: "Warm and comfortable hoodie for winter.",
  category: "kids",
  brand: "Puma"
},
{
  id: 25,
  title: "Kids Shorts Set",
  price: 599,
  image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/22328760a.webp",
  description: "Cool shorts set for summer wear.",
  category: "kids",
  brand: "FirstCry"
},
{
  id: 26,
  title: "Kids School Uniform",
  price: 999,
  image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSXzRxLiIyfDz9gDFgJI1-LsI9IA23FIO8W7SnJLlAPCv7c56g-_o7gjXfl71dZIqdMZOcMt9A1pSBzPZcwZfX3WC9spV0qToK6Dsb_UW2e68lP0hGsM7rueg",
  description: "Comfortable and durable school uniform set.",
  category: "kids",
  brand: "Allen Solly"
},
{
  id: 27,
  title: "Kids Pajama Set",
  price: 699,
  image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTr7stLwI_-yyTo-HimuTxXpPeHUiyucWT_JNMTEmDKelCvji56fKpebB-bkLYa6HwliiMijyqV-cT9a2u2mFHS_YXOoYSeq1v9yHv8S9nMqTBYNPy2xN3M",
  description: "Soft and cozy pajama set for night wear.",
  category: "kids",
  brand: "Jockey"
},
{
  id: 28,
  title: "Kids Jacket",
  price: 1199,
  image: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/20508484a.webp",
  description: "Warm jacket for winter outings.",
  category: "kids",
  brand: "Nike"
},
{
  id: 29,
  title: "Kids Ethnic Wear",
  price: 1499,
  image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/c/bccc85c50456GPZSMAMagenta_1.jpg?rnd=20200526195200&tr=w-720",
  description: "Traditional ethnic wear for festivals.",
  category: "kids",
  brand: "Manyavar"
},
{
  id: 30,
  title: "Kids Track Suit",
  price: 999,
  image: "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/9/7/97526efHQ9315-461_1.jpg?rnd=20200526195200&tr=w-720",
  description: "Comfortable track suit for sports and play.",
  category: "kids",
  brand: "Adidas"
},
{/*Homes*/},
{
  id: 31,
  title: "Air Conditioner",
  price: 32999,
  image: "https://web-res.midea.com/content/dam/comfee-aem/global/products/heating-cooling/split-air-conditioner/kv1.png/jcr:content/renditions/cq5dam.compression.png",
  description: "Energy efficient split AC with fast cooling.",
  category: "home",
  brand: "LG"
},
{
  id: 32,
  title: "Refrigerator",
  price: 25999,
  image: "https://as2.ftcdn.net/jpg/05/06/82/09/1000_F_506820968_uW9dqAypxCgSpiooB4OSVqCFt1zkkTai.jpg",
  description: "Double door refrigerator with large storage.",
  category: "home",
  brand: "Samsung"
},
{
  id: 33,
  title: "Washing Machine",
  price: 18999,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrQLCfRrFGUznHjO057_71wjS4xzF15twE7suV5XDb1kHtc-Qy6SqxRpw&s",
  description: "Fully automatic washing machine with smart wash.",
  category: "home",
  brand: "Whirlpool"
},
{
  id: 34,
  title: "Microwave Oven",
  price: 7999,
  image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Panasonic_NN-SD69LS_20220410.jpg",
  description: "Compact microwave oven for quick cooking.",
  category: "home",
  brand: "IFB"
},
{
  id: 35,
  title: "Electric Kettle",
  price: 1499,
  image: "https://www.premierkitchen.in/wp-content/uploads/2023/04/Electric-Kettle-054481201.jpg",
  description: "Fast boiling electric kettle with auto shut-off.",
  category: "home",
  brand: "Philips"
},
{
  id: 36,
  title: "Mixer Grinder",
  price: 3499,
  image: "data:image/jpeg;base64,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",
  description: "Powerful mixer grinder for kitchen use.",
  category: "home",
  brand: "Prestige"
},
{
  id: 37,
  title: "Ceiling Fan",
  price: 2499,
  image: "data:image/jpeg;base64,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",
  description: "High-speed ceiling fan with low power consumption.",
  category: "home",
  brand: "Havells"
},
{
  id: 38,
  title: "Vacuum Cleaner",
  price: 5999,
  image: "https://as2.ftcdn.net/jpg/01/94/70/55/1000_F_194705549_4AJtJpQnsN294aTXY4kzCWJiyAIxTLsN.jpg",
  description: "Compact vacuum cleaner with strong suction.",
  category: "home",
  brand: "Eureka Forbes",
  Warranty:"2 year",
  Power:"Standard"
},
{
  id: 39,
  title: "Water Purifier",
  price: 10999,
  image: "https://sonovision.in/wp-content/uploads/2021/09/kent-grand-plus.jpg",
  description: "RO water purifier with advanced filtration.",
  category: "home",
  brand: "Kent"
},
{
  id: 40,
  title: "Induction Cooktop",
  price: 2999,
  image: "https://www.electrolux.in/contentassets/12c6ab2791954fa5b78fa36a6d9f7282/what-is-induction-cooking-01.jpg",
  description: "Portable induction cooktop with quick heating.",
  category: "home",
  brand: "Bajaj"
}


];



export default products;