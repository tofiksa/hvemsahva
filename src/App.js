import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FrontPage } from './templates/FrontPage'
import { StartSide } from './templates/StartSide';
import { Footer } from './components/Footer.js';
import { ExtBrowserRouter } from './services/ExtBrowserRouter'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartSide />} />
        <Route path="/quiz" element={<FrontPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
