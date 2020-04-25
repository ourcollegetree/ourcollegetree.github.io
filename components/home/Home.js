import React from 'react';
import {
  Grid, Header, Divider,
} from 'semantic-ui-react';
import Router from 'next/router';
import Axios from 'axios';

class HomeComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
        <div className="bgImgHome">
          {/* <HeaderComp opaque /> */}
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, right: 0,
          }}
          >
            <div style={{
              width: '100%', float: 'right', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            >
                <div className="textOnImg" style={{ padding: '1%' }}>
                <p style={{fontSize: 50}}>WELCOME.</p>
                <p style={{fontSize: 50}}>Climb Our College Tree Now!</p>
                </div>
            </div>
            </div>
            </div>
    );
  }
}




export default HomeComp;
