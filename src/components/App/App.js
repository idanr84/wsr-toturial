import React from 'react';
import { Container, Row, Col, Page, Box } from 'wix-style-react';
import WSRForm from '../WSRForm';
import WSRExtra from '../WSRExtra';
import ActionBar from './ActionBar';
import SubmittedInfo from '../SubmittedInfo';

const colorOptions = [
  { id: 0, value: 'Red' },
  { id: 1, value: 'Green' },
  { id: 2, value: 'Blue' },
  { id: 3, value: 'Yellow' },
  { id: 4, value: 'Pink' },
];

const InitalState = {
  name: '',
  selectedColorId: undefined,
  isAgreeingToTerms: false,
  funFact: '',
  submittedValues: null,
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ...InitalState,
    };
  }

  onClearPressed = () => {
    this.setState({
      ...InitalState,
    });
  };

  onSubmitPressed = () => {
    this.setState(state => ({
      submittedValues: {
        color: state.selectedColorId ? colorOptions[state.selectedColorId].value : '',
        name: state.name,
        funFact: state.funFact,
      },
    }));
  };

  isSubmitEnabled= () => this.state.name && this.state.isAgreeingToTerms

  render() {
    return (
      <Container>
        <Page>
          <Page.Header
            title="WSR Form"
            actionsBar={
              <ActionBar
                onClearPressed={this.onClearPressed}
                onSubmitPressed={this.onSubmitPressed}
                isSubmitEnabled={this.isSubmitEnabled()}
              />
            }
          />
          <Page.Content>
            <Container>
              <Row>
                <Col span={8}>
                  <WSRForm
                    colorOptions={colorOptions}
                    selectedColorId={this.state.selectedColorId}
                    agreedToTerms={this.state.isAgreeingToTerms}
                    name={this.state.name}
                    onNameChange={name => {
                      this.setState({
                        name,
                      });
                    }}
                    onColorSelected={colorId => {
                      this.setState({
                        selectedColorId: colorId,
                      });
                    }}
                    onAgreeToTermsToggled={() => {
                      this.setState({
                        isAgreeingToTerms: !this.state.isAgreeingToTerms,
                      });
                    }}
                    onClearPressed={this.onClearPressed}
                    onSubmitPressed={this.onSubmitPressed}
                    isSubmitEnabled={this.isSubmitEnabled()}
                  />
                </Col>
                <Col span={4}>
                  <Row>
                    <Col>
                      <WSRExtra dataHook="extra-form"/>
                    </Col>
                  </Row>
                  {this.state.submittedValues && (
                      <Row>
                      <Col>
                        <SubmittedInfo
                          {...this.state.submittedValues} />
                      </Col>
                    </Row>
                  )}
                </Col>
              </Row>
            </Container>
          </Page.Content>
        </Page>
      </Container>
    );
  }
}
