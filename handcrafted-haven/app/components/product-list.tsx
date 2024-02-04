'use client';
import React, { useState } from 'react';
import Product from './product'; // Make sure this path matches your project structure
import { Client } from '@vercel/postgres';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: "Handcrafted Wooden Vase",
      description: "A beautifully handcrafted wooden vase.",
      seller: "Carlose Woodward",
      price: 45.99,
      imageUrl: "https://dl.dropboxusercontent.com/scl/fi/5s6gvlr7npo5pmwhvfqnl/wooden-vase.webp?rlkey=sdnp04o8wndo61yrk0maxw9zk&dl=0"
    },
    {
      id: 2,
      name: "Rustic Wooden Bowl",
      description: "Rustic, warm wooden bowl perfect for any home.",
      seller: "Carlose Woodward",
      price: 30.00,
      imageUrl: "https://dl.dropboxusercontent.com/scl/fi/5of7fs1w9d6oqvl3z0i96/rustic-wooden-bowl.webp?rlkey=ok3cs8styqaugculvob8mywfm&dl=0"
    },
    {
      id: 3,
      name: "Wooden Sculpture",
      description: "Intricate wooden sculpture sure to warm your living space with its inspiring design.",
      seller: "Carlose Woodward",
      price: 60.00,
      imageUrl: "https://dl.dropboxusercontent.com/scl/fi/wxbiingc3020xlvfb4afj/wooden-sculpture.webp?rlkey=fbwgipgi0lz6d6oonlyzoae3c&dl=0"
    },
    {
      id: 4,
      name: "Ceramic Vase",
      description: "A unique ceramic vase.",
      seller: "Larry Clayton",
      price: 40.00,
      imageUrl: "https://dl.dropboxusercontent.com/scl/fi/vdsmqsohbb0kqmvfroiof/ceramic-vase.webp?rlkey=bh8kmlpktq3ae85sdpyyzdv1k&dl=0"
    },
    {
      id: 5,
      name: "Ceramic Plate Set",
      description: "Handmade, unique ceramic plate set to inspire your space each day.",
      seller: "Larry Clayton",
      price: 75.00,
      imageUrl: "https://dl.dropboxusercontent.com/scl/fi/76o2ijzkl3fu0tsomb8q1/ceramic-plates.webp?rlkey=653d4vwgf5b2wn0lueom1lv74&dl=0"
    },
    {
      id: 6,
      name: "Decorative Pottery Mug",
      description: "Handcrafted pottery mug.",
      seller: "Larry Clayton",
      price: 25.00,
      imageUrl: "https://dl.dropboxusercontent.com/scl/fi/3vmh07nasz3h153dfb5ry/ceramic-mug.webp?rlkey=5aucgdna8tikm7pl5brfkeioy&dl=0"
    },   {
      id: 7,
      name: "Textile Wall Art",
      description: "Contemporary textile wall art. A unique fabric masterpiece.",
      seller: "Darla Thread",
      price: 85.00,
      imageUrl: "https://dl.dropboxusercontent.com/scl/fi/zkqpubtaf3jbzba3q5gu7/textile-wall-art.webp?rlkey=d79shcmcxf499xvcmf82vykvv&dl=0"
    },
    {
      id: 8,
      name: "Handwoven Scarf",
      description: "Luxurious handwoven scarf combining comfort with art.",
      seller: "Darla Thread",
      price: 50.00,
      imageUrl: "https://dl.dropboxusercontent.com/scl/fi/o4b93odhd8166ftvjodx0/scarf.webp?rlkey=en3lbe9u1gaem0fa97hnnwtgu&dl=0"
    },
    {
      id: 9,
      name: "Fabric Tote Bag",
      description: "Stylish and durable handcrafted tote bag.",
      seller: "Darla Thread",
      price: 35.00,
      imageUrl: "https://dl.dropboxusercontent.com/scl/fi/01o790zwm6lrccrubu0gk/tote-bag.webp?rlkey=0yt4je8psaj86km1s9x42wczb&dl=0"
    },
    {
      id: 10,
      name: "Abstract Canvas Painting",
      description: "An original abstract canvas painting by Allison Artison.",
      seller: "Allison Artison",
      price: 150.00,
      imageUrl: "https://dl.dropboxusercontent.com/scl/fi/oygzza42qctano90t13du/abstract-painting.webp?rlkey=dmyq2699j8x6k4utm0ph1ekat&dl=0"
    },
    {
      id: 11,
      name: "Landscape Oil Painting",
      description: "Beautiful landscape oil painting, capturing the essence of nature.",
      seller: "Allison Artison",
      price: 200.00,
      imageUrl: "https://dl.dropboxusercontent.com/scl/fi/8u3sr4fk6kglcs1fi6bwd/landscape-painting.webp?rlkey=a15zg2e5atc4gmjqayeqpcfet&dl=0"
    },
    {
      id: 12,
      name: "Modern Art Piece",
      description: "A striking modern art piece, vibrant and captivating.",
      seller: "Allison Artison",
      price: 175.00,
      imageUrl: "https://dl.dropboxusercontent.com/scl/fi/uuic1sq6l9z8b0gxozk5c/modern-painting.webp?rlkey=yvm1cxb1lceosg9w79g44bm1t&dl=0"
    },
    {
      id: 13,
      name: "Metal Wall Decor",
      description: "Elegant metal wall decor, perfect for adding a touch of sophistication.",
      seller: "Sarah Brass",
      price: 95.00,
      imageUrl: "https://dl.dropboxusercontent.com/scl/fi/f3pd9t9e6oiw16x7kxp7b/metal-wall-art.webp?rlkey=2j5bchtnrr1eypma32s6we133&dl=0"
    },
    {
      id: 14,
      name: "Handforged Metal Vase",
      description: "A handforged metal vase combining durability with style.",
      seller: "Sarah Brass",
      price: 70.00,
      imageUrl: "https://dl.dropboxusercontent.com/scl/fi/vkueiqce01g82b7ae0roh/metal-vase.webp?rlkey=pehorvz4pu50ip6e6w3ph58dw&dl=0"
    },
    {
      id: 15,
      name: "Artistic Metal Bowl",
      description: "A beautifully designed metal bowl, a true work of art.",
      seller: "Sarah Brass",
      price: 55.00,
      imageUrl: "https://dl.dropboxusercontent.com/scl/fi/3blxsdmrykf6zemnxmv8n/metal-bowl.webp?rlkey=mdo2n3a9dh0uoj82gibnvdgns&dl=0"
    }
    // Add the rest of your products here...
  ];

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.seller.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by artist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="item-list">
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
