import NavBar from "./components/NavBar";
import AnimRoutes from "./components/AnimRoutes";
import Footer from "./components/Footer";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return <>
    <BrowserRouter>
      <NavBar />
      <AnimRoutes />
      <Footer />
    </BrowserRouter>
  </>;
};

export default App;
