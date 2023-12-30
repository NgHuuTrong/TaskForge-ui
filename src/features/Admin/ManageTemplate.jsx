import React, { useRef, useState } from 'react';
import { Button, Space, Table, Tag, Popconfirm, Modal, Input } from 'antd';
import { useTemplates } from '../../hooks/useTemplate';
import { useDeleteTemplate, useEditTemplate } from '../../hooks/useAdmin';
import { DeleteTwoTone } from '@ant-design/icons';
import { editTemplate } from '../../services/apiAdmin';
import { toast } from 'react-hot-toast';
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
  const { isEditing, editTemplateById } = useEditTemplate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
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
            <Button
              className="w-full bg-blue-500 text-white mb-2"
              onClick={() => setIsModalOpen(item)}
              disabled={isEditing}
            >
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
              <Button danger className="w-full" disabled={isEditing}>
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
      {isModalOpen && (
        <ModalTemplate modal={isModalOpen} setIsModalOpen={setIsModalOpen} editTemplateById={editTemplateById} />
      )}
    </div>
  );
}

function ModalTemplate({ modal = { id: '', name: '', type: '', defaultList: [] }, setIsModalOpen, editTemplateById }) {
  const [id, setId] = useState(modal.id);
  const [name, setName] = useState(modal.name);
  const [type, setType] = useState(modal.type);
  const [newListItem, setNewListItem] = useState('');
  const [defaultList, setDefaultList] = useState(modal.defaultList);
  const [defaultBackground, setDefaultBackground] = useState(null);
  const [isSelectImage, setIsSelectImage] = useState(false);

  const handleAddNewListItem = () => {
    if (newListItem === '') {
      return;
    }
    setNewListItem('');
    setDefaultList([...defaultList, newListItem]);
  };
  const handleSelectImage = (e) => {
    const file = e.target.files[0];
    setDefaultBackground(file);
  };
  const handleConfirm = () => {
    if (name === '') {
      toast.error('Name field cannot be empty');
      return;
    }
    if (type === '') {
      toast.error('Type field cannot be empty');
      return;
    }
    if (modal.defaultBackground == null && defaultBackground == null) {
      toast.error('Background image can not be empty');
      return;
    }
    const data = {};
    if (name !== modal.name) {
      data.name = name;
    }
    if (type !== modal.type) {
      data.type = type;
    }
    if (defaultList.length !== modal.defaultList.length) {
      data.defaultList = defaultList;
    } else {
      for (let i = 0; i < defaultList.length; i++) {
        if (modal.defaultList.indexOf(defaultList[i]) < 0) {
          data.defaultList = defaultList;
          break;
        }
      }
    }
    if (defaultBackground) {
      data.defaultBackground = defaultBackground;
    }
    if (Object.keys(data).length > 0) {
      data.id = id;
      editTemplateById(data);
    }
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Edit template"
      classNames={{ header: 'p-8 text-4xl', body: 'px-8', footer: 'p-8' }}
      open={true}
      onCancel={() => setIsModalOpen(false)}
      onOk={() => handleConfirm()}
      width={1000}
    >
      <p className="font-bold">ID: {id}</p>
      <div className="flex items-center mb-4">
        <p className="w-52  font-bold">Name:</p>{' '}
        <Input value={name} onChange={(e) => setName(e.target.value)} className="h-12"></Input>
      </div>
      <div className="flex items-center mb-4">
        <p className="w-52 font-bold">Type:</p>{' '}
        <Input value={type} onChange={(e) => setType(e.target.value)} className="h-12"></Input>
      </div>
      <div className="flex mb-4">
        <p className="font-bold w-52">Default list:</p>
        {defaultList?.map((item, index) => {
          return (
            <div
              key={index}
              className="items-center justify-center mb-2 mr-2 relative overflow-hidden inline-block"
              onClick={(e) => setDefaultList(defaultList.filter((child) => child !== item))}
            >
              <div className="w-full h-full flex items-center justify-center absolute z-20 bg-red-300 top-0 left-0 opacity-0 hover:opacity-80 rounded-md">
                <DeleteTwoTone twoToneColor="#eb2f96" />
              </div>
              <Tag color={tagColors[item.length % 11]} className="w-full items-center flex-center">
                {item.toUpperCase()}
              </Tag>
            </div>
          );
        })}
      </div>
      <div className="flex items-center mb-2">
        <p className="font-bold w-52">Add default list: </p>{' '}
        <Input
          value={newListItem}
          onChange={(e) => setNewListItem(e.target.value)}
          className="h-12 flex-1 mr-2"
        ></Input>
        <Button onClick={() => handleAddNewListItem()}>Add</Button>
      </div>
      <p className="font-bold mb-4">Default background:</p>
      <div
        className="w-full max-h-[400px] overflow-hidden items-center relative"
        onMouseEnter={() => {
          setIsSelectImage(true);
        }}
        onMouseLeave={() => {
          setIsSelectImage(false);
        }}
      >
        {isSelectImage && (
          <div className="w-full h-full flex items-center justify-center absolute z-20 bg-blue-300 top-0 left-0 rounded-md text-white text-2xl font-semibold opacity-80">
            Choose another background
          </div>
        )}
        <Input
          type="file"
          accept="image/*"
          onChange={handleSelectImage}
          className="absolute w-full h-full top-0 left-0 z-40 opacity-0"
        ></Input>

        <img
          src={defaultBackground ? URL.createObjectURL(defaultBackground) : modal.defaultBackground}
          className="w-full h-full object-scale-down"
        />
      </div>
    </Modal>
  );
}

export default ManageTemplate;
