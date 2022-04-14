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
        <Route path="/quiz" element={<StartSide />} />
        <Route path="/" element={<FrontPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
