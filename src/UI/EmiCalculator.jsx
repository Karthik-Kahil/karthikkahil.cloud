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

function EmiCalculator() {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const el = ref.current;
    document.title = "Karthik Kahil • EMI Calculator";

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
          <Link
            to={"https://emicalc.karthikkahil.cloud/personal?type=personal"}
            target="_blank"
            role="link"
          >
            <HeaderSection>
              <h2 ref={ref}>EMI Calculator</h2>
            </HeaderSection>
          </Link>
          <ProjectTimeLine>
            <div>
              <h4>Timeline</h4>
              <p>June, 2023 - July, 2023</p>
            </div>
            <div>
              <h4>Tools utilized</h4>
              <GridTwo>
                <div>
                  <h4>Front-end:</h4>
                  <p>React Router</p>
                  <p>React Redux</p>
                  <p>React Icons</p>
                </div>
              </GridTwo>
            </div>
            <div>
              <h4>Role</h4>
              <p>Front-end Developer.</p>
            </div>
          </ProjectTimeLine>
          <Link
            to={"https://emicalc.karthikkahil.cloud/personal?type=personal"}
            target="_blank"
            role="link"
          >
            <ImageViewer src={"/assets/emi_calculator-safari-window.png"} />
          </Link>
          <OverView>
            <h2>Overview</h2>
            <p>
              I developed a custom EMI calculator for a banking loan agency
              using ReactJS. Collaborating closely with the client, I tailored
              the application to their specific requirements, incorporating
              features such as loan amount, interest rate, tenure, and
              customizable options. The user interface was designed for
              intuitive navigation, with real-time EMI calculations and
              interactive elements like dynamic charts. <br />
              <br />
              Throughout development, I maintained open communication with the
              client, ensuring alignment with their vision through iterative
              feedback. Rigorous testing ensured compatibility across devices
              and browsers. The deployed web app has proven to be a valuable
              asset for the agency, facilitating loan planning for both staff
              and clients. This project highlights my commitment to delivering
              tailored solutions that meet client needs effectively. <br />
              <br />
              <i>
                Please note that the screenshot shows an older version of the
                application. I&rsquo;ve added unique features customized for
                their website. However, I couldn&rsquo;t retrieve the React file
                due to a computer crash.
              </i>
            </p>
          </OverView>
        </div>
      </StyledDiv>
    </>
  );
}

export default EmiCalculator;
