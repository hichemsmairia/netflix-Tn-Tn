import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navigation() {
  return (
    <Nav
      style={{
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-around",
        paddingBottom: "20px",
      }}
      variant="pills"
      defaultActiveKey="/home"
    >
      <Nav.Item>
        <Nav.Link>
          {" "}
          <Link to="/">home</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          {" "}
          <Link to="/download">telechargement</Link>
        </Nav.Link>
      </Nav.Item>{" "}
      <Nav.Item>
        <Nav.Link>
          {" "}
          <Link to="/profit">profiter</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          {" "}
          <Link to="/movie">film aleatoire</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          {" "}
          <Link to="/anywhere">dans tous le monde ! </Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
