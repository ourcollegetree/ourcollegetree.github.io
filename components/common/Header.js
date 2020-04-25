import React from 'react'
import {
  Grid, Header, Divider, Menu, Image, Button
} from 'semantic-ui-react';
import Link from 'next/link';
import Router from 'next/router';
import Axios from 'axios';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';

class HeaderComp extends React.Component {
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
    const { user, isLoggedIn, accessToken } = this.props;
    console.log("isloggedin", isLoggedIn, accessToken);
    return (
        <div>
      <Menu inverted secondary>
      <Link href="/" passHref>
                      <Menu.Item as="a">
                          <Grid>
                        <Image src="/static/images/logo2.jpeg" size="tiny" />
                        </Grid>
                      </Menu.Item>
                    </Link>
      <Link href="/" passHref>
        <a>
          <Menu.Item>
            <p className="headerText">Home</p>
          </Menu.Item>
        </a>
      </Link>
      <Link href="/about-us" passHref>
        <a>
          <Menu.Item >
            <p className="headerText">About Us</p>
          </Menu.Item>
        </a>
      </Link>
      <Link href="/contact-us" passHref>
        <a>
          <Menu.Item >
            <p className="headerText">Contact Us</p>
          </Menu.Item>
        </a>
      </Link>
          <Menu.Menu position="right">
          <Link href="/login" passHref>
                      <a>
                        <Menu.Item>
                          <Button primary basic>Login</Button>
                        </Menu.Item>
                      </a>
                    </Link>
                    <Link href="/sign-up" passHref>
                      <a>
                        <Menu.Item>
                          <Button color="green">Get Started</Button>
                        </Menu.Item>
                      </a>
                    </Link>
                    </Menu.Menu>
      </Menu>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const { user: { isLoggedIn, user, accessToken } } = state;
  return {
    isLoggedIn, user, accessToken,
  };
};

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeaderComp));
