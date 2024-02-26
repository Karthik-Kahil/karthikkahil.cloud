import styled from "styled-components";
import GradientColor from "./GradientColor";
import HeaderSection from "./HeaderSection";
import { Link, useLocation } from "react-router-dom";
import ProjectTimeLine from "./ProjectTimeLine";
import { useEffect, useRef } from "react";
import OverView from "./OverView";
import gsap from "gsap";
import GridTwo from "./GridTwo";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20rem 5% 10rem 5%;
  width: 100%;

  & div {
    max-width: 1500px;
    margin: auto;
  }

  @media only screen and (max-width: 950px) {
    & div {
      max-width: 1500px;
      margin: 0;
    }
  }
`;

const ImageViewer = styled.img`
  width: 100%;
`;

function CaseMorph() {
  const ref = useRef(null);
  const location = useLocation();
  const url = "https://casemorph.karthikkahil.cloud/";

  useEffect(() => {
    const el = ref.current;
    document.title = "Karthik Kahil • CaseMorph Pro";

    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    gsap.fromTo(
      el,
      { lineHeight: "0.8", opacity: 0.9 },
      { lineHeight: "1", opacity: 1 }
    );
  }, [location]);

  return (
    <>
      <GradientColor />
      <StyledDiv>
        <div>
          <Link to={url} target="_blank" role="link">
            <HeaderSection>
              <h2 ref={ref}>CaseMorph Pro</h2>
            </HeaderSection>
          </Link>
          <ProjectTimeLine>
            <div>
              <h4>Timeline</h4>
              <p>October, 2023 - November, 2023</p>
            </div>
            <div>
              <h4>Tools utilized</h4>
              <GridTwo>
                <div>
                  <p>React Router</p>
                  <p>React Redux</p>
                </div>
              </GridTwo>
            </div>
            <div>
              <h4>Role</h4>
              <p>Front-end Developer.</p>
            </div>
          </ProjectTimeLine>
          <Link to={url} target="_blank" role="link">
            <ImageViewer
              src={
                "https://apps.karthikkahil.cloud/img/casemorph-safari-window.png"
              }
            />
          </Link>
          <OverView>
            <h2>Overview</h2>
            <p>
              CaseMorph Pro is a powerful web app built with ReactJS, designed
              for text formatting and manipulation. It offers advanced editing
              features, customizable options, and works seamlessly across
              different platforms. With a focus on speed and user-friendliness,
              it makes text transformation effortless. <br /> <br />
              Whether you&#39;re converting cases, adjusting whitespace, or
              applying custom formatting, CaseMorph Pro has you covered. Its
              simple interface caters to users of all levels, ensuring smooth
              performance even with large amounts of text. Overall, it&#39;s a
              must-have tool for anyone looking to improve their text editing
              workflow with ease.
            </p>
          </OverView>
        </div>
      </StyledDiv>
    </>
  );
}

export default CaseMorph;
