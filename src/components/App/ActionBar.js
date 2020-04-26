import React from 'react';
import { Box, Button } from 'wix-style-react';

export default class WSRForm extends React.Component {
  render() {
    return (
      <Box>
        <Box marginRight="12px">
          <Button
            priority="secondary"
            onClick={this.props.onClearPressed}
            dataHook="button-clear"
          >
            Clear
          </Button>
        </Box>
        <Button
          onClick={this.props.onSubmitPressed}
          disabled={!this.props.isSubmitEnabled}
          dataHook="button-submit"
        >
          Submit
        </Button>
      </Box>
    );
  }
}
