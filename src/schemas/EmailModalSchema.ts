import * as yup from "yup";

export const EmailModalSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email("Digite um e-mail válido").required(),
});
