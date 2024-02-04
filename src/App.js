import React from "react";
import Landing from "./components/landing-page/home";
import ProjectPage from "./components/project-details/project-page";
import ProjectDetails from "./components/project-details/project-details";
import { Routes, Route } from "react-router-dom";
import ErrorPage from "./components/error-page";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />}></Route>
      <Route path="project-page" element={<ProjectPage />} />
      <Route path="project-page/:projectId" element={<ProjectDetails />} />
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default App;
