import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { SiYoutubemusic } from "react-icons/si";

import HeaderSection from "../../UI/HeaderSection";
import fetchData from "../../Util/weatherApi";
import AboutGridSection from "./AboutGridSection";

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
    padding: 20rem 8% 5rem 8%;
  }
`;

const PersonalImage = styled.div`
  width: 100px;
  height: 300px;
  border-radius: 200px 200px 0 0;
  background-size: cover;
  background-image: url("/assets/304cf4a5-a39a-4865-a5fc-117056ef2f84.jpeg");
  background-repeat: no-repeat;
`;

const PersonalImageDescription = styled.div`
  display: grid;
  grid-template-columns: 0.7fr auto;
  grid-column-gap: 1rem;
  padding: 1.8rem 3rem;
  background-color: var(--color-nav-text);
  align-items: center;

  & svg {
    font-size: 4rem;
    color: var(--color-nav);
  }

  & div > h5 {
    font-size: 1.4rem;
    color: var(--color-nav);
  }

  & div > p {
    font-size: 1.6rem;
    color: var(--color-nav);
  }
`;

const GridTwoSection = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 8rem;
  margin-top: 7rem !important;

  & h2 {
    font-family: "acorn-regular", sans-serif;
    color: var(--color-header-color);
    font-size: 4rem;
    line-height: 5rem;
    text-align: left;
    margin-bottom: 3rem;
  }

  & p {
    font-size: 2rem;
    text-align: left;
    color: var(--color-header-color);
  }

  @media only screen and (max-width: 950px) {
    grid-template-columns: auto;
    grid-row-gap: 8rem;
  }
`;

function About() {
  const ref = useRef(null);
  const location = useLocation();
  const [weatherData, setWeatherData] = useState([]);
  console.log(weatherData);

  useEffect(() => {
    fetchData()
      .then((data) => setWeatherData(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    document.title = "Karthik Kahil • About";

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
      <StyledDiv>
        <div>
          <HeaderSection>
            <h2 ref={ref}>I&apos;m Karthik.</h2>
          </HeaderSection>
          <GridTwoSection>
            <div>
              <PersonalImage />
              <PersonalImageDescription>
                <SiYoutubemusic />
                <div>
                  <h5>On repeat</h5>
                  <p>
                    <Link
                      to={
                        "https://music.youtube.com/playlist?list=OLAK5uy_lqklJSKcP8vrv2Ftjrf6v6UZ3SLJZEOrQ"
                      }
                      target="_blank"
                    >
                      LEO - Ordinary Person
                    </Link>
                  </p>
                </div>
              </PersonalImageDescription>
            </div>
            <div>
              <h2>
                I&rsquo;m a MERN Developer based in{" "}
                {weatherData?.weather && weatherData.weather.length > 0
                  ? weatherData.weather[0].main
                  : ""}{" "}
                Chennai, Tamil Nadu, where the temperature is a{" "}
                {Math.floor(weatherData?.main?.temp) > 30
                  ? "warm"
                  : "comfortable"}{" "}
                {Math.floor(weatherData?.main?.temp) || 0}°C.{" "}
                {Math.floor(weatherData?.main?.temp) > 30 ? "🥵" : "😎"}
              </h2>
              <p>
                Throughout my 5-year career, I&rsquo;ve engaged in various
                aspects of digital platform development, covering front-end
                development, email marketing, and freelancing on numerous
                full-stack projects. I take pride in my versatile skill set and
                experience.
              </p>
            </div>
          </GridTwoSection>
        </div>
      </StyledDiv>
      <AboutGridSection />
    </>
  );
}

export default About;
