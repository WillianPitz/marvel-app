import React from "react";
import { BrowserRouter, Route, Routes as Router } from "react-router-dom";

import List from "../pages/List/List";

export default function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/marvel-app/home" element={<List />} />
      </Router>
    </BrowserRouter>
  );
}
