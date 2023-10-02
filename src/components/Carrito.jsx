import React from "react";
import "./Carrito.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";

export const Carrito = () => {
  return (
    <>
      <div className="carrito">
        <Container>
          <Row>
            <Col md={8}>
              <div className="mb-2">
              <Card>
                <Card.Body className="prod-card">
                  <img
                    src="./pord.png"
                    className="img-fluid img-thumbnail"
                    alt=""
                  />
                  <div className="texto">
                    <div>
                      <p className="fw-bold">Producto:</p>
                      <p>aaaaa</p>
                    </div>
                    <div>
                      <p className="fw-bold">Id:</p>
                      <p>22222</p>
                    </div>
                    <div>
                      <p className="fw-bold">Talle:</p>
                      <p>L</p>
                    </div>
                    
                  </div>
                  <div className="trash">
                    <FaRegTrashAlt size={25}/>
                  </div>
                </Card.Body>
              </Card>
              </div> 
            </Col>
           
            <Col md={4}><Card >
            <Card.Body>
              <h2 className="fw-bold">Tu Compra</h2><hr/>
              <div className="mb-0">
              <p>Subtotal: $9.999</p>
              <p>IVA: $99</p>
              <p>Envio: $999</p>
              <p>Total: $9.999</p>
              </div>
              <div className="row justify-content-center p-4">
                <Button variant='light' className="col-6 btn-custom">Comprar</Button>
              </div>
            </Card.Body>
            </Card></Col>
            
          </Row>
        </Container>
      </div>
    </>
  );
};

