import { Container, Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { obtenerUnProducto } from "../helpers/queries";
import { useParams } from "react-router-dom";

const DetalleProducto = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducto = async () => {
      const productoObtenido = await obtenerUnProducto(id);
      setProducto(productoObtenido);
    };

    fetchProducto();
  }, [id]);

  return (
    <Container className="my-3 mainSection">
      {producto ? (
        <Card>
          <Row>
            <Col md={6}>
              <Card.Img variant="top" src={producto.imagen} />
            </Col>
            <Col md={6}>
              <Card.Body>
                <h5 className="title">{producto.nombreProducto}</h5>
                <hr />
                <Card.Text>
                  <span className="text-danger fw-semibold  ">Categoria:</span>
                  {producto.categoria}
                  <br />
                  <span className="text-danger fw-semibold ">Precio:</span>
                  {producto.precio}
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      ) : (
        <p>Cargando el producto...</p>
      )}
    </Container>
  );
};

export default DetalleProducto;