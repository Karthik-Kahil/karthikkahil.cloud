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

function DiTimeSheet() {
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
            to={"https://timesheet.karthikkahil.cloud/"}
            target="_blank"
            role="link"
          >
            <HeaderSection>
              <h2 ref={ref}>Timesheet</h2>
            </HeaderSection>
          </Link>
          <ProjectTimeLine>
            <div>
              <h4>Timeline</h4>
              <p>August, 2023</p>
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
            to={"https://timesheet.karthikkahil.cloud/"}
            target="_blank"
            role="link"
          >
            <ImageViewer src={"/assets/di-timesheet-safari-window.png"} />
          </Link>
          <OverView>
            <h2>Overview</h2>
            <p>
              The timesheet web application I&rsquo;ve developed revolutionizes
              our office&rsquo;s time management and downtime tracking
              processes. Its automated downtime capture eliminates manual input,
              ensuring precise data recording and saving valuable time. With
              advanced calculation features, it accurately measures downtime
              durations, providing insights into productivity levels and
              enabling proactive measures to minimize disruptions. <br />
              <br />
              Additionally, the application simplifies timesheet generation by
              seamlessly compiling recorded data into Excel sheets. This
              streamlined process not only reduces administrative burdens but
              also ensures consistency and standardization in reporting. By
              leveraging local storage for historical data, the application
              enables trend analysis and strategic decision-making to optimize
              workflows effectively.
              <br />
              <br />
              Overall, our team benefits from a user-friendly interface,
              automation capabilities, and robust features, making this
              timesheet application an indispensable asset for maximizing
              productivity and efficiency in our daily operations.
            </p>
          </OverView>
        </div>
      </StyledDiv>
    </>
  );
}

export default DiTimeSheet;
