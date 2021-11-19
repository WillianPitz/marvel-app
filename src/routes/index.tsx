import React from "react";

import { BrowserRouter, Routes as Router, Route } from "react-router-dom";

import List from "../pages/List/List";

export default function Routes() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Router>
        <Route path="/" element={<List />} />
      </Router>
    </BrowserRouter>
  );
}
