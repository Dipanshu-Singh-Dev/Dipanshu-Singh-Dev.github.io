import Navbar from "./components/Navbar/Navbar"
import About from "./components/About"
import Skills from "./components/Skills/Skills"
import BlurryBlob from "./components/BlurryBlob"
import GithubStats from "./components/GithubStats/GithubStats";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact"
function App() {
  return (
    <>
      <BlurryBlob />
      <Navbar />
      <div id="app">
        <About />
        <Skills />
        <GithubStats/>
        <Projects/>
        <Contact/>
      </div>
    </>
  );
}

export default App
