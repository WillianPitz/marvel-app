import api from "../api";

const getComics = () => {
  return api.get("/comics");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getComics,
};
