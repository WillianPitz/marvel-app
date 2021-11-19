import styled from "styled-components";

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 50vw;
  background: white;
  border-radius: 20px;
  background: #202020;
  box-shadow: 0px 0px 10px 1px ${({ theme }) => theme.colors.white};
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.textWhite};
  margin-top: 20px;
`;

export const Divider = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  margin: 20px 0;
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

export const ModalContent = styled.div`
  display: flex;
  margin-top: 45px;
`;

export const ImageDiv = styled.div``;

export const Image = styled.img`
  width: 305px;
  height: 500px;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-indent: 50px;
`;

export const TextInfoWrapper = styled.div``;

export const TitleInfo = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textWhite};
`;

export const TextInfo = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #e7e7e7;
`;
export const FirstRow = styled.div`
  display: flex;
  /* gap: 80px; */
  margin-top: 30px;
`;

export const SecondRow = styled.div`
  display: flex;
  margin-top: 30px;
`;

export const Description = styled.div`
  color: #ffffff;
  display: flex;
  text-align: left;
  max-width: 380px;
  text-indent: 0px;
  padding: 20px 50px;

  p {
    font-size: 16px;
    font-weight: 600;
  }
`;
