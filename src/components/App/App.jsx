import { Navigate, Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import css from "./App.module.css";
import HomePage from "../../pages/HomePage/HomePage";
import PuttyPage from "../../pages/PuttyPage/PuttyPage";
import CeilingPage from "../../pages/CeilingPage/CeilingPage";
import Footer from "../Footer/Footer";


function App() {

  return (
    <div className= {css.appWrapper}>
      <Navigation />
      <main className={css.mainContent} >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/putty" element={<PuttyPage />} />
          <Route path="/ceiling" element={<CeilingPage />} /> 
          <Route path="*" element = {<Navigate to="/" />}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
