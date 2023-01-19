//componente de productos que se renderisa en pageProducts solo 20 productos por pagina
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getDetail, getProducts } from "../../Redux/action";
import { Container, Card, Button, Row, Image } from "react-bootstrap";

export default function Productos() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(21);
  const [paginas, setPaginas] = useState([]);
  let pages = [];

  useSelector((state) => state.getDetail);

  useEffect(() => {
    setMaxPage(Math.ceil(products.length / 21));
    if (maxPage > 1) {
      for (let i = 1; i <= maxPage; i++) {
        pages.push(i);
      }
      setPaginas(pages);
    } else setPaginas(pages);
  }, [products, page, maxPage, num1, num2]);
  function handleNextPage() {
    if (num2 >= maxPage * 21) {
      return num1, num2;
    } else {
      setNum1(num1 + 21);
      setNum2(num2 + 21);
    }
  }

  function handlePrevPage() {
    if (num1 == 0) {
      return num1, num2;
    } else {
      setNum1(num1 - 21);
      setNum2(num2 - 21);
    }
  }
  const handleDetail = (e) => {
    dispatch(getDetail(e.target.value));
    navigate(`/product/${e.target.value}`);
  };
  const handleChangePagePerNum = (e) => {
    console.log(e.target.value);
    let n = e.target.value * 20;
    if (e.target.value == 1) {
      return setNum1(0), setNum2(20);
    } else setNum1(n);
    setNum2(n + 20);
  };
  return (
    <Container>
      {/* paginacion */}

      <Container className="m-3">
        {/* botones de paginacion bootstrap */}

        <Button
          onClick={handlePrevPage}
          variant="outline-warning"
          style={{ border: "1px solid #ff3c00", color: "#ff3c00" }}
          className="m-1"
        >
          Anterior
        </Button>
        {paginas.length > 1 &&
          paginas.map((e, i) => (
            <Button
              key={i}
              value={e}
              onClick={handleChangePagePerNum}
              variant="outline-warning"
              style={{ border: "1px solid #ff3c00", color: "#ff3c00" }}
              className="m-1"
            >
              {e}
            </Button>
          ))}
        <Button
          onClick={handleNextPage}
          variant="outline-warning"
          style={{ border: "1px solid #ff3c00", color: "#ff3c00" }}
          className="m-1"
        >
          Siguiente
        </Button>
      </Container>

      {/* body de cards */}

      <Row>
        {/* mensaje de carga mientras se renderiza los productos */}

        {products.length === 0 ? (
          <h1
            style={{
              color: "#ff3c00",
            }}
          >
            No hay productos con este Filtro
          </h1>
        ) : null}
        {/* //map para renderizar los productos */}

        {/* card */}

        {products?.slice(num1, num2)?.map((product) => {
          return (
            <Card
              style={{
                width: "19rem",
                backgroundColor: "rgba(33, 37, 41,0.5)",
                backdropFilter: "blur(5px)",
                border: "1px solid #fff",
                boxShadow: "0 0 7px #fff",
              }}
              expand="lg"
              className="rounded-4 m-2"
              key={product._id}
            >
              <Card.Body>
                <Image fluid rounded src={product.image} alt={product.name} />

                <Card.Title
                  style={{
                    color: "#ff3c00",
                  }}
                >
                  {product.name.slice(0, 30)}
                </Card.Title>
                {/* //descricion con caracteres limitados a 100 */}
                <Card.Text
                  style={{
                    color: "#ff3c00",
                  }}
                >
                  {product.description.slice(0, 30)}...
                </Card.Text>
                <Card.Text
                  style={{
                    color: "#ffc800",
                  }}
                >
                  ${product.price}
                </Card.Text>
                {/* usar getDetail para detalles del producto */}
                <Button
                  variant="outline-warning"
                  style={{ border: "1px solid #ff3c00", color: "#ff3c00" }}
                  value={product._id}
                  onClick={handleDetail}
                >
                  Ver detalles
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
}
