import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

export default function CardFeaturedProducts() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Subtitle className="mb-2 text-muted">-7%</Card.Subtitle>
      <Card.Img variant="top" src="./image/M2.jpg" />
      <Card.Body>
        <Card.Title>HP 2YY47AA#ABC 1TB Solid State Drive</Card.Title>
        <Card.Text>
          With a size of 22x80x3.5mm (2280), EX920 M.2 SSD is a new storage
          solution with ultra-high performance. Compatible with new generation
          motherboard architecture, EX920 is applicable to high-end
          motherboards, notebooks and desktops with PCIe M.2 interface.
        </Card.Text>
        <Row>
          <Col>ID o SKU</Col>
          <Col>$100</Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary">Añadir</Button>
          </Col>
          <Col>$97</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>Costo de envio $10</Col>
        </Row>
        <Row>
          <Col></Col>
          <Col>Disponibilidad 100</Col>
        </Row>
        <Row>
          <Col>
            {" "}
            <Form>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id={`default-${type}`}
                    label={`Comparar`}
                  />
                </div>
              ))}
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
