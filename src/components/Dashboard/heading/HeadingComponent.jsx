import React, { Component } from 'react';
import styles from './heading.scss';

class HeadingComponent extends Component {
  render() {
    const View = data => (
        <div className={styles.heading}>
          <div className={styles.content}>
            <h2 className={styles.contentTitle}>{data.title}</h2>
            <p className={styles.contentNorm}>{data.description}</p>
          </div>
        </div>
      );
    return View(this.props.info);
  }
}

export default HeadingComponent;
