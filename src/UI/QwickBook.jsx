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
  padding: 20rem 5% 10% 5%;
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

function QwickBook() {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const el = ref.current;
    document.title = "Karthik Kahil • QwickBook";

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
        <Link to={"https://qwickbook.com/"} target="_blank" role="link">
          <HeaderSection>
            <h2 ref={ref}>QwickBook</h2>
          </HeaderSection>
        </Link>
        <ProjectTimeLine>
          <div>
            <h4>Timeline</h4>
            <p>2024 - Present</p>
          </div>
          <div>
            <h4>Tools utilized</h4>
            <GridTwo>
              <div>
                <h4>Front-end:</h4>
                <p>React Router</p>
                <p>React Redux</p>
                <p>React Forms</p>
                <p>React Query</p>
              </div>
              <div>
                <h4>Back-end:</h4>
                <p>NodeJS</p>
                <p>ExpressJS</p>
                <p>MongoDB</p>
                <p>Mongoose</p>
              </div>
            </GridTwo>
          </div>
          <div>
            <h4>Role</h4>
            <p>Full-stack Developer.</p>
          </div>
        </ProjectTimeLine>
        <Link to={"https://qwickbook.com/"} target="_blank" role="link">
          <ImageViewer
            src={
              "https://apps.karthikkahil.cloud/img/Safari (Catalina) - Dark 2.35.37 AM.jpg"
            }
          />
        </Link>
        <OverView>
          <h2>Overview</h2>
          <p>
            I am developing an advanced hospital doctor booking web application
            catering to the needs of the MGM chief doctor. The application will
            utilize React.js for the front-end and Node.js with MongoDB for the
            backend. Our primary objective is to enable doctors to subscribe on
            a monthly basis and directly receive appointments from patients,
            without any intermediary commission. This project is designed to
            operate at a large scale and aims to compete with existing platforms
            like{" "}
            <Link to={"https://www.practo.com/"} target="_blank">
              Practo
            </Link>
            .
            <br />
            <br />
            In this application, doctors will have the option to subscribe on a
            monthly basis, granting them access to the platform&#39;s features
            and appointment management system. Patients will be able to book
            appointments directly with their chosen doctors through the
            application, streamlining the process and providing greater
            convenience.
            <br />
            <br />
            To ensure competitiveness in the market, we&#39;re focusing on
            providing a seamless user experience, robust security measures, and
            efficient appointment scheduling functionality. Our goal is to
            create a platform that not only meets but exceeds the expectations
            of both doctors and patients.
            <br />
            <br />
            In terms of scalability, we&#39;re designing the backend
            infrastructure to handle a large volume of users and data
            effectively. This includes implementing efficient database schemas,
            optimizing API endpoints for performance, and utilizing cloud-based
            services for scalability and reliability.
            <br />
            <br />
            Additionally, we&#39;re committed to maintaining a competitive edge
            by continuously improving the application based on user feedback and
            market trends. Regular updates and feature enhancements will be
            rolled out to ensure that our platform remains innovative and
            valuable to both doctors and patients.
            <br />
            <br />
            Overall, our objective is to establish our application as a leading
            choice for doctor booking services, offering a compelling
            alternative to existing platforms in the market. Through a
            combination of advanced technology, user-centric design, and
            strategic marketing efforts, we aim to position ourselves as a
            formidable competitor in the healthcare technology industry.
          </p>
        </OverView>
      </StyledDiv>
    </>
  );
}

export default QwickBook;
