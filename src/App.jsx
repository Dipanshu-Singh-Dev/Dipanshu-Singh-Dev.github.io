import Navbar from "./components/Navbar/Navbar"
import About from "./components/About"
import Skills from "./components/Skills/Skills"
import BlurryBlob from "./components/BlurryBlob"
function App() {
  return (
    <>
      <BlurryBlob />
      <Navbar />
      <div id="app">
        <About />
        <Skills />
      </div>
    </>
  );
}

export default App
