import React from "react";
import MainLayout from "./MainLayout";
import Newsletter from "../components/Newsletter";
import Brand from "../components/Brand";
import Download from "../components/Download";

const Home = () => {
  return (
    <MainLayout>
      <Brand />
      <Download />
      <Newsletter />
    </MainLayout>
  );
};

export default Home;
