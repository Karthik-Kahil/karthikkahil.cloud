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
  padding: 13% 5% 10% 5%;
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

function ChatBox() {
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
        <HeaderSection>
          <h2 ref={ref}>ChatBox</h2>
        </HeaderSection>

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
                <p>Socket IO</p>
              </div>
            </GridTwo>
          </div>
          <div>
            <h4>Role</h4>
            <p>Full-stack Developer.</p>
          </div>
        </ProjectTimeLine>

        <ImageViewer src={"/assets/chat-safari-application.png"} />

        <OverView>
          <h2>Overview</h2>
          <p>
            I&rsquo;m currently immersed in the development of Chatbox, a live
            chat application powered by Node.js, MongoDB, and Socket.IO. With
            React.js driving the frontend, the focus is on creating a seamless
            user experience. My current priority is researching Socket.IO to
            ensure the real-time communication backbone operates smoothly. Once
            this phase is complete, development will swiftly progress. <br />
            <br />
            Chatbox is envisioned to offer users a dynamic platform for instant
            messaging, enabling efficient communication and fostering
            connectivity. By harnessing these technologies, I aim to deliver a
            robust, user-friendly application that caters to the demands of
            modern-day communication. Stay tuned as I work towards bringing
            Chatbox to life!
          </p>
        </OverView>
      </StyledDiv>
    </>
  );
}

export default ChatBox;
