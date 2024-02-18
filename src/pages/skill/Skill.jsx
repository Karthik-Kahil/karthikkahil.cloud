import styled from "styled-components";
import HeaderSection from "../../UI/HeaderSection";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import SkillList from "../../UI/SkillList";

const StyledDiv = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20rem 15% 5rem 15%;

  & div {
    width: 100%;
    max-width: 1500px;
    margin: auto;
  }

  @media only screen and (max-width: 950px) {
    padding: 20rem 5% 5rem 5%;
  }
`;

const SkillSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5rem !important;
`;

function Skill() {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    document.title = "Karthik Kahil • Skill";

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
    <StyledDiv>
      <HeaderSection>
        <h2 ref={ref}>Skill.</h2>
        <p>
          I&rsquo;m skilled in the latest web tech like JavaScript, React.js,
          Node.js, and MongoDB.
        </p>
      </HeaderSection>
      <SkillSet>
        <SkillList color={"#02594C"}>
          <div>
            <h4>HTML & CSS</h4>
            <p>
              I have extensive experience in the latest HTML and CSS
              technologies, including grid, flexbox, CSS variables, and
              responsive design techniques.
            </p>
          </div>
          <figure>
            <img src="./assets/html-5.png" alt="" />
          </figure>
        </SkillList>
        <SkillList color={"#4A2A80"}>
          <div>
            <h4>ReactJS</h4>
            <p>
              I have good expertise in ReactJS, utilizing features like React
              Query, React Redux, and more.
            </p>
          </div>
          <figure>
            <img src="./assets/react.png" alt="" />
          </figure>
        </SkillList>
        <SkillList color={"#FFF67E"}>
          <div>
            <h4>NodeJS</h4>
            <p>
              I possess an intermediate skill level in Node.js and have utilized
              it in numerous projects, including my most recent ones.
            </p>
          </div>
          <figure>
            <img src="./assets/nodejs.png" alt="" />
          </figure>
        </SkillList>
        <SkillList color={"#74E291"}>
          <div>
            <h4>MongoDB</h4>
            <p>
              I possess an intermediate level of proficiency in MongoDB database
              management, which I have utilized in my recent projects.
              Additionally, I am actively deepening my understanding of advanced
              technologies.
            </p>
          </div>
          <figure>
            <img src="./assets/mongodb.png" alt="" />
          </figure>
        </SkillList>
        <SkillList color={"#C6A969"}>
          <div>
            <h4>Others.</h4>
            <p>
              I possess advanced skills in digital emailers and banners,
              including DCM, DCS, and DCO. Additionally, I have extensive
              experience in ReactJS and am actively involved in projects within
              my current organization. Furthermore, I have a solid understanding
              of the latest web technologies, server-based configurations, and
              computer hardware. I am also engaged in learning about the latest
              advancements in AI technologies and data science.
            </p>
          </div>
          <figure>
            <img src="./assets/python.png" alt="" />
          </figure>
        </SkillList>
      </SkillSet>
    </StyledDiv>
  );
}

export default Skill;
