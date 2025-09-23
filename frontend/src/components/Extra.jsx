import React, { useContext } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductCard = ({ item }) => {

  const handleCardClick = (e) => {
    if (e.target.closest('.swiper-button-next') || e.target.closest('.swiper-button-prev')) {
      e.preventDefault();
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <Link to={`/product/${item._id}`} onClick={handleCardClick} className="relative group overflow-hidden rounded-lg aspect-[3/4] block">
      <div className="h-full w-full">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          className="h-full w-full"
        >
          {item.image.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`${item.name} view ${i + 1}`}
                className="w-full h-full object-cover object-[center_30%]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 flex flex-col items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="font-semibold text-lg">{item.name}</p>
        <p className="text-sm">{item.price}</p>
        <button className="mt-3 text-xs uppercase bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </Link>
  );
};

export default function Extra() {

  const { products } = useContext(ShopContext);

  const featuredProducts = products.filter((item) => item.category === "Women");
  const bestSellerProducts = products.filter((item) => item.bestseller === true);

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
          {featuredProducts.map((item) => (
            <ProductCard key={item._id} item={item} />
          ))}
        </div>
      </div>

      {/* Best-Sellers */}
      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center">BEST-SELLERS</h2>
        <div className="grid grid-cols-2 gap-6">
          {bestSellerProducts.map((item) => (
             <ProductCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}