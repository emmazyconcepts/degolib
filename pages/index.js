import Head from "next/head";
import Image from "next/image";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "@/lib/client";

export default function Home({ products, bannerData }) {
  return (
    <>
      <HeroBanner HeroBanner={bannerData.length && bannerData[0]} />

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
