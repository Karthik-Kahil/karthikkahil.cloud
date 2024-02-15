/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const List = styled.li`
  display: flex;

  & a {
    border-radius: 50px;
    padding: 0.8rem 2rem;
    color: var(--color-nav-text);
    user-select: none;
  }

  .active {
    background-color: var(--color-white);
  }
`;

function NavList({ children, to }) {
  return (
    <List>
      <NavLink to={to}>{children}</NavLink>
    </List>
  );
}

export default NavList;
