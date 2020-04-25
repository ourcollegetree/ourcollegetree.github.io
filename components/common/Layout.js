import React from 'react';
import HeaderComp from '../common/Header';
import FooterComp from '../common/Footer';

import {
    Divider, Sidebar, Menu, Icon,
  } from 'semantic-ui-react';

export default class Layout extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false,
      };
    }
      render() {
        const {
          children,
        } = this.props;
        return (
            <>
            <HeaderComp/>
            {' '}
            {children}
            <Divider />
            <FooterComp />
            </>
        )
      }
    }

