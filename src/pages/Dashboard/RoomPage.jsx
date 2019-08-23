import React, { Component } from 'react';
import { TableComponent, HeadingComponent, FormComponent } from '../../components/Dashboard';
import styles from './style.scss';

class RoomPage extends Component {
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
        add: true,
      },
      views: 'TABLE',
    };
  }

  onChangerView = () => {
    if (this.state.views === 'TABLE') {
      this.setState({
        views: 'FORM',
      });
    } else {
      this.setState({
        views: 'TABLE',
      });
    }
  };

  render() {
    const View = () => {
      if (this.state.views === 'TABLE') {
        return <TableComponent info={this.state.infoTable} onChangerView={this.onChangerView} />;
      }
      return <FormComponent onChangerView={this.onChangerView} onAdd={this.onAdd} />;
    };
    return (
      <div className={styles.content}>
        <HeadingComponent info={this.state.info} />
        {View()}
      </div>
    );
  }
}

export default RoomPage;
