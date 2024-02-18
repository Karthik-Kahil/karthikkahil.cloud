import { Link } from "react-router-dom";
import styled from "styled-components";

const Description = styled.div`
  padding-left: 30rem;
  padding-right: 10rem;
  margin-top: 10rem !important;
  max-width: 1500px;
  margin: auto;

  & h2 {
    font-family: "acorn-regular", sans-serif;
    color: var(--color-header-color);
    font-size: 5rem;
    line-height: 6rem;
    text-align: left;
    margin-bottom: 3rem;
  }

  & p {
    font-size: 2rem;
    text-align: left;
    color: var(--color-header-color);
    margin-bottom: 10rem !important;
  }

  @media only screen and (max-width: 950px) {
    padding-left: 6rem;
    padding-right: 6rem;

    & h2 {
      font-size: 4rem;
      line-height: 5rem;
    }
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10rem;
  grid-row-gap: 10rem;
  padding: 10rem;
  background-color: var(--color-nav);
  border-radius: 50px;
  margin-top: 10rem;
  max-width: 1350px;
  margin: auto;

  & div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & h4 {
    font-size: 4rem;
    color: var(--color-nav-text);
    opacity: 0.6 !important;
  }

  & h6 {
    font-family: "acorn-regular", sans-serif;
    font-size: 3rem;
    color: var(--color-header-color);
  }

  & p {
    font-size: 2rem;
    line-height: 3rem;
    color: var(--grid-section-text);
  }

  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    padding: 5rem;
  }
`;

const ImageViewer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-column-gap: 1.5rem;
  max-width: 1350px;
  margin: 0 auto;

  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1.5rem;
    margin-left: 3rem;
    margin-right: 3rem;

    & div {
      background-size: cover;
      background-position: center;
    }
  }
`;

const ImageOne = styled.div`
  width: 100%;
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://images.pexels.com/photos/6667282/pexels-photo-6667282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  border-radius: 15px;
`;

const ImageTwo = styled.div`
  width: 100%;
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://images.pexels.com/photos/19729129/pexels-photo-19729129/free-photo-of-a-bus-is-parked-in-a-garage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  border-radius: 15px;
`;

function AboutGridSection() {
  return (
    <section>
      <Description>
        <h2>Let&rsquo;s Collaborate on Exciting Projects and Technologies!</h2>
        <p>
          Let&rsquo;s team up if you&rsquo;re working on innovative projects, AI
          initiatives, or any other cutting-edge technologies. I&rsquo;m eager
          to collaborate and bring my expertise to the table. Reach out, and
          let&rsquo;s discuss how we can work together to make a difference!
        </p>
      </Description>

      <GridSection>
        <div>
          <h4>01</h4>
          <h6>Identify Common Interests</h6>
          <p>
            Let&rsquo;s start by discussing our shared interests and goals.
            Whether it&rsquo;s innovative projects, AI initiatives, or emerging
            technologies, pinpointing our common ground is essential.
          </p>
        </div>
        <div>
          <h4>02</h4>
          <h6>Explore Collaboration Opportunities</h6>
          <p>
            Once we&rsquo;ve identified common interests, let&rsquo;s explore
            potential collaboration opportunities. This could involve
            brainstorming project ideas, assessing our strengths and expertise,
            and determining how we can complement each other.
          </p>
        </div>
        <div>
          <h4>03</h4>
          <h6>Define Roles and Responsibilities</h6>
          <p>
            With collaboration opportunities in mind, let&rsquo;s define clear
            roles and responsibilities for each team member. This ensures that
            everyone knows their contributions and can work efficiently towards
            our shared goals.
          </p>
        </div>
        <div>
          <h4>04</h4>
          <h6>Establish Communication Channels</h6>
          <p>
            Effective communication is key to successful collaboration.
            Let&rsquo;s establish communication channels, whether it&rsquo;s
            through email, messaging platforms, or regular meetings, to stay
            connected and informed throughout the collaboration process.
          </p>
        </div>
      </GridSection>
      <Description>
        <p>
          I currently work as a front-end developer at{" "}
          <Link
            to={"https://www.tagww.com/"}
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            Tag India
          </Link>{" "}
          with three years of experience. My tasks involve creating emailers,
          digital banners, and web projects using ReactJS and GSAP. Previously,
          I was a digital designer at{" "}
          <Link
            to={"https://www.madrasglobal.com/"}
            target="_blank"
            style={{ textDecoration: "underline" }}
          >
            2adpro
          </Link>
          , where I made HTML banners and developed scripts for InDesign.
          I&apos;ve also freelanced on projects like Qwickbook, a doctor
          appointment booking app, where I handled full-stack development solo.
          Additionally, I&apos;ve built my own apps, including TinyTweak, an
          image conversion tool & much more.
        </p>
      </Description>
      <ImageViewer>
        <ImageOne></ImageOne>
        <ImageTwo></ImageTwo>
      </ImageViewer>
    </section>
  );
}

export default AboutGridSection;
