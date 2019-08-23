import React, { Component } from 'react';
import { TableComponent, HeadingComponent } from '../../components/Dashboard';
import styles from './style.scss';

class UserPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      info: {
        choice: 'user',
        title: 'User of the site',
        description: "We provide amazing solutions that you can't miss",
      },
      infoTable: {
        choice: 'user',
        title: 'User Table',
        add: false,
      },
    };
  }

  render() {
    return (
      <div className={styles.content}>
        <HeadingComponent info={this.state.info} />
        <TableComponent info={this.state.infoTable} />
      </div>
    );
  }
}

export default UserPage;
