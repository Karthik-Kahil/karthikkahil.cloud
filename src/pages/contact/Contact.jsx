import styled from "styled-components";
import HeaderSection from "../../UI/HeaderSection";
import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import GradientColor from "../../UI/GradientColor";
import ContactList from "../../UI/ContactList";

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 5rem !important;
`;

function Contact() {
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
    <>
      <GradientColor />
      <StyledDiv>
        <HeaderSection>
          <h2 ref={ref}>Contact.</h2>
        </HeaderSection>
        <SkillSet>
          <Link to={"mailto:karthikox2121@gmail.com"}>
            <ContactList color={"#BFEA7C"}>
              <div>
                <h4>G-Mail</h4>
              </div>
              <figure>
                <img src="./assets/google-gmail.png" alt="" />
              </figure>
            </ContactList>
          </Link>
          <Link
            to={"https://www.linkedin.com/in/karthik-r-10348119a/"}
            target="_blank"
          >
            <ContactList color={"#B5C0D0"}>
              <div>
                <h4>LinkedIn</h4>
              </div>
              <figure>
                <img src="./assets/linkedin.png" alt="" />
              </figure>
            </ContactList>
          </Link>
        </SkillSet>
      </StyledDiv>
    </>
  );
}

export default Contact;
