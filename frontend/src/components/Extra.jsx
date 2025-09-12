import React from "react";

const products = {
  featured: [
    {
      title: "SPRING EDIT",
      price: "$169.00",
      img: "https://m.media-amazon.com/images/I/71I-kFhL6eL._SY741_.jpg",
    },
    {
      title: "HANDLOOM WONDERS",
      price: "$159.00",
      img: "https://m.media-amazon.com/images/I/71I-kFhL6eL._SY741_.jpg",
    },
    {
      title: "BRIDAL COLLECTION",
      price: "$139.00",
      img: "https://m.media-amazon.com/images/I/71I-kFhL6eL._SY741_.jpg",
    },
    {
      title: "BRIDAL COLLECTION",
      price: "$129.00",
      img: "https://m.media-amazon.com/images/I/71I-kFhL6eL._SY741_.jpg",
    },
  ],
  bestSellers: [
    {
      title: "FESTIVE CHARM",
      price: "$79.00",
      img: "https://m.media-amazon.com/images/I/71I-kFhL6eL._SY741_.jpg",
    },
    {
      title: "FESTIVE CHARM",
      price: "$79.00",
      img: "https://m.media-amazon.com/images/I/71I-kFhL6eL._SY741_.jpg",
    },
    {
      title: "Floral Elegance",
      price: "$99.00",
      img: "https://m.media-amazon.com/images/I/71I-kFhL6eL._SY741_.jpg",
    },
    {
      title: "Motifs & Colors",
      price: "$79.00",
      img: "https://m.media-amazon.com/images/I/71I-kFhL6eL._SY741_.jpg",
    },
  ],
};

export default function Collections() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 mt-7 md:grid-cols-2 gap-8">
      {/* Featured Collections */}
      <div>
        <h2 className="text-xl font-semibold mb-4">FEATURED COLLECTIONS</h2>
        <div className="grid grid-cols-2 gap-6">
          {products.featured.map((item, index) => (
            <div key={index} className="relative group">
             <img
  src={item.img}
  alt={item.title}
  className="w-full h-[320px] object-cover object-top rounded-lg"
/>

              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 flex flex-col items-start">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm">{item.price}</p>
                <button className="mt-2 text-xs uppercase bg-white text-black px-3 py-1 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Best-Sellers */}
      <div>
        <h2 className="text-xl font-semibold mb-4">BEST-SELLERS</h2>
        <div className="grid grid-cols-2 gap-6">
          {products.bestSellers.map((item, index) => (
            <div key={index} className="relative group">
                <img
  src={item.img}
  alt={item.title}
  className="w-full h-[320px] object-cover object-top rounded-lg"
/>
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 flex flex-col items-start">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm">{item.price}</p>
                <button className="mt-2 text-xs uppercase bg-white text-black px-3 py-1 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
