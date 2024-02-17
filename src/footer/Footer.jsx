import { Link } from "react-router-dom";
import styled from "styled-components";
import FooterCopyRight from "./FooterCopyRight";

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10rem 10%;
  max-width: 1500px;
  margin: auto;

  & div > h5 {
    font-size: 1.7rem;
    color: var(--color-header-color);
    margin-bottom: 2rem;
  }

  & div > ul > li {
    font-size: 1.7rem;
    line-height: 5rem;
    color: var(--grid-section-text);
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
              <Link>Figma</Link>
            </li>
            <li>
              <Link>Github</Link>
            </li>
            <li>
              <Link>LinkedIn</Link>
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
              <Link>Email</Link>
            </li>
          </ul>
        </div>
      </StyledFooter>
      <FooterCopyRight />
    </>
  );
}

export default Footer;
