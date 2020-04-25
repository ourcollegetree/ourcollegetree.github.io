import React from 'react'
import {
  Grid, Header, Divider, Menu, Container, Button
} from 'semantic-ui-react';
import Link from 'next/link';
import Router from 'next/router';
import Axios from 'axios';

class FooterComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      phone: '',
      emailError: [],
      nameError: [],
      phoneError: [],
      errors: [],
    };
  }


  render() {
    return (
        <Container>
        <Grid centered>
        <Grid.Row>
          {/* <p style={{marginLeft:5,marginRight:5}}><Icon name="instagram" size="large" /></p>
          <p style={{marginLeft:5,marginRight:5}}><Icon name="facebook" size="large" /></p>
          <p style={{marginLeft:5,marginRight:5}}><Icon name="twitter" size="large" /></p> */}
          <Button as="a" href="https://www.facebook.com/Our-College-Tree-105819201094211/?modal=admin_todo_tour" target="_blank" circular color='facebook' icon='facebook' style={{ marginLeft: 5, marginRight: 5 }}/>
          <Button as="a" href="https://twitter.com/home" target="_blank" circular color='twitter' icon='twitter' style={{ marginLeft: 5, marginRight: 5 }}/>
          <Button as="a" href="https://www.instagram.com/ourcollegetree/" target="_blank" circular color='pink' icon='instagram' style={{ marginLeft: 5, marginRight: 5 }}/>
        </Grid.Row>
        <Grid.Row>
          <Link href="/terms"><p style={{ marginLeft: 5, marginRight: 5, cursor: 'pointer' }}>Terms</p></Link>
          <Link href="/privacy"><p style={{ marginLeft: 5, marginRight: 5, cursor: 'pointer' }}>Privacy</p></Link>
          <Link href="/contact-us"><p style={{ marginLeft: 5, marginRight: 5, cursor: 'pointer' }}>Contact</p></Link>
        </Grid.Row>
        <Grid.Row>
        <Link href="https://www.freepik.com/free-photos-vectors/banner"><p style={{fontSize:"7px"}}>Logo by Banner vector created by vectorpocket - www.freepik.com</p></Link>
        </Grid.Row>
      </Grid>
    </Container>
    );
  }
}




export default FooterComp;
