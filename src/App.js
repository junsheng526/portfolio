import React from "react";
import Landing from "./components/landing-page/home";
import ProjectPage from "./components/project-details/project-page";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/error-page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="project-page" element={<ProjectPage />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default App;
