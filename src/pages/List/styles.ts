import styled, { css } from "styled-components";
import { ComicsPropsStyled, ListPropsStyled } from "./ListTypes";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #202020;
  min-height: 100vh;
  overflow: hidden;
`;

export const ArrowIcon = styled.div`
  position: absolute;
  width: 40px;
  height: 350px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  z-index: 2;
  transition: all ease 0.5s;

  svg {
    width: 50px;
    height: 50px;
    fill: ${({ theme }) => theme.colors.white};
  }

  ${({ className }) =>
    className === "arrow-left" &&
    `
    left: 0;
  `}

  ${({ className }) =>
    className === "arrow-right" &&
    `
    right: 0;
  `}
`;

export const Logo = styled.img`
  width: 200px;
`;

export const CharacterRow = styled.div<ListPropsStyled>`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
  margin-top: 80px;
  padding: 20px;
  transition: all ease 0.5s;

  ${({ inputState }) =>
    inputState?.length !== 0 &&
    css`
      ${ArrowIcon} {
        display: none;
      }
    `}

  :hover {
    ${ArrowIcon} {
      opacity: 1;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .selected {
    transform: translateY(-15px);
    border: 3px solid ${({ theme }) => theme.colors.red};
    box-shadow: -2px 2px 0px 2px ${({ theme }) => theme.colors.red};
    :hover {
      box-shadow: -2px 2px 0px 2px ${({ theme }) => theme.colors.red};
    }
  }

  ${(props) =>
    props.showModal === true &&
    css`
      opacity: 0.2;
    `}

  ${(props) =>
    props.showEmailModal === true &&
    css`
      opacity: 0.2;
    `}
`;

export const Comics = styled.div<ComicsPropsStyled>`
  width: 180px;
  border: 3px solid ${({ theme }) => theme.colors.white};
  border-radius: 0px 0px 20px 0px;
  background: ${({ theme }) => theme.colors.redVariant};
  cursor: pointer;
  transition: all ease 0.2s;

  :hover {
    box-shadow: -2px 2px 0px 2px ${({ theme }) => theme.colors.white};
    z-index: 1;
  }
`;

export const ComicsImage = styled.div`
  display: flex;

  img {
    width: 100%;
    height: 230px;
  }
`;

export const ComicsDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;

  strong {
    font-size: 18px;
  }

  p {
    font-size: 16px;
  }

  p,
  strong {
    color: ${({ theme }) => theme.colors.textWhite};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    cursor: pointer;
  }
`;

export const ComicsDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
  cursor: pointer;

  svg {
    width: 32px;
    transition: 0.2s;
    fill: ${({ theme }) => theme.colors.textWhite};
  }

  svg:hover {
    opacity: 0.8;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const Input = styled.input`
  width: 400px;
  height: 35px;
  border-radius: 20px;
  text-indent: 20px;
  border: 1px transparent;
  box-shadow: 0px 0px 6px 1px #d0d1d5;
  font-size: 16px;
`;

export const FooterButton = styled.div`
  display: flex;
  justify-content: end;
  position: absolute;
  padding: 20px;
  right: 0;
  bottom: 0;
`;

export const Button = styled.button`
  padding: 20px;
  background: ${({ theme }) => theme.colors.buttonRed};
  border: 0;
  border-radius: 20px;
  color: white;
  font-size: 16px;
  font-weight: 600;
  transition: all ease 0.2s;

  :hover {
    opacity: 0.8;
  }
`;
