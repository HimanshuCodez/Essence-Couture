import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

// Note: The data structure now includes an array of images for each product.
// I'm using placeholder URLs, which you can replace with your actual product images (front, back, side views, etc.).
const products = {
  featured: [
    {
      title: "SPRING EDIT",
      price: "$169.00",
      images: [
        "https://res.cloudinary.com/dsyc2fqmg/image/upload/v1758597916/kivtzqwpnatjeraiop8c.png",
        "https://m.media-amazon.com/images/I/81Q-08a-p-L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/81hA-3v-p-L._SY741_.jpg",
      ],
    },
    {
      title: "HANDLOOM WONDERS",
      price: "$159.00",
      images: [
        "https://res.cloudinary.com/dsyc2fqmg/image/upload/v1758597916/kivtzqwpnatjeraiop8c.png",
        "https://m.media-amazon.com/images/I/81-c-3a-p-L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/81-c-3a-p-L._SY741_.jpg",
      ],
    },
    {
      title: "BRIDAL COLLECTION",
      price: "$139.00",
      images: [
        "https://res.cloudinary.com/dsyc2fqmg/image/upload/v1758597916/kivtzqwpnatjeraiop8c.png",
        "https://m.media-amazon.com/images/I/81Q-08a-p-L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/81hA-3v-p-L._SY741_.jpg",
      ],
    },
    {
      title: "BRIDAL COLLECTION",
      price: "$129.00",
      images: [
        "https://res.cloudinary.com/dsyc2fqmg/image/upload/v1758597916/kivtzqwpnatjeraiop8c.png",
        "https://m.media-amazon.com/images/I/81-c-3a-p-L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/81-c-3a-p-L._SY741_.jpg",
      ],
    },
  ],
  bestSellers: [
    {
      title: "FESTIVE CHARM",
      price: "$79.00",
      images: [
        "https://res.cloudinary.com/dsyc2fqmg/image/upload/v1758597916/kivtzqwpnatjeraiop8c.png",
        "https://m.media-amazon.com/images/I/81Q-08a-p-L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/81hA-3v-p-L._SY741_.jpg",
      ],
    },
    {
      title: "FESTIVE CHARM",
      price: "$79.00",
      images: [
        "https://res.cloudinary.com/dsyc2fqmg/image/upload/v1758597916/kivtzqwpnatjeraiop8c.png",
        "https://m.media-amazon.com/images/I/81-c-3a-p-L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/81-c-3a-p-L._SY741_.jpg",
      ],
    },
    {
      title: "Floral Elegance",
      price: "$99.00",
      images: [
        "https://res.cloudinary.com/dsyc2fqmg/image/upload/v1758597916/kivtzqwpnatjeraiop8c.png",
        "https://m.media-amazon.com/images/I/81Q-08a-p-L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/81hA-3v-p-L._SY741_.jpg",
      ],
    },
    {
      title: "Motifs & Colors",
      price: "$79.00",
      images: [
        "https://res.cloudinary.com/dsyc2fqmg/image/upload/v1758597916/kivtzqwpnatjeraiop8c.png",
        "https://m.media-amazon.com/images/I/81-c-3a-p-L._SY741_.jpg",
        "https://m.media-amazon.com/images/I/81-c-3a-p-L._SY741_.jpg",
      ],
    },
  ],
};

const ProductCard = ({ item }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg aspect-[3/4]">
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        navigation
        className="h-full w-full"
      >
        {item.images.map((src, i) => (
          <SwiperSlide key={i}>
            <img
              src={src}
              alt={`${item.title} view ${i + 1}`}
              className="w-full h-full object-cover object-top"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 flex flex-col items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="font-semibold text-lg">{item.title}</p>
        <p className="text-sm">{item.price}</p>
        <button className="mt-3 text-xs uppercase bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default function Extra() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
        <style>{`
          .swiper-button-next, .swiper-button-prev {
            color: #fff;
            background-color: rgba(0,0,0,0.3);
            border-radius: 50%;
            width: 30px;
            height: 30px;
            opacity: 0;
            transition: opacity 0.3s;
          }
          .swiper-button-next:after, .swiper-button-prev:after {
            font-size: 14px;
            font-weight: bold;
          }
          .group:hover .swiper-button-next, .group:hover .swiper-button-prev {
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background: #fff;
          }
        `}</style>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Featured Collections */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">FEATURED COLLECTIONS</h2>
        <div className="grid grid-cols-2 gap-6">
          {products.featured.map((item, index) => (
            <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>

      {/* Best-Sellers */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">BEST-SELLERS</h2>
        <div className="grid grid-cols-2 gap-6">
          {products.bestSellers.map((item, index) => (
             <ProductCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}