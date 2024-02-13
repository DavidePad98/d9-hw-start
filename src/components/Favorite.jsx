import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFavoriteFromAction } from "../redux/actions";

const Favorite = () => {
  const favorite = useSelector((state) => state.favorite.favorite);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1 className="mb-4">I tuoi Preferiti</h1>
          <ul>
            {favorite.map((job, i) => (
              <li key={i} className="d-flex justify-content-between my-3 ">
                <Link to={`/${job.company_name}`}>{job.company_name}</Link>
                <a href={job.url} target="_blank" rel="noreferrer">
                  {job.title}
                </a>
                <Button
                  variant="danger"
                  className="rounded-5 mx-3"
                  onClick={() => {
                    dispatch(deleteFavoriteFromAction(i));
                  }}
                >
                  <i className="bi bi-trash3-fill"></i>
                </Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};
export default Favorite;
