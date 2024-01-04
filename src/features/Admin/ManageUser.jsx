import React, { useEffect, useState } from 'react';
import { Button, ConfigProvider, Input, Popconfirm, Space, Spin, Table, Tag } from 'antd';
import { useEditUserStatus, useUsers } from '../../hooks/useAdmin';
import { CheckCircleTwoTone, CloseCircleTwoTone, SearchOutlined } from '@ant-design/icons';

function ManageUser() {
  const { isLoading, users } = useUsers();
  const { isEditing, editUserStatusById } = useEditUserStatus();
  const [search, setSearch] = useState('');
  const [tableData, setTableData] = useState([]);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
      render: (text) => <a>{text}</a>,
      sorter: (a, b) => a.username.localeCompare(b.username),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      render: (_, { role }) => {
        let color = role === 'USER' ? 'geekblue' : 'green';
        return <Tag color={color}>{role.toUpperCase()}</Tag>;
      },
      sorter: (a, b) => a.role.localeCompare(b.role),
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
      sorter: (a, b) => a.active - b.active,
    },
    {
      title: 'Action',
      dataIndex: 'active',
      key: 'action',
      render: (_, { id, active }) => {
        if (active) {
          return <Button onClick={() => editUserStatusById([id, false])}>Deactivate</Button>;
        } else {
          return <Button onClick={() => editUserStatusById([id, true])}>Activate</Button>;
        }
      },
    },
  ];

  useEffect(() => {
    if (search === '') {
      setTableData(users ? users : []);
    } else {
      const key = search.toLowerCase() + '';
      console.log(key, users);
      setTableData(
        users.filter(
          (item) =>
            item.id.toString().includes(key) ||
            item.username.toLowerCase().includes(key) ||
            item.name.toLowerCase().includes(key) ||
            item.email.toLowerCase().includes(key),
        ),
      );
    }
  }, [search, users]);

  if (isLoading) {
    return (
      <div className="px-32 pt-32 flex-1">
        <div className="text-5xl font-medium mb-8">Manage User</div>
        <Spin></Spin>
      </div>
    );
  }

  return (
    <div className="px-32 pt-32 flex-1 mb-4 overflow-scroll">
      <div className="text-5xl font-medium mb-8">Manage User</div>
      <SearchOutlined></SearchOutlined>
      <Input
        placeholder={'Search for user...'}
        className="rounded-lg w-[300px] mb-4 h-12 mx-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ConfigProvider
        theme={{
          token: {
            fontSize: 15,
          },
        }}
      >
        <Table columns={columns} dataSource={tableData} className="w-full" />
      </ConfigProvider>
    </div>
  );
}

export default ManageUser;
