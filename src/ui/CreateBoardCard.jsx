import React, { useState } from 'react';
import Spinner from './Spinner';
import CreateBoard from '../features/Header/component/CreateBoard';
import { TemplatesList } from '../features/Header/Templates';
import MenuDropdown from './MenuDropdown';
import { useTemplates } from '../hooks/useTemplate';

function CreateBoardCard({ initialValues, placement = 'right' }) {
  const [createHistory, setCreateHistory] = useState([{ title: 'Create Board', component: 'CreateBoard' }]);
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
        {component === 'CreateBoard' && <CreateBoard onAddHistory={setCreateHistory} initialValues={initialValues} />}
        {component === 'TemplatesList' && <TemplatesList onAddHistory={setCreateHistory} templates={templates} />}
      </>
    );
  };

  return (
    <MenuDropdown
      placement={placement}
      onBack={() => setCreateHistory((prev) => prev.slice(0, -1))}
      onReset={() => setCreateHistory((prev) => prev.slice(0, 1))}
      history={createHistory}
      renderComponent={renderComponent}
    >
      <button className="w-[19%] aspect-video flex items-center justify-center bg-[--color-grey-300] rounded-md hover:bg-[--color-grey-300] mr-[2%] mb-[2%]">
        <span>Create new board</span>
      </button>
    </MenuDropdown>
  );
}

export default CreateBoardCard;
