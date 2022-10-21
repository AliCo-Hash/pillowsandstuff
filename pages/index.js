import React from "react";

const Home = () => {
  return (
    <>
      MainBanner
      <div className="merchandise-heading">
        <h2>Best Selling Items</h2>
        <p>Lovely Pillows</p>
      </div>
      <div className="merchandise-container">
        {["Merchandise 1", "Merchandise 2"].map(merchandise => merchandise)}
      </div>
      Footer
    </>
  );
};

export default Home;
