import Navbar from "./components/Navbar/Navbar"
import About from "./components/About"
import Skills from "./components/Skills/Skills"
import BlurryBlob from "./components/BlurryBlob"
import GithubStats from "./components/GithubStats/GithubStats";
import Projects from "./components/Projects/Projects";
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
      </div>
    </>
  );
}

export default App
