import React from "react";

import { toast as toastify } from "react-toastify";

import { Toast } from "./styles";

import "react-toastify/dist/ReactToastify.css";
import { theme } from "../../styles/theme";

interface toastProps {
  type: string;
  message: string;
}

export const showToast = ({ type, message }: toastProps) => {
  switch (type) {
    case "success":
      toastify.success(message);
      break;
    case "error":
      toastify.error(message);
      break;
    default:
      break;
  }
};

export default function ToastAnimated() {
  return (
    <Toast
      toastClassName="toastBody"
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      limit={1}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={theme}
    />
  );
}
