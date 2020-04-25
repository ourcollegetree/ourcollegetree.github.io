import {
  Grid, Form, Button, Input,
} from 'semantic-ui-react';
import React from 'react';
import Router, { withRouter } from 'next/router';
import { connect } from 'react-redux';
import Axios from 'axios';
import Api from '../../config/Api'

class ContactUsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      phone: '',
      feedback: '',
      emailErrors: [],
      nameErrors: [],
      phoneErrors: [],
    };
    this.onValueChange = this.onValueChange.bind(this);
  }

      onValueChange = (event) => {
        const { name, value } = event.target;
        const nameErrors = `${name}Errors`;
        this.setState({ [name]: value, [nameErrors]: [], errors: [] });

      }

      onSubmit = () => {
        const {
          email, name, phone, feedback,
        } = this.state;


        Axios.post(Api.contactUs, {
          name,
          phone,
          email,
        })
          .then(({ data }) => {
            Router.replace('/thankyou');
          })
          .catch(({ response: { data, status, statusText } }) => {
            if (status === 400 && data && Object.keys(data).length > 0) {
              if (Object.prototype.hasOwnProperty.call(data, 'email')) {
                this.setState({ emailErrors: data.email });
              }
              if (Object.prototype.hasOwnProperty.call(data, 'name')) {
                this.setState({ nameErrors: data.name });
              }
              if (Object.prototype.hasOwnProperty.call(data, 'phone')) {
                this.setState({ phoneErrors: data.phone });
              }
              if (Object.prototype.hasOwnProperty.call(data, 'non_field_errors')) {
                this.setState({ errors: data.non_field_errors });
              }
            } else {
              this.setState({ errors: [statusText, 'Please try later'] });
            }
          });
      }

      render() {
        const {
          email, name, phone, feedback, emailErrors, nameErrors, phoneErrors, errors,
        } = this.state;
        return (
          <div>
            <div className="contactUsComp">
              <div style={{
                position: 'absolute', top: 0, left: 0, bottom: 0, right: 0,
              }}
              >
                <div style={{
                  width: '100%', height: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
                >
                  <div style={{ width: '80%' }} className="textOnImg">
                    <p style={{ color: 'yellow' }}>Contact Us</p>
                    <Grid centered columns={1}>
                      <Grid.Column mobile="16" tablet="12" computer="6">
                        <Form size="large">
                          <Form.Field>
                            <Input
                            name="email"
                            value={email}
                            placeholder="E-mail"
                            onChange={this.onValueChange}
                            error={emailErrors.length ? emailErrors.join() : null}
                          />
                          </Form.Field>
                            
                          <Form.Input
                            name="name"
                            value={name}
                            placeholder="Name"
                            onChange={this.onValueChange}
                            error={nameErrors.length ? nameErrors : null}
                          />
                          <Form.Input
                            name="phone"
                            value={phone}
                            placeholder="Mobile No."
                            onChange={this.onValueChange}
                            error={phoneErrors.length ? phoneErrors : null}
                          />
                          <Form.TextArea
                            name="feedback"
                            value={feedback}
                            placeholder="Feedback"
                            onChange={this.onValueChange}
                          />
                          <Button positive fluid size="large" onClick={this.onSubmit}>
                            Submit
                          </Button>
                        </Form>
                      </Grid.Column>
                    </Grid>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
}

const mapStateToProps = (state) => {
  const { user: { isLoggedIn, userDetails } } = state;
  return { isLoggedIn, userDetails };
};

const mapDispatchToProps = { };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactUsComp));
