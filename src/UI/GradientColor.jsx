import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const GradientColorStyle = styled.div`
  position: absolute;
  top: 0;
  width: 100%;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(
      to bottom,
      rgba(240, 240, 240, 0),
      var(--color-primary)
    );
  }
`;

const b1 =
  "linear-gradient(217deg, #DAE7C0, rgba(173, 255, 47, 0.2) 70.71%), linear-gradient(127deg, #EAD3C9, rgba(173, 216, 230, 0.2) 70.71%), linear-gradient(336deg, #CFECBA, rgba(0, 128, 128, 0.2) 70.71%)";

const b2 =
  "linear-gradient(17deg, #F3EEE4, rgba(152, 251, 152, 0.2) 70.71%), linear-gradient(200deg, #E7B89C, rgba(173, 216, 230, 0.2) 70.71%), linear-gradient(336deg, #CFECBA, rgba(0, 128, 128, 0.2) 70.71%)";

function GradientColor() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    gsap.fromTo(
      el,
      {
        width: "100%",
        height: "110vh",
        background: b1,
        zIndex: -1,
        opacity: 0.6,
      },
      {
        ease: "none",
        duration: 10,
        background: b2,
        repeat: -1,
        yoyo: true,
        zIndex: -1,
        opacity: 0.6,
      }
    );
  }, []);

  return <GradientColorStyle ref={ref}></GradientColorStyle>;
}

export default GradientColor;
