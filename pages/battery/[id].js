import React, { useEffect } from "react";
import { client } from "@/lib/client";
import { Product, FooterBanner, HeroBanner } from "../../components";
import { useRouter } from "next/router";

export default function id({ products, bannerData }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {" "}
      <div className="products-heading">
        {" "}
        <h2>Best Selling Battery</h2>
        <p>{id}</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
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
