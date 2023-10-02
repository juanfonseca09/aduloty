import React from "react";
import "./Productos.css";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { categories } from "../data";
import { FaTruck, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


export const Productos = () => {
  return (
    <>
      <Container>
 
    <div className="productos">
        <div className="titulo-productos d-flex">
          <img src="./productos.png" className=" img-fluid" />
        </div>
        <Row>
        <div className="d-flex p-4 justify-content-center mb-5 ">
        <Dropdown>
      
      <div>
  <div className="btncont">
  <Dropdown.Toggle variant='light' className="btn-custom" id="dropdown-basic">
        CATEGORÍAS
      </Dropdown.Toggle>
      </div>
</div>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Categoria 1</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Categoria 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Categoria 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  
  
        <Dropdown>
      
      <div>
      <div className="btncont">
  <Dropdown.Toggle variant='light' className=" btn-custom" id="dropdown-basic">
        ORDENAR POR
      </Dropdown.Toggle>
      </div>
</div>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Precio</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Mas Nuevo</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Mas Vendidos</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </div>
  {categories.map((item) => (
      <Col
        xs={6}
        md={3}
        key={item.id}
        className={item.id % 2 === 0 ? "item espacio" : "item"}
      >
        <div className="img-container">
          <img src={item.img} alt="" className="img-fluid" />
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
  </div>
</Container>
</>  
);
};
