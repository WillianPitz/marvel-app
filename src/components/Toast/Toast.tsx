import React from "react";

import { toast as toastify } from "react-toastify";

import { Toast } from "./styles";

import "react-toastify/dist/ReactToastify.css";
import { theme } from "../../styles/theme";

interface toastProps {
  type: string;
  message: string;
}

interface toastPromiseProps {
  promiseName: Promise<any>;
  pendingMessage: string;
  successMessage: string;
  errorMessage: string;
}

export const showToastPromise = ({
  promiseName,
  pendingMessage,
  successMessage,
  errorMessage,
}: toastPromiseProps) => {
  toastify.promise(promiseName, {
    pending: pendingMessage,
    success: successMessage,
    error: errorMessage,
  });
};

export const showToast = ({ type, message }: toastProps) => {
  switch (type) {
    case "success":
      toastify.success(message);
      break;
    case "error":
      toastify.error(message);
      break;
    case "info":
      toastify.info(message);
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
