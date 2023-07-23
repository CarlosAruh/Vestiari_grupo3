import React from 'react';
import { Col, Row } from 'react-bootstrap';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-stepes">
      <Col className={props.step1 ? 'active' : ''}>Logado</Col>
      <Col className={props.step2 ? 'active' : ''}>Compra</Col>
      <Col className={props.step3 ? 'active' : ''}>Pagamento</Col>
      <Col className={props.step4 ? 'active' : ''}>Local de Entrega</Col>
    </Row>
  );
}
