import { Link } from "react-router-dom";
import styled from "styled-components";
import FooterCopyRight from "./FooterCopyRight";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10rem 10%;
  max-width: 1200px;
  margin: auto;

  & div > h5 {
    font-size: 1.8rem;
    color: var(--color-header-color);
    margin-bottom: 2rem;
  }

  & div > ul > li {
    font-size: 1.9rem;
    line-height: 5rem;
    color: var(--grid-section-text);
  }

  @media only screen and (max-width: 950px) {
    grid-template-columns: 1fr;
    grid-row-gap: 5rem;
    text-align: center;
  }
`;

function Footer() {
  return (
    <>
      <StyledFooter>
        <div>
          <h5>Elsewhere</h5>
          <ul>
            <li>
              <Link to={"https://github.com/Karthik-Kahil"} target="_blank">
                Github
              </Link>
            </li>
            <li>
              <Link
                to={"https://www.linkedin.com/in/karthik-r-10348119a/"}
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link>CV</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul>
            <li>
              <Link to={"mailto:karthikox2121@gmail.com"}>Email</Link>
            </li>
          </ul>
        </div>
        <div>
          <h5>Support </h5>
          <ul>
            <li>
              <Link to={"https://ko-fi.com/karthikkahil"} target="_blank">
                Ko-fi
              </Link>
            </li>
          </ul>
        </div>
      </StyledFooter>
      <FooterCopyRight />
    </>
  );
}

export default Footer;
