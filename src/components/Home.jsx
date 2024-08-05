import React from "react";
import Animation from "./Animation";
import Carousal from "./dashboard/Carousal";
import Skate from "./dashboard/Skate";
import NewArrival from "./dashboard/NewArrival";
import BestOffer from "./dashboard/BestOffer";
import Outlets from "./dashboard/Outlets";
import Blog from "./dashboard/Blog";

const Home = () => {
  return (
    <div>
      <Carousal />
      <Blog />
      <Animation />
      <NewArrival />
      <Skate />
      <BestOffer />
      <Outlets />
    </div>
  );
};

export default Home;
