import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const Toast = styled(ToastContainer)`
  .Toastify__toast {
    @media only screen and (max-width: 480px) {
      background: #202020;
    }
  }
`;
