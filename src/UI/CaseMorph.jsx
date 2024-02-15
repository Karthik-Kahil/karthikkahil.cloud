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
            <ImageViewer src={"/assets/casemorph-safari-window.png"} />
          </Link>
          <OverView>
            <h2>Overview</h2>
            <p>
              CaseMorph Pro stands as a powerful web application meticulously
              crafted with ReactJS, catering to user&apos;s diverse needs in
              text formatting and manipulation. It embodies a holistic solution,
              seamlessly integrating advanced editing functionalities,
              customizable features, and cross-platform compatibility. Driven by
              a commitment to speed and user-friendliness, it empowers users to
              effortlessly transform and refine text with precision and
              efficiency.
              <br /> <br /> Whether converting cases, refining whitespace, or
              implementing custom formatting rules, CaseMorph Pro offers a
              versatile toolkit to streamline text editing tasks. Its intuitive
              interface ensures accessibility for users of varying skill levels,
              while its robust performance guarantees swift execution, even with
              large volumes of text. In essence, CaseMorph Pro emerges as an
              indispensable ally for anyone seeking to enhance their text
              editing workflow with ease and efficacy.
            </p>
          </OverView>
        </div>
      </StyledDiv>
    </>
  );
}

export default CaseMorph;
