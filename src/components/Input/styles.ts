import styled, { css } from "styled-components";
import { InputPropsStyled } from "./InputTypes";

export const Container = styled.div<InputPropsStyled>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: left;
  * {
    outline: 0;
  }

  input,
  label {
    margin: 0.4rem 0;
  }

  .icon {
    position: absolute;
    width: 25px;
    height: 25px;
    border-right: 1px solid #202020;
    width: 35px;

    ${(props) =>
      props.iconDir === "right"
        ? css`
            right: 20px;
          `
        : css`
            left: 20px;
          `}
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const Input = styled.input<InputPropsStyled>`
  width: 300px;
  height: 40px;
  box-shadow: 0px 1px 5px 1px #d0d1d5;
  border: 1px solid #d0d1d5;
  border-radius: 25px;
  text-indent: 35px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textBlack};

  ::placeholder {
    color: ${({ theme }) => theme.colors.textBlack};
  }

  ${(props) =>
    props.iconDir === "left" &&
    css`
      text-indent: 60px;
    `}
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;
