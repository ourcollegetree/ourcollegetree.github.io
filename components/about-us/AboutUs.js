import {
    Grid, Container, Header, Item, Divider, Button,
  } from 'semantic-ui-react';
  import React from 'react';
  import Link from 'next/link';
  
  export default class AboutUsComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
      return (
        <div>
          <div className="aboutComp">
            <div style={{
              position: 'absolute', top: 0, left: 0, bottom: 0, right: 0,
            }}
            >
              <div style={{
                position: 'relative', width: '100%', height: '100%', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
              >
                <div className="textOnImg">
                  <p style={{fontSize: 50}}>About Our College Tree</p>
                  <br />
                </div>
              </div>
            </div>
          </div>
          <div>
  
            <div
              className="margin"
              style={{
                position: 'relative', width: '100%', height: '100%', display: 'flex', justifyItems: 'center', justifyContent: 'center',
              }}
            >
            <Divider hidden />
              <Container text>
                <Grid divided>
  
                  <Grid.Row>
                    <Grid.Column computer={16} tablet={16} mobile={16}>
                      <p>
                      All of us have undergone one of the most precious moments of our lives and have wonderful
experiences at one or the other phase in our lives. We have been shaped our careers or
attitudes through interactions with many people. And one such memorable phase is our college
phase. Many of us are connected to college friends through some or the other social network
and knew their whereabouts.</p>
<p>Here <b>Our College Tree</b> is presenting your own college tree to you. This tree broadly shows the
profiles, work experiences, present job locations of each of your dear batch mates, your seniors
(from the past history of your college-The Legends Journey), your juniors (People you have
ragged “Interacted with” and all the fresher’s young spirits).
This can give you Goosebumps in monitoring the vast grown and ever expanding tree of your
college community scattered all over the world. You can see your college Legends’ Journeyfrom where they have started and now what they are leading in life (Some may be CEOs,
Government Higher officials, Political Personalities, Celebrities, Activists, Responsible Citizens
etc.). You can see your batch mates or juniors who have not taken ordinary paths. Some may
have approached their targets in life like rebels.</p>
<p>So don’t wait to join your college tree today.
                              </p>
                              {' '}
                          
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            </div>
          </div>
        </div>
      );
    }
  }
  