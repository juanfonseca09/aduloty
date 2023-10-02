import React from 'react'
import './Producto.css'
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Producto = () => {
  return (
    <>
    <div className="producto">
        <Container>
            <Row>
                <Col md={6}>
                    <img src="./pord.png" className='img-fluid p-5' alt="" />
                </Col>
                <Col md={4} className='mt-5'>
                    <h1>Victoria´s Secret</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, nobis eveniet! Natus explicabo id modi ducimus magni pariatur quia nisi hic perferendis? Praesentium quas quos earum ipsum nihil quaerat culpa.</p>
                    <h3>$9.999</h3>
                    <Dropdown>
                        <Dropdown.Toggle variant='light' className="btn-custom" id="dropdown-basic">Talle</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">L</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link to='/carrito'>
                    <div className="row justify-content-center p-4">
                        <Button variant='light' className="col-6 btn-custom">Agregar al Carrito</Button>
                    </div>
                    </Link>
                </Col>
            </Row>
        </Container>
        </div>
    </>
  )
}
