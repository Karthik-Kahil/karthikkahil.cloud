import styled from "styled-components";
import NavList from "./NavList";

const Box = styled.span`
  border: 1.8px solid var(--color-nav-text-trans);
  padding: 0.1rem 0.8rem;
  border-radius: 5px;
  max-width: 1100px;
  margin: auto;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 2.5rem;
  width: 100%;
  position: fixed;
  z-index: 999;

  & ul {
    font-size: 1.6rem;
    display: flex;
    gap: 1.5rem;
    padding: 0.8rem 1rem;
    background: rgba(231, 241, 230, 0.8);
    box-shadow: 0 8px 32px 0 rgba(7, 7, 7, 0.083);
    backdrop-filter: blur(16.5px);
    -webkit-backdrop-filter: blur(16.5px);
    border-radius: 50px;
  }
`;

function Navigation() {
  return (
    <Nav>
      <ul>
        <NavList to={"/"}>
          Work <Box>/</Box>
        </NavList>
        <NavList to={"/about"}>About</NavList>
        <NavList to={"/skill"}>Skill</NavList>
        <NavList to={"/contact"}>Contact</NavList>
      </ul>
    </Nav>
  );
}

export default Navigation;
