import React, { useState } from 'react';
import { Input } from 'antd';

import TemplatesList from '../features/Templates/TemplatesList';
import Row from '../ui/Row';
import { useTemplates } from '../hooks/useTemplate';
import Spinner from '../ui/Spinner';

const categories = [
  { type: 'Education', imagePath: 'https://trello.com/assets/dea39a045ff4c4d1d9b1.svg' },
  { type: 'Business', imagePath: 'https://trello.com/assets/3919e0fe0976de0298b4.svg' },
  { type: 'Design', imagePath: 'https://trello.com/assets/157c58403db677619bea.svg' },
  { type: 'Engineering', imagePath: 'https://trello.com/assets/e0b1e866de40a5468aaa.svg' },
];

function Templates() {
  // const [input, setInput] = useState('');
  const [search, setSearch] = useState(null);
  const { templates, isLoading } = useTemplates(search ? 'search=' + search : 'sort=name&limit=12');
  return (
    <Row type="ver" classNames="pt-[2rem] px-[2rem]">
      <div className="flex items-center my-[0.6rem] justify-between">
        <h1 className="text-[2rem] font-semibold">Featured categories</h1>
        <div className="min-w-[240px]">
          <Input
            placeholder="Find template..."
            // value={input}
            // onChange={(e) => setInput(e.target.value)}
            onPressEnter={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-[16px]">
        {categories.map((item) => (
          <div className="flex flex-col w-[11rem] max-w-[30%] items-center" key={item.type}>
            <img src={item.imagePath} alt="" className="w-full aspect-square rounded-lg" />
            <span className="text-[1.4rem]">{item.type}</span>
          </div>
        ))}
      </div>

      {isLoading ? (
        <Spinner />
      ) : templates.length === 0 ? (
        <span>No templates found</span>
      ) : (
        <TemplatesList templates={templates} />
      )}
    </Row>
  );
}

export default Templates;
