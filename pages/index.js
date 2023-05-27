import Head from "next/head";
import Image from "next/image";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "@/lib/client";
// import headimg from "../public/h3.png";

export default function Home({ products, bannerData }) {
  return (
    <>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />

      <div class="container mx-auto py-9 md:py-12 px-4 md:px-6">
        <div class="flex items-strech justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
          <div class="flex flex-col md:flex-row items-strech justify-between bg-gray-50 dark:bg-white py-6 px-6 md:py-12 lg:pl-[4rem] md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12">
            <div class="flex flex-col justify-center md:w-1/2">
              <h1 class="text-3xl lg:text-6xl font-semibold text-[#ab9574] ">
                Best Deals
              </h1>
              <p class="text-base lg:text-xl text-[#ab9574]  mt-2">
                Save upto <span class="font-bold">50%</span>
              </p>
            </div>
            <div class="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
              <img src="/h9.png" alt="" class="" />
            </div>
          </div>
          <div class="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-gray-50 dark:bg-whites py-6 px-6 md:py-0 md:px-4 lg:px-6 flex flex-col justify-center relative">
            <div class="flex flex-col justify-center">
              <h1 class="text-3xl lg:text-4xl font-semibold text-[#ab9574]">
                Amazing Hair Styles
              </h1>
              <p class="text-base lg:text-xl text-[#ab9574]">
                Save Upto <span class="font-bold">30%</span>
              </p>
            </div>
            <div class="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
              <img
                src="/hair4.png"
                alt=""
                class="md:w-20 md:h-20 lg:w-full lg:h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="products-heading">
        {" "}
        <h2 className="text-[#ab9574] font-serif">New Arrivals</h2>
        <p className="text-[#ab9574] font-serif">Just in store</p>
      </div>

      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  return {
    props: { products, bannerData },
  };
};
