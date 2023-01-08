import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function CardFeaturedCategories() {
  return (
    <Link>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="./image/tdv(1).webp" />
        <Card.Body>
          <Card.Title>Tarjetas de video</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
}
