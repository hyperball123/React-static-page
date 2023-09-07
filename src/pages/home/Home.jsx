import React from "react";
import Navbar from "../../components/navbar/Navbar";
import HomeComponent from "../../components/home/homeComponent";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div>
      <Navbar title="Landing Page" />
      <HomeComponent
        showButton={true}
        p="We are"
        h1="STUDIO"
        heroDescription="Digital marketing strategies enhance revenue growth expectancy
            nearly 3 times over."
      />
    </div>
  );
}

export default Home;
