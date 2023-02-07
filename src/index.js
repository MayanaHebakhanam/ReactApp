import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom';
import Survey from './pages/Survey';
import Header from './pages/Header';
import Error from './Error';
import { SurveyProvider, ThemeProvider } from './pages/Context';
import Freelancers from './pages/Freelancers';
import Results from './pages/Results';
import GlobalStyle from './pages/GlobalStyle';
import Footer from './pages/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
      <GlobalStyle />
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/survey/:questionNumber" element={<Survey/>}/>
        <Route path="/freelancers" element={<Freelancers/>} />
        <Route path="/results" element={<Results/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
      </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
