// App.jsx
import  { lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import BlurryBlob from "./components/BlurryBlob";
import About from "./components/About/Index";
const Skills = lazy(() => import("./components/Skills/Index"));
const Projects = lazy(() => import("./components/Projects/Index"));
const Contact = lazy(() => import("./components/Contact/Index"));
const GithubStats = lazy(() => import("./components/GithubStats/Index"));

function App() {
  return (
    <>
      <BlurryBlob />
      <Navbar />
      <div id="app">
          <About />
        <Suspense fallback={<div>Lazy Loading...</div>}>
          <Skills />
        </Suspense>

        <Suspense fallback={<div>Lazy Loading...</div>}>
          <GithubStats />
        </Suspense>

        <Suspense fallback={<div>Lazy Loading...</div>}>
          <Projects />
        </Suspense>

        <Suspense fallback={<div>Lazy Loading...</div>}>
          <Contact />
        </Suspense>
      </div>
    </>
  );
}

export default App;
