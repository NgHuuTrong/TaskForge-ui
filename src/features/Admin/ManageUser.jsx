import React from 'react';
import { Space, Spin, Table, Tag } from 'antd';
import { useUsers } from '../../hooks/useAdmin';
import { CheckCircleTwoTone, CloseCircleTwoTone } from '@ant-design/icons';
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Username',
    dataIndex: 'username',
    key: 'username',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
    render: (_, { role }) => {
      let color = role == 'USER' ? 'geekblue' : 'green';
      return <Tag color={color}>{role.toUpperCase()}</Tag>;
    },
  },
  {
    title: 'Status',
    dataIndex: 'active',
    key: 'active',
    render: (_, { active }) => {
      if (active) {
        return (
          <div className="ml-8">
            <CheckCircleTwoTone twoToneColor="#52c41a" />
          </div>
        );
      } else {
        return (
          <div className="ml-8">
            <CloseCircleTwoTone twoToneColor="#eb2f96" />
          </div>
        );
      }
    },
  },
];

function ManageUser() {
  const { isLoading, users } = useUsers();
  if (isLoading) {
    return (
      <div className="px-32 pt-32 flex-1">
        <div className="text-5xl font-medium mb-8">User</div>
        <Spin></Spin>
      </div>
    );
  }
  return (
    <div className="px-32 pt-32 flex-1 mb-4 overflow-scroll">
      <div className="text-5xl font-medium mb-8">User</div>
      <Table columns={columns} dataSource={users.map((user) => ({ ...user, key: user.id }))} className="w-full" />
    </div>
  );
}

export default ManageUser;
