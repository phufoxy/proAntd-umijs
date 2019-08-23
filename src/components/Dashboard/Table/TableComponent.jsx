import React, { Component } from 'react';
import { Table, Avatar, Dropdown, Button, Icon, Menu } from 'antd';
import moment from 'moment';
import table from './table.scss';

class TableComponent extends Component {
  handleButtonClick = event => () => {
    this.setState({
      id: event.id,
    });
  };

  onDelete = () => {
    this.props.onRemove(this.state.id);
  };

  onChangerView = () => {
    this.props.onChangerView();
  };

  onEdit = () => {
    this.props.onEdit(this.state.id);
  };

  render() {
    const { data } = this.props;
    const menu = (
      <Menu>
        <Menu.Item>
          <Button type="danger" onClick={this.onDelete}>
            Delete
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button type="primary" onClick={this.onEdit}>
            Edit
          </Button>
        </Menu.Item>
      </Menu>
    );
    const columns = [
      {
        title: 'ID',
        width: 100,
        dataIndex: 'id',
        key: 'id',
        fixed: 'left',
      },
      {
        title: 'Images',
        width: 100,
        dataIndex: 'author',
        key: 'images',
        fixed: 'left',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render: (text, row, index) => <Avatar size="large">{text.charAt(0)}</Avatar>,
      },
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        width: 150,
      },

      {
        title: 'Categories',
        dataIndex: 'categories',
        key: 'categories',
        width: 150,
      },
      {
        title: 'Tags',
        dataIndex: 'tags',
        key: 'tags',
        width: 150,
      },
      {
        title: 'Visibility',
        dataIndex: 'visibility',
        key: 'visibility',
        width: 150,
      },
      {
        title: 'Commnets',
        dataIndex: 'commnets',
        key: 'commnets',
        width: 150,
      },
      {
        title: 'Views',
        dataIndex: 'views',
        key: 'views',
        width: 150,
      },
      {
        title: 'Date_create',
        dataIndex: 'date_create',
        key: 'date_create',
        width: 150,
        render: text => <p>{moment(text).format('DD/MM/YYYY HH:mm')}</p>,
      },
      {
        title: 'Delete',
        key: 'operation',
        fixed: 'right',
        width: 100,
        render: event => (
          <Dropdown onClick={this.handleButtonClick(event)} overlay={menu} trigger={['click']}>
            <Button type="ghost">
              <Icon type="down-square" />
            </Button>
          </Dropdown>
        ),
      },
    ];
    // eslint-disable-next-line no-shadow
    const heading = data => (
      <div className={table.tableHeader}>
        <h2 className={table.tableTitle}>{data.title}</h2>
      </div>
    );
    return (
      <div className={table.table}>
        {heading(this.props.info)}
        <div className={table.tableContent}>
          {this.props.info.add && (
            <div className={table.tableAdd}>
              <Button type="primary" className={table.button} onClick={this.onChangerView}>
                ADD
              </Button>
            </div>
          )}
          <Table
            columns={columns}
            dataSource={data}
            bordered
            scroll={{ x: 1500, y: 300 }}
            hasData
            rowKey="id"
          />
        </div>
      </div>
    );
  }
}

export default TableComponent;
