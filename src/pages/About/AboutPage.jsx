import React from "react";
import "./AboutPage.css";
import About from "../../components/About/About";

function AboutPage() {
  return (
    <div>
      <About
        Title={"ABOUT"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae sem ac nunc tincidunt ullamcorper vitae sit amet tortor. Integer quam velit."
        }
      />
    </div>
  );
}

export default AboutPage;
