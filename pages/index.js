import React from "react";
import { client } from "../lib/client";
import { Merchandise, FooterBanner, MainBanner } from "../components";

const Home = ({ merchandises, bannerData }) => {
  return (
    <>
      <MainBanner mainBanner={bannerData.length && bannerData[0]} />
      <div className="merchandise-heading">
        <h2>Best Selling Items</h2>
        <p>Lovely Pillows</p>
      </div>
      <div className="merchandise-container">
        {merchandises?.map(merchandise => merchandise.name)}
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "merchandise"]';
  const merchandises = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { merchandises, bannerData },
  };
};
export default Home;
