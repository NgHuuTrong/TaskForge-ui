import React, { useState } from 'react';
import { Input } from 'antd';

import TemplatesList from '../features/Templates/TemplatesList';
import Row from '../ui/Row';
import { useTemplates } from '../hooks/useTemplate';
import Spinner from '../ui/Spinner';
import categories from '../data/templateType.json';
import { Link } from 'react-router-dom';

function Templates() {
  const [search, setSearch] = useState(null);
  const { templates, isLoading } = useTemplates(search ? 'search=' + search : 'sort=name&limit=12');
  return (
    <Row type="ver" classNames="pt-[2rem] px-[2rem]">
      <div className="flex items-center my-[0.6rem] justify-between">
        <h1 className="text-[2rem] font-semibold">Featured categories</h1>
        <div className="min-w-[240px]">
          <Input placeholder="Find template..." onPressEnter={(e) => setSearch(e.target.value)} />
        </div>
      </div>

      <div className="flex flex-wrap gap-[16px]">
        {categories.map((item) => (
          <Link
            to={'/templates/' + item.key}
            className="flex flex-col w-[11rem] max-w-[30%] items-center"
            key={item.key}
          >
            <img src={item.imagePath} alt="" className="w-full aspect-square rounded-lg" />
            <span className="text-[1.4rem]">{item.type}</span>
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <img
          src={'https://trello.com/assets/32ad10f52fc078a76ea4.svg'}
          alt=""
          className="h-[2.4rem] w-[2.4rem] min-w-[2.4rem] mr-[1.2rem] rounded-lg"
        />
        <h2 className="text-[2rem] font-semibold">New and suggested templates</h2>
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
