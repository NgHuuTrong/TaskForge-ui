import React, { useState } from 'react';
import { Modal } from 'antd';

import CreateList from './component/CreateList';
import CreateBoard from './component/CreateBoard';
import MenuDropdown from '../../ui/MenuDropdown';
import { TemplatesList } from './Templates';
import CreateWorkspace from '../../ui/CreateWorkspace';
import Button from '../../ui/Button';
import { useTemplates } from '../../hooks/useTemplate';
import Spinner from '../../ui/Spinner';

function CreateBtn() {
  const [openModal, setOpenModal] = useState(false);
  const [createHistory, setCreateHistory] = useState([{ title: null, component: 'CreateList' }]);
  const { templates, isLoading } = useTemplates('sort=name&limit=10');

  const renderComponent = (component) => {
    if (isLoading) return <Spinner />;
    if (component.startsWith('CreateWithTemplate')) {
      const id = Number(component.split([' '])[1]);
      const template = templates.find((el) => el.id === id);
      return <CreateBoard onAddHistory={setCreateHistory} template={template} />;
    }
    return (
      <>
        {component === 'CreateList' && <CreateList setCreateHistory={setCreateHistory} setOpenModal={setOpenModal} />}
        {component === 'CreateBoard' && <CreateBoard onAddHistory={setCreateHistory} />}
        {component === 'TemplatesList' && <TemplatesList onAddHistory={setCreateHistory} templates={templates} />}
      </>
    );
  };

  return (
    <>
      <MenuDropdown
        onBack={() => setCreateHistory((prev) => prev.slice(0, -1))}
        onReset={() => setCreateHistory((prev) => prev.slice(0, 1))}
        history={createHistory}
        renderComponent={renderComponent}
      >
        <Button size="normal">Create</Button>
      </MenuDropdown>
      <Modal centered open={openModal} width={1200} footer={false} title="" onCancel={() => setOpenModal(false)}>
        <CreateWorkspace closeModal={() => setOpenModal(false)} />
      </Modal>
    </>
  );
}

export default CreateBtn;
