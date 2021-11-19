import { InputHTMLAttributes } from "react";
export type Variant = "secondary";
export type InputProps = {
  label?: string;
  icon?: any;
  iconClass?: string;
} & InputHTMLAttributes<HTMLInputElement> &
  InputPropsStyled;
export type InputPropsStyled = {
  iconDir?: "right" | "left";
};
