import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const FavoriteIndicator = () => {
  const navigate = useNavigate();
  const buttonLabel = useSelector((state) => {
    return state.favorite.favorite.length;
  });
  return (
    <div className="d-flex justify-content-end my-4">
      <Button
        className="rounded-5 bg-transparent text-primary mx-3"
        onClick={() => navigate("/")}
      >
        <i className="bi bi-house-door-fill"></i>
      </Button>
      <Button className="rounded-5" onClick={() => navigate("/favorite")}>
        <span>{buttonLabel}</span>
        <i className="bi bi-heart-fill ms-2"></i>
      </Button>
    </div>
  );
};
export default FavoriteIndicator;
