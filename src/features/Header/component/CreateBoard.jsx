import React from 'react';
import { Form, Input } from 'antd';

import FormRow from '../../../ui/FormRow';
import Button from '../../../ui/Button';
import BoardDetail from './BoardDetail';
import BoardBackground from './BoardBackground';
import BoardTemplate from './BoardTemplate';
import { useCreateBoard } from '../../../hooks/useBoard';

function CreateBoard({ template, onAddHistory, initialValues }) {
  const { isCreating, createBoard } = useCreateBoard();
  const [form] = Form.useForm();
  const onFinish = (data) => {
    createBoard(
      { ...data, visibility: data?.type === 'Private' ? false : true },
      {
        onSuccess: () => {
          form.resetFields();
        },
      },
    );
  };
  return (
    <Form
      className="p-[12px]"
      onFinish={onFinish}
      form={form}
      disabled={isCreating}
      initialValues={initialValues || { type: 'Workspace' }}
    >
      {template ? <BoardTemplate template={template} /> : <BoardBackground />}

      <div className="mt-[16px]">
        <FormRow label="Board name" type="ver" note="This is the name of your board.">
          <Form.Item name="name" rules={[{ required: true, message: 'This field is required!' }]}>
            <Input placeholder="Your board" />
          </Form.Item>
        </FormRow>
      </div>
      <BoardDetail />
      <div className="flex flex-col gap-[8px] mt-[16px]">
        <Button size="normal" classNames="justify-center">
          Create
        </Button>
        {!template && (
          <Button
            size="normal"
            type="icon"
            classNames="justify-center"
            onClick={() =>
              onAddHistory((prev) => [...prev, { title: 'Create from template', component: 'TemplatesList' }])
            }
          >
            Start with a template
          </Button>
        )}
      </div>
    </Form>
  );
}

export default CreateBoard;
