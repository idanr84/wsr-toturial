import React from 'react';
import {Text, Card, FormField, InputArea,Col, Row } from 'wix-style-react';

export default class SubmittedInfo extends React.Component {
  render() {
    return (
      <Card dataHook="submitted-form">
        <Card.Header title="Extra" />
        <Card.Divider />
        <Card.Content>
          <Row>
            <Col span={6}>
              <Text>Name:</Text>
            </Col>
            <Col span={6}>
              <Text>{this.props.name}</Text>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Text>Favorite Color:</Text>
            </Col>
            <Col span={6}>
              <Text>{this.props.color}</Text>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <Text>Fun Fact:</Text>
            </Col>
            <Col span={6}>
              <Text>{this.props.funFact}</Text>
            </Col>
          </Row>
        </Card.Content>
      </Card>
    );
  }
}
