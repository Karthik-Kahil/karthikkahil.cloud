import styled from "styled-components";
import GridSectionBox from "../../UI/GridSectionBox";
import HeaderSection from "../../UI/HeaderSection";
import TwoColumnGrid from "../../UI/TwoColumnGrid";

const Section = styled.section`
  max-width: 1500px;
  margin: auto;
`;

function InProgress() {
  return (
    <>
      <HeaderSection pad_bottom={"8rem"}>
        <h2>In Progress.</h2>
        <p>
          Work in various states of design and development, from side projects,
          to in-flight product design and development.
        </p>
      </HeaderSection>
      <Section>
        <TwoColumnGrid>
          <GridSectionBox
            bgColor={"var(--grid-box-5)"}
            to={"/projects/qwickbook"}
          >
            <p>Advanced Doctor Appointment Booking Web App</p>
            <h4>QwickBook</h4>
            <figure>
              <img
                src="./assets/Safari (Catalina) - Dark.png"
                alt="TinyTweak"
              />
            </figure>
          </GridSectionBox>
          <GridSectionBox
            bgColor={"var(--grid-box-6)"}
            to={"/projects/chatbox"}
          >
            <p>Live Chat</p>
            <h4>ChatBox</h4>
            <figure>
              <img src="./assets/chat-safari-application.png" alt="TinyTweak" />
            </figure>
          </GridSectionBox>
        </TwoColumnGrid>
      </Section>
    </>
  );
}

export default InProgress;
