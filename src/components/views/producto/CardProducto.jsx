import { useState, useEffect } from "react";
import { Col, Card } from "react-bootstrap";
import { obtenerProductos } from "../../helpers/queries";
import { Link } from "react-router-dom";

const CardProducto = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const listaProductos = await obtenerProductos();
      setProductos(listaProductos);
    };

    fetchProductos();
  }, []);

  return (
    <>
      {productos.map((producto) => (
        <Col key={producto.id} md={4} ld={3} className="mb-3">
          <Card>
            <Card.Img variant="top" src={producto.imagen} />
            <Card.Body>
              <Card.Title className="text-ligth fw-semibold h4 ">{producto.nombreProducto}</Card.Title>
              <Card.Text className="text-danger fw-semibold h5 ">{producto.categoria}</Card.Text>
              <Card.Text className="text-warning fw-semibold  h5">{producto.precio}</Card.Text>
              <Link to={`/detalle/${producto.id}`} className="btn btn-warning">
                Ver detalle
              </Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default CardProducto;