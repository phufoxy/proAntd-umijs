import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import styles from './form.scss';

class FormComponent extends Component {
  constructor(props, context) {
    super(props, context);
    const { edit, dataEdit } = this.props;
    this.state = {
      id: edit ? dataEdit.id : '',
      title: edit ? dataEdit.title : '',
      author: edit ? dataEdit.author : '',
      categories: edit ? dataEdit.categories : '',
      tags: edit ? dataEdit.tags : '',
      visibility: edit ? dataEdit.visibility : '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        if (this.props.edit) {
          // eslint-disable-next-line no-param-reassign
          values.id = this.state.id;
          this.props.onUpdate(values);
        } else {
          this.props.onAdd(values);
        }
      }
    });
  };

  onChangerView = () => {
    this.props.onChangerView();
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 20 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 20 },
        sm: { span: 14 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 4,
        },
      },
    };
    return (
      <div className={styles.form}>
        <div className={styles.formHeader}>
          <h2 className={styles.formTitle}>Customized Validation</h2>
        </div>
        <div className={styles.formContent}>
          <div className={styles.tableAdd}>
            <Button type="primary" className={styles.button} onClick={this.onChangerView}>
              Table
            </Button>
          </div>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Title" className={styles.formItem} hasFeedback>
              {getFieldDecorator('title', {
                initialValue: this.state.title,
                rules: [
                  {
                    type: 'string',
                    required: true,
                    message: 'The title is not valid',
                  },
                ],
              })(<Input className={styles.formInput} />)}
            </Form.Item>
            <Form.Item label="Author" className={styles.formItem} hasFeedback>
              {getFieldDecorator('author', {
                initialValue: this.state.author,
                rules: [
                  {
                    type: 'string',
                    required: true,
                    message: 'The author is not valid',
                  },
                ],
              })(<Input className={styles.formInput} />)}
            </Form.Item>
            <Form.Item label="Categories" className={styles.formItem} hasFeedback>
              {getFieldDecorator('categories', {
                initialValue: this.state.categories,
                rules: [
                  {
                    type: 'string',
                    required: true,
                    message: 'The categories is not valid',
                  },
                ],
              })(<Input className={styles.formInput} />)}
            </Form.Item>
            <Form.Item label="Tags" className={styles.formItem} hasFeedback>
              {getFieldDecorator('tags', {
                initialValue: this.state.tags,
                rules: [
                  {
                    type: 'string',
                    required: true,
                    message: 'The tags is not valid',
                  },
                ],
              })(<Input className={styles.formInput} />)}
            </Form.Item>
            <Form.Item label="Visibility" className={styles.formItem} hasFeedback>
              {getFieldDecorator('visibility', {
                initialValue: this.state.visibility,
                rules: [
                  {
                    type: 'string',
                    required: true,
                    message: 'The visibility is not valid',
                  },
                ],
              })(<Input className={styles.formInput} />)}
            </Form.Item>
            <Form.Item {...tailFormItemLayout} className={styles.formItem}>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(FormComponent);
