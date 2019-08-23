import React from 'react';
import { connect } from 'dva';
import styles from './UserLayout.less';

const UserLayout = props => {
  const { children } = props;
  return <div className={styles.main}>{children}</div>;
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
