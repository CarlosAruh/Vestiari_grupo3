import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CheckoutSteps(props) {
  return (
    <Row className="checkout-stepes">
      <Col className={props.step1 ? 'active' : ''}>Logado</Col>
      <Col className={props.step2 ? 'active' : ''}>Endereço de Entrega</Col>
      <Col className={props.step3 ? 'active' : ''}>Pagamento</Col>
      <Col className={props.step4 ? 'active' : ''}>Entrega Concluida</Col>
    </Row>
  );
}
