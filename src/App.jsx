// App.jsx
import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import BlurryBlob from "./components/BlurryBlob";
import About from "./components/About";
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const GithubStats = lazy(() => import("./components/GithubStats"));

function App() {
  return (
    <>
      <BlurryBlob />
      <Navbar />
      <div id="app">
        <div style={{ height: "0px" }} id="home"></div>
          <About />
        <Suspense fallback={<div>Loading...</div>}>
          <Skills />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <GithubStats />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>

        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      </div>
    </>
  );
}

export default App;
