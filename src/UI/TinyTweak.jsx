import styled from "styled-components";
import GradientColor from "./GradientColor";
import HeaderSection from "./HeaderSection";
import { Link, useLocation } from "react-router-dom";
import ProjectTimeLine from "./ProjectTimeLine";
import { useEffect, useRef } from "react";
import OverView from "./OverView";
import gsap from "gsap";
import VideoViewer from "./VideoViewer";
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
`;

const ImageViewer = styled.img`
  width: 100%;
`;

function TinyTweak() {
  const ref = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const el = ref.current;
    document.title = "Karthik Kahil • TinyTweak";

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
            to={"https://tinytweak.karthikkahil.cloud/"}
            target="_blank"
            role="link"
          >
            <HeaderSection>
              <h2 ref={ref}>TinyTweak</h2>
            </HeaderSection>
          </Link>
          <ProjectTimeLine>
            <div>
              <h4>Timeline</h4>
              <p>December, 2023 - January, 2024</p>
            </div>
            <div>
              <h4>Tools utilized</h4>
              <GridTwo>
                <div>
                  <h4>Front-end:</h4>
                  <p>React Router</p>
                  <p>React Redux</p>
                  <p>React Icons</p>
                  <p>React Forms</p>
                  <p>React Query</p>
                  <p>GSAP Library</p>
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
          <Link
            to={"https://tinytweak.karthikkahil.cloud/"}
            target="_blank"
            role="link"
          >
            <ImageViewer src={"/assets/tinyTweaks-safari-window.png"} />
          </Link>
          <OverView>
            <h2>Overview</h2>
            <p>
              Compressing website images is pivotal for optimizing web
              performance and enhancing user experience. Large image files can
              significantly slow down page loading times, leading to user
              frustration and increased bounce rates. By compressing images,
              websites can reduce file sizes, resulting in faster load times and
              smoother browsing experiences for visitors.
              <br />
              <br />
              TinyTweaks provides a valuable solution for image compression with
              its advanced algorithm. It effectively reduces image file sizes by
              up to 80% without compromising visual quality. This compression
              process ensures that websites maintain high-quality visuals while
              benefiting from faster load times and reduced bandwidth
              consumption.
              <br />
              <br />
              The benefits of using TinyTweaks extend beyond improved user
              experience. Reduced file sizes also contribute to better SEO
              performance, as faster-loading pages tend to rank higher in search
              engine results. Additionally, smaller image files help websites
              save on storage costs and bandwidth usage, making them more
              efficient and cost-effective in the long run. <br />
              <br />
              Overall, TinyTweaks plays a crucial role in optimizing website
              performance by enabling efficient image compression, ultimately
              leading to enhanced user satisfaction, improved SEO, and cost
              savings for website owners.
            </p>
          </OverView>
          <VideoViewer path="/assets/8665a9a9-da30-478f-abd1-89a18bb39e94.mp4" />
        </div>
      </StyledDiv>
    </>
  );
}

export default TinyTweak;
