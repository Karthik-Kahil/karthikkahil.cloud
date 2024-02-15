/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  padding: 0;
`;

const StyledDiv = styled.div`
  & img {
    margin-bottom: -10px;
  }
`;

function VideoViewer({ path }) {
  return (
    <StyledDiv>
      <Link to={"https://tinytweak.karthikkahil.cloud/"} target="_blank">
        <img src="/assets/safari-frame-browser.webp" alt="" />
        <StyledVideo loop muted autoPlay={true} onFocus>
          <source src={path} />
        </StyledVideo>
      </Link>
    </StyledDiv>
  );
}

export default VideoViewer;
