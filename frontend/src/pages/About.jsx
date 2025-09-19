import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Essence Couture by Rita is a distinguished new brand under the
            esteemed umbrella of Rita and Company, dedicated to celebrating the
            rich traditions of Indian ethnic wear while embracing contemporary
            elegance. With an impeccable fusion of timeless craftsmanship and
            modern design sensibilities, Essence Couture offers an exquisite
            collection of clothing for women and kids .
          </p>
          <p>
            Our creations embody the essence of luxury, sophistication, and
            cultural heritage, meticulously designed to cater to the discerning
            tastes of today’s fashion-forward individuals. Whether it’s the
            intricacy of traditional embroidery, the vibrancy of Indian
            textiles, or the fusion of global styles, each piece from Essence
            Couture tells a story of artistry, grace, and refinement.
          </p>

          <b className="text-gray-800">Our Mission</b>
          <p>
            At Essence Couture, we believe in crafting not just garments but
            experiences, celebrating every occasion with the perfect blend of
            opulence and comfort. Each collection is carefully curated to cater
            to the diverse needs of our customers, ensuring that every piece is
            as unique as the individual who wears it.
          </p>
          <p>
            Explore the world of Essence Couture and indulge in the luxury of truly exceptional fashion, where tradition meets modernity.
          </p>
        </div>
      </div>

      <div className=" text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className=" text-gray-600">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className=" text-gray-600">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className=" text-gray-600">
            Our team of dedicated professionals is here to assist you the way,
            ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
