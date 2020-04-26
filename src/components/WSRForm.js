import React from 'react';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Dropdown,
  FormField,
  Input,
  Row,
  Col
} from 'wix-style-react';
import ActionBar from './App/ActionBar';

export default class WSRForm extends React.Component {
  render() {
    return (
      <Card>
        <Card.Header
          title="WST FOrm"
          subtitle="Create your own page with wix-style-react"
        />
        <Card.Divider />
        <Card.Content>
          <Row>
            <Col span={6}>
              <FormField required label="Name">
                <Input
                  size="medium"
                  placeholder="Enter a name"
                  onChange={(e) => this.props.onNameChange(e.target.value)}
                  value={this.props.name}
                  dataHook="wsr-form-name"
                />
              </FormField>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <FormField label="Favorite Color">
                <Dropdown
                  size="medium"
                  placeholder="Enter a color"
                  options={this.props.colorOptions}
                  onSelect={option => this.props.onColorSelected(option.id)}
                  selectedId={this.props.selectedColorId}
                  dataHook="wsr-form-color"
                />
              </FormField>
            </Col>
          </Row>
          <Row>
            <Col span={8}>
              <Checkbox
                onChange={() => {
                  this.props.onAgreeToTermsToggled();
                }}
                checked={this.props.agreedToTerms}
                dataHook="wsr-form-checkbox-terms"
              >
                I agree for the terms of use
              </Checkbox>
            </Col>
            <Col span={4}>
              <Box align="right">
                <ActionBar
                  onClearPressed={this.props.onClearPressed}
                  onSubmitPressed={this.props.onSubmitPressed}
                  isSubmitEnabled={this.props.isSubmitEnabled}
                />
              </Box>
            </Col>
          </Row>
        </Card.Content>
      </Card>
    );
  }
}
