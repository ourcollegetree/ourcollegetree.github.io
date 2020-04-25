import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import {
  Image, Grid, Form, Input, Message, Header, Divider, Dropdown, TextArea,
} from 'semantic-ui-react';


class SignUp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      email: '',
      emailErrors: [],
      password: '',
      passwordErrors: [],
      errors: [],
      college: '',
      collegeErrors: [],
      work: '',
      workErrors: [],
      name: '',
      nameErrors: [],
      collegeOptions: [{
        key: 1, text: 'Osmania University', value: 'ou'
      }],
      course: '',
      courseErrors: [],
      specializationOptions: [
        {key: 1, text: 'Electronics & Communications', value: 'ece'},
        {key: 1, text: 'Electrical Engineering', value: 'eee'},
        {key: 1, text: 'Mechanical Engineering', value: 'mech'},
        {key: 1, text: 'Civil Engineering', value: 'civil'},
        {key: 1, text: 'Computer Science', value: 'cs'},
        {key: 1, text: 'Bio-Medical Engineering', value: 'bme'},
    ]
    };
  }

  onChange = (e) => {
    const { name, value } = e.target;
    const nameErrors = `${name}Errors`;
    this.setState({ [name]: value, [nameErrors]: [], errors: [] });
  }

  render() {
    const { isLoading, email, emailErrors, password, passwordErrors, errors, specializationOptions, collegeOptions, course, courseErrors, college, workErrors, work, nameErrors, name } = this.state;
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
          <Header color="yellow" as="h1" textAlign="center">Create an account</Header>
          <Form onSubmit={this.onSubmit} error={errors.length > 0} loading={isLoading}>
          <Form.Field>
                <lable style={{color: "yellow"}}>Full Name</lable><Input name="email" type="text" placeholder="Full Name" onChange={this.onChange} value={name} error={nameErrors.length ? nameErrors.join() : null} />
                </Form.Field>
            <Form.Field>
                <lable style={{color: "yellow"}}>Email Address *</lable><Input name="email" type="text" placeholder="Email Address" onChange={this.onChange} value={email} error={emailErrors.length ? emailErrors.join() : null} />
                </Form.Field>
            <Form.Field>
            <lable style={{color: "yellow"}}>Password *</lable>
                <Input name="password" type="password" placeholder="Password" onChange={this.onChange} value={password} error={passwordErrors.length ? passwordErrors.join() : null} />
                </Form.Field>
                <Form.Field>
                  <label style={{color: "yellow"}}>College *</label>
                <Dropdown
                  value={college}
                  options={collegeOptions}
                  label="College"
                  onChange={(e,{value}) => this.setState({ college: value })}
                  fluid
                  placeholder="Select your College"
                  selection
                />
                </Form.Field>
                <Form.Field>
                  <label style={{color: "yellow"}}>Specialization *</label>
                <Dropdown
                  value={course}
                  options={specializationOptions}
                  label="College"
                  onChange={(e,{value}) => this.setState({ course: value })}
                  fluid
                  placeholder="Select your Specialization"
                  selection
                />
                </Form.Field>

                {/* WORK */}
                
                <Form.Field>
            <lable style={{color: "yellow"}}>Current Company *</lable>
                <Input name="password" type="password" placeholder="Password" onChange={this.onChange} value={password} error={passwordErrors.length ? passwordErrors.join() : null} />
                </Form.Field>
                <Form.Field>
                  <label style={{color: "yellow"}}>Company Location*</label>
                <Dropdown
                  value={college}
                  options={collegeOptions}
                  label="College"
                  onChange={(e,{value}) => this.setState({ college: value })}
                  fluid
                  placeholder="Select your College"
                  selection
                />
                </Form.Field>
                <Form.Field>
            <lable style={{color: "yellow"}}>Designation *</lable>
                <Input name="password" type="password" placeholder="Password" onChange={this.onChange} value={password} error={passwordErrors.length ? passwordErrors.join() : null} />
                </Form.Field>
                <Form.Field>
            <lable style={{color: "yellow"}}>Job Description *</lable>
                <TextArea name="password" type="password" placeholder="Password" onChange={this.onChange} value={password} error={passwordErrors.length ? passwordErrors.join() : null} />
                </Form.Field>

                <Form.Field>
                <lable style={{color: "yellow"}}>Work Experience (if any)</lable><Input name="work" type="number" min="0" step="0.1" placeholder="Work Experience" onChange={this.onChange} value={work} error={workErrors.length ? workErrors.join() : null} />
                </Form.Field>
               
            <Message hidden={!errors.length} error list={errors} />
            <Form.Button content="Sign Up" positive fluid></Form.Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Divider horizontal><p style={{color: "white"}}>Or</p></Divider>
          <Grid columns={1}>
            <Grid.Column>
            <Header inverted as="h5" textAlign="center">
                  Already have an account?
                  <Link href="/login" passHref><a title="Log In"> Log In</a></Link>
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

export default withRouter(SignUp);
