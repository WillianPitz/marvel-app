import styled from "styled-components";
import { ToastContainer } from "react-toastify";

export const Toast = styled(ToastContainer)`
  .Toastify__toast-icon {
    /* width: auto; */
    /* position: absolute;
    right: 20px;
    top: 40px; */
  }
  .Toastify__toast--info {
    .title {
      color: #0087ee;
    }
  }
  .Toastify__toast--success {
    .title {
      color: #34cf58;
    }
  }
  .Toastify__toast--warning {
    .title {
      color: #ffc933;
    }
  }
  .Toastify__toast--error {
    .title {
      color: #ff7583;
    }
  }
  /* .Toastify__toast {
    width: 398px;
    height: 112px;
    background: #ffffff;
    box-shadow: 0px 3px 6px #d7d8e4;
    border: 5px solid #ffffff;
    border-radius: 20px;
    right: 6em;
    padding: 0 25px;
  }
  .toastMessage {
    width: 100%;
    display: flex;
    padding: 25px 0px;
    flex-direction: column;

    svg {
      width: 26px;
      margin-right: 15px;
      height: 26px;
      flex: 26px 0 0;
    }

    .title {
      position: absolute;
      top: 10px;
      font-size: 16px;
      font-weight: bold;
    }

    p {
      color: #989ab8;
      max-width: 70%;
      margin-top: 15px;
      font-size: 0.85rem;
      font-weight: 600;
    }
  } */
`;
