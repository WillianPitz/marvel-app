import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background: white;
  border-radius: 20px;
  background: #202020;
  box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.colors.white};
`;

export const InputRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-top: 20px;
`;

export const Button = styled.button`
  padding: 15px;
  width: 150px;
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

export const CloseButton = styled.div`
  display: flex;
  justify-content: end;

  svg {
    fill: ${({ theme }) => theme.colors.red};
    transition: 0.2s;
    cursor: pointer;
  }

  svg:hover {
    width: 32px;
    opacity: 0.8;
  }
`;

export const ErrorText = styled.p`
  color: #ff4048;
  font-size: 16px;
  text-indent: 30px;
`;
