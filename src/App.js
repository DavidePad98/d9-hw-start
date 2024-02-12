import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FavoriteIndicator from "./components/FavoriteIndicator";
import { Col, Container, Row } from "react-bootstrap";
import Favorite from "./components/Favorite";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Row>
          <Col>
            <FavoriteIndicator />
          </Col>
        </Row>
        <Routes>
          <Route path="/" element={<MainSearch />} />
          <Route path="/:company" element={<CompanySearchResults />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};

export default App;
