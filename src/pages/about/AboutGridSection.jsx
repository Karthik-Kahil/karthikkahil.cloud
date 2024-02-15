import styled from "styled-components";

const Description = styled.div`
  padding-left: 30rem;
  padding-right: 10rem;
  margin-top: 10rem !important;

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
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10rem;
  grid-row-gap: 10rem;
  padding: 10rem;
  background-color: var(--color-nav);
  border-radius: 50px;
  margin-top: 10rem !important;
  margin-left: 5rem;
  margin-right: 5rem;

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
`;

const ImageViewer = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.5fr;
  grid-column-gap: 1.5rem;
  margin-left: 5rem;
  margin-right: 5rem;
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
        <h2>
          Let&lsquo;s collaborate if you&lsquo;re committed to sustainability,
          education, equality, or carbon neutrality.
        </h2>
        <p>
          I believe we should leave this Earth as good as or better than we
          found it for future generations; my goal is to contribute to those
          ideals in whatever way I can. If you feel the same, I&lsquo;d love to
          talk.
        </p>
      </Description>

      <GridSection>
        <div>
          <h4>01</h4>
          <h6>Make it</h6>
          <p>
            I sketch wireframes and make prototypes. Talking through tactile
            designs existing in the browser is worth its weight. Design tools
            only carry you so far; the rest should be realized with a link my
            team can rally around.
          </p>
        </div>
        <div>
          <h4>02</h4>
          <h6>Collaborate</h6>
          <p>
            I sketch wireframes and make prototypes. Talking through tactile
            designs existing in the browser is worth its weight. Design tools
            only carry you so far; the rest should be realized with a link my
            team can rally around.
          </p>
        </div>
        <div>
          <h4>03</h4>
          <h6>Accessible FTW</h6>
          <p>
            I sketch wireframes and make prototypes. Talking through tactile
            designs existing in the browser is worth its weight. Design tools
            only carry you so far; the rest should be realized with a link my
            team can rally around.
          </p>
        </div>
        <div>
          <h4>04</h4>
          <h6>Keep experimenting</h6>
          <p>
            I sketch wireframes and make prototypes. Talking through tactile
            designs existing in the browser is worth its weight. Design tools
            only carry you so far; the rest should be realized with a link my
            team can rally around.
          </p>
        </div>
      </GridSection>
      <Description>
        <p>
          Before I stepped into the world of product design, I was a web
          developer. One of my earliest jobs involved writing HTML emails, in a
          time before email linters. Lots of wishing, hoping, and finger
          crossing that your email arrived in a recipient&lsquo;s inbox in one
          piece. Coding emails forced me to understand how HTML and CSS play
          together, a skill set I&lsquo;ve carried and kept fresh in the years
          since. My side project work is just an excuse to satisfy my curiosity
          about new technologies and understand how the web is moving forward.
          Outside work, I enjoy good coffee near my home by the sea, listening
          to and playing music, exploring the world with my partner, and playing
          with my Labrottie pup, Louie.
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
