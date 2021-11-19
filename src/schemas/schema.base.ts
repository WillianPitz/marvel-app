import * as Yup from "yup";
const error = "Campo obrigatório";
Yup.setLocale({
  mixed: {
    default: error,
    required: error,
  },
});
