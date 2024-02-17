import styled from "styled-components";
import HeaderSection from "../../UI/HeaderSection";
import TwoColumnGrid from "../../UI/TwoColumnGrid";
import GridSectionBox from "../../UI/GridSectionBox";
import InProgress from "./InProgress";
import GradientColor from "../../UI/GradientColor";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

const StyledDiv = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20rem 5% 10rem 5%;
  width: 100%;
`;

const Section = styled.section`
  max-width: 1500px;
  margin: auto;
`;

function Work() {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.title = "Karthik Kahil • MERN Developer";

    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });

    const el = ref.current;

    gsap.fromTo(
      el,
      { lineHeight: "0.8", opacity: 0.9 },
      { lineHeight: "1", opacity: 1 }
    );
  }, [location]);

  return (
    <>
      <GradientColor />
      <StyledDiv id="content-pane">
        <HeaderSection>
          <h2 ref={ref}>Hello, I&rsquo;m Karthik Kahil.</h2>
          <h2>A MERN Developer.</h2>
          <p>
            I&apos;m dedicated to creating interactive, efficient, and
            user-focused web applications.
          </p>
        </HeaderSection>
      </StyledDiv>
      <Section>
        <TwoColumnGrid leftGrid={true}>
          <GridSectionBox
            bgColor={"var(--grid-box-1)"}
            to={"/projects/tinytweak"}
          >
            <p>Image Compression tool</p>
            <h4>TinyTweak</h4>
            <figure>
              <img
                src="./assets/tinyTweaks-safari-window.png"
                alt="TinyTweak"
              />
            </figure>
          </GridSectionBox>
          <GridSectionBox
            bgColor={"var(--grid-box-2)"}
            to={"/projects/casemorphpro"}
          >
            <p>Advance text formating tool</p>
            <h4>Casemorph Pro</h4>
            <figure>
              <img src="./assets/casemorph-safari-window.png" alt="TinyTweak" />
            </figure>
          </GridSectionBox>
        </TwoColumnGrid>
        <TwoColumnGrid>
          <GridSectionBox
            bgColor={"var(--grid-box-3)"}
            to={"/projects/emicalculator"}
          >
            <p>Simple</p>
            <h4>EMI Calculator</h4>
            <figure>
              <img
                src="./assets/emi_calculator-safari-window.png"
                alt="TinyTweak"
              />
            </figure>
          </GridSectionBox>
          <GridSectionBox bgColor={"var(--grid-box-4)"}>
            <p>HELP SCOUT</p>
            <h4>Articles</h4>
            <figure>
              <img
                src="./assets/TinyTweak - Compress WebP, PNG and JPEG images intelligently_ - tinytweak.karthikkahil.cloud.jpg"
                alt="TinyTweak"
              />
            </figure>
          </GridSectionBox>
        </TwoColumnGrid>
      </Section>
      <InProgress />
    </>
  );
}

export default Work;
