import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.nav`
  width: 100%;
  height: 70px;
  background-color:#FFFFFF;
  position: fixed;
  z-index: 2;
`;

export const Wrapper = styled.div<any>`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin: auto;
`;

export const Menu = styled.ul<any>`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;

  @media screen and (max-width: 960px) {
    background-color: #FFFFFF;
    position: absolute;
    top: 70px;
    left: ${({ open }) => open ? '0' : '-100%'};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled(Link)<any>`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: ${({ active }) => active === 'true' ? '#335EEA' : '#506690'};
  font-family: Roboto, "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #FFFFFF;
    background-color: #335EEA;
    transition: 0.5s all ease;

    div {
      svg {
        fill: #FFFFFF;
      }
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      fill: #506690;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    div {
      width: 30%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }
`;

export const Button = styled.button<any>`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: ${({ active }) => active === 'true' ? '#335EEA' : '#506690'};
  font-family: Roboto, "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: 900;
  cursor: pointer;
  transition: 0.5s all ease;

  &:hover {
    color: #FFFFFF;
    background-color: #335EEA;
    transition: 0.5s all ease;

    div {
      svg {
        fill: #FFFFFF;
      }
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      display: none;
      fill: #506690;
      margin-right: 0.5rem;
    }
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    div {
      width: 30%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }

  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;

      svg {
        display: flex;
      }
    }
  }
`;