import { Route, Routes } from "react-router-dom";
import { AboutMe, CodeSample, ContactMe, Home, MyProjects } from './pages'

function App() {
  return (
    <div className="flex flex-col h-screen justify-between overflow-hidden">      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="aboutme" element={<AboutMe/>}/>
        <Route path="myprojects" element={<MyProjects/>}/>
        <Route path="codesample" element={<CodeSample/>}/>
        <Route path="contact" element={<ContactMe/>}/>
      </Routes>    
    </div>
  );
}

export default App;
