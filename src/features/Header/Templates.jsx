import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';

import ButtonImage from '../../ui/ButtonImage';
import Button from '../../ui/Button';
import MenuDropdown from '../../ui/MenuDropdown';
import CreateBoard from './component/CreateBoard';
import { useTemplates } from '../../hooks/useTemplate';
import Spinner from '../../ui/Spinner';

export const TemplatesList = ({ onAddHistory, templates }) => (
  <div className="flex flex-col gap-1 w-[300px] mt-2">
    <span className="text-[1.2rem] font-medium text-[--color-subtext]">Top Templates</span>
    {templates.map((template) => (
      <div
        key={template.id}
        onClick={() =>
          onAddHistory((prev) => [...prev, { title: template.name, component: 'CreateWithTemplate ' + template.id }])
        }
      >
        <ButtonImage height="40px" url={template.defaultBackground} title={template.name} hasStarred={false} />
      </div>
    ))}
  </div>
);

const Templates = () => {
  const [templateHistory, setTemplateHistory] = useState([{ title: null, component: 'TemplatesList' }]);
  const { templates, isLoading } = useTemplates('sort=name&limit=12');

  const renderComponent = (component) => {
    if (isLoading) return <Spinner />;
    if (component.startsWith('CreateWithTemplate')) {
      const id = Number(component.split([' '])[1]);
      const template = templates.find((el) => el.id === id);
      return <CreateBoard onAddHistory={setTemplateHistory} template={template} />;
    }
    return (
      <>{component === 'TemplatesList' && <TemplatesList onAddHistory={setTemplateHistory} templates={templates} />}</>
    );
  };
  return (
    <MenuDropdown
      onBack={() => setTemplateHistory((prev) => prev.slice(0, -1))}
      onReset={() => setTemplateHistory((prev) => prev.slice(0, 1))}
      history={templateHistory}
      renderComponent={renderComponent}
    >
      <Button type="icon" size="normal" classNames="w-full flex justify-between">
        Templates <DownOutlined />
      </Button>
    </MenuDropdown>
  );
};

export default Templates;
