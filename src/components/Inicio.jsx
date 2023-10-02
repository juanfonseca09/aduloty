import React from "react";
import "./Inicio.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { categories } from "../data";
import { FaTruck, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src="./fondo-inicio.png" className="img-fluid" />
        </Carousel.Item>
        <Carousel.Item>
          <img src="./fondo-inicio2.png" className="img-fluid" />
        </Carousel.Item>
      </Carousel>
      <div className="envio d-flex">
        <p>
          ----- <FaTruck size={20} className="mb-1" /> Envíos a todo el pais a
          domicilio -----
        </p>
      </div>
      <div className="destacado">
        <div className="titulo-destacado d-flex mb-3">
          <img src="./destacado.png" className=" img-fluid" />
        </div>
        <Container>
          <Row>
            {categories.map((item) => (
              <Col
                xs={6}
                md={3}
                key={item.id}
                className={item.id % 2 === 0 ? "item espacio" : "item"}
              >
                <div className="img-container">
                  <img src={item.img} alt="producto" className="img-fluid" />
                  <div className="boton-container">
                    <Link to="/producto">
                      <div className="boton">
                        <FaSearch size={20} />
                      </div>
                    </Link>
                    <Link to="/carrito">
                      <div className="boton">
                        <FaShoppingCart size={20} />
                      </div>
                    </Link>
                  </div>
                  <Link to="/producto">
                    <div className="nombre">
                      <p className="fw-bold">{item.title}</p>
                      <p className="fs-5">{item.price}</p>
                    </div>
                  </Link>
                </div>
              </Col>
            ))}
          </Row>
          <Link to="/productos">
            <div className="row justify-content-center mt-5">
              <Button className="col-md-3 col-6 text-center btn-custom">
                VER TODOS LOS PRODUCTOS
              </Button>
            </div>
          </Link>
        </Container>
      </div>
    </>
  );
};
