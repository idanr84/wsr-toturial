import React from 'react'
import {Card, FormField, InputArea} from "wix-style-react";

export default class WSRExtra extends React.Component{
  render() {
    return(
      <Card>
        <Card.Header
          title="Extra"
        />
        <Card.Divider/>
        <Card.Content>
          <FormField label="Fun Fact">
            <InputArea placeholder="Enter something interesting">

            </InputArea>
          </FormField>
        </Card.Content>
      </Card>
    )
  }
}
