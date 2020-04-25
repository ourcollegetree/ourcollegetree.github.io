import React from 'react';
import Link from 'next/link';
import Router, { withRouter } from 'next/router';
import { connect } from 'react-redux';
import Axios from 'axios';
import {
  Image, Grid, Container, Input, Header, Divider, Form, Message,
} from 'semantic-ui-react';

import Api from '../../config/Api';
 import { updateUser } from './LoginSlice';
 import { setCookie } from '../../libs/cookies/cookieHelpers';


class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      username: '',
      usernameErrors: [],
      password: '',
      passwordErrors: [],
      errors: [],
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    const nameErrors = `${name}Errors`;
    this.setState({ [name]: value, [nameErrors]: [], errors: [] });
  }

  onSubmit = () => {
    const { username, password } = this.state;
    const { router: { query, query: { next } } } = this.props;
    const { updateUser: updateUserAction } = this.props;
    this.setState({ isLoading: true });
    Axios.post(Api.userLogin, { username, password })
      .then(({ data: { key, details } }) => {
          console.log("key", key)
        setCookie(key);
        updateUserAction({ isLoggedIn: true, accessToken: key, userDetails: details });
        Router.push('/');
      })
      .catch(({ response: { data, status, statusText } }) => {
        console.log("login error", data)})
      .finally(() => { this.setState({ isLoading: false }); });
  }

  render() {
    const {
      isLoading, username, password, usernameErrors, passwordErrors, errors,
    } = this.state;

    return (
    <div className="loginSignup">
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, right: 0,
          }}
          >
            <div style={{
              width: '100%', float: 'right', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            >
                   <Grid centered>
          <Grid.Row verticalAlign="middle">
            <Grid.Column mobile={16} tablet={8} computer={16}>
              <Header color="yellow" as="h1" textAlign="center">Login</Header>
              <Form onSubmit={this.onSubmit} error={errors.length > 0} loading={isLoading}>
                <Form.Field>
                    <lable style={{color: "yellow"}}>Username</lable><Input name="username" type="text" placeholder="Username" onChange={this.onChange} value={username} error={usernameErrors.length ? usernameErrors.join() : null} /></Form.Field>
                <Form.Field>
                <lable style={{color: "yellow"}}>Password</lable>
                    <Input name="password" type="password" placeholder="Password" onChange={this.onChange} value={password} error={passwordErrors.length ? passwordErrors.join() : null} /></Form.Field>
                <Message hidden={!errors.length} error list={errors} />
                <Form.Button content="Log In" positive fluid></Form.Button>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Divider horizontal><p style={{color: "white"}}>Or</p></Divider>
              <Grid columns={1}>
                <Grid.Column>
                  <Header as="h5" textAlign="center">
                    <Link href="/user/forgot-password" passHref><a title="Forgot Password">Forgot Password?</a></Link>
                  </Header>
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
            </div>
            </div>
            </div>
    );
  }
}


const mapStateToProps = null;
const mapDispatchToProps = { 
    updateUser
 };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
