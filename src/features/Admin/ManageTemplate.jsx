import React, { useState } from 'react';
import { Button, Space, Table, Tag, Popconfirm, Modal } from 'antd';
import { useTemplates } from '../../hooks/useTemplate';
import { useDeleteTemplate } from '../../hooks/useAdmin';
const tagColors = [
  'magenta',
  'red',
  'volcano',
  'orange',
  'gold',
  'lime',
  'green',
  'cyan',
  'blue',
  'geekblue',
  'purple',
];

function ManageTemplate() {
  const { isLoading, templates } = useTemplates('');
  const { isDeleting, deleteTemplateById } = useDeleteTemplate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      render: (_, { type }) => {
        let color = tagColors[type.length % 11];
        return <Tag color={color}>{type.toUpperCase()}</Tag>;
      },
    },
    {
      title: 'Default List',
      dataIndex: 'defaultList',
      key: 'defaultList',
      render: (_, { defaultList }) => {
        return (
          <>
            {defaultList.map((item, index) => {
              return (
                <Tag color={tagColors[item.length % 11]} key={index} className="mb-2">
                  {item.toUpperCase()}
                </Tag>
              );
            })}
          </>
        );
      },
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'action',
      render: (item) => {
        return (
          <div>
            <Button className="w-full bg-blue-500 text-white mb-2" onClick={() => setIsModalOpen(item)}>
              Edit
            </Button>
            <Popconfirm
              title="Delete the task"
              description="Are you sure to delete this template?"
              onConfirm={() => {
                try {
                  deleteTemplateById(item.id);
                } catch (e) {
                  console.log("Couldn't delete template'");
                }
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button danger className="w-full">
                Delete
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];
  if (isLoading) {
    return <></>;
  }

  return (
    <div className="px-32 pt-32 flex-1 mb-4 overflow-scroll">
      <div className="text-5xl font-medium mb-8">Template</div>
      <Table columns={columns} dataSource={templates} className="w-full" row />
      <Modal
        title="Edit template"
        open={isModalOpen}
        classNames={{ header: 'p-8', body: 'px-8', footer: 'p-8' }}
        onCancel={() => setIsModalOpen(false)}
      >
        <p>ID: {isModalOpen.id}</p>
        <p>Name: {isModalOpen.name}</p>
        <p>Type: {isModalOpen.type}</p>
        <p>Default list:</p>
        {isModalOpen?.defaultList?.map((item, index) => {
          return (
            <Tag color={tagColors[item.length % 11]} key={index} className="mb-2">
              {item.toUpperCase()}
            </Tag>
          );
        })}
      </Modal>
    </div>
  );
}

export default ManageTemplate;
