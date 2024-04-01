import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import Error from "./pages/Error";
import Courses from "./Cources/Courses";

import Reactpage from "./Reactpage";
import Javac from "./Javac/Javac";
import Pythonc from "./Python/Pythonc";
import Codingm from "./CodingMaster/Codingm";
import Placementp from "./Placement/Placementp";
import HowItWorks from "./HowItWorks";

function App() {
  return (
    <Container style={{ width: "100%" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/Courses" element={<Courses/>}/>
        <Route path="/java" element={<Javac/>}/>
        <Route path="/howitwok" element={<HowItWorks/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/react" element={<Reactpage/>}/>
        <Route path="/python" element={<Pythonc/>}/>
        <Route path="/coding" element={<Codingm/>}/>
        <Route path="/placement" element={<Placementp/>}/>
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
