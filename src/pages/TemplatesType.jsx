import React, { useState } from 'react';
import { Input } from 'antd';

import TemplatesList from '../features/Templates/TemplatesList';
import Row from '../ui/Row';
import { useTemplatesByType } from '../hooks/useTemplate';
import Spinner from '../ui/Spinner';
import { useParams } from 'react-router-dom';
function TemplatesType() {
  const { templateType } = useParams();
  const [search, setSearch] = useState(null);
  const { data, isLoading } = useTemplatesByType(templateType, search ? 'search=' + search : '');
  return (
    <Row type="ver" classNames="pt-[2rem] px-[2rem]">
      <div className="flex items-center my-[0.6rem] justify-between">
        {isLoading || <h1 className="text-[2rem] font-semibold">Template gallery / {data.type.type}</h1>}
        <div className="min-w-[240px]">
          <Input placeholder="Find template..." onPressEnter={(e) => setSearch(e.target.value)} />
        </div>
      </div>

      {isLoading || (
        <div className="flex items-center">
          <img
            src={data.type.imagePath}
            alt=""
            className="h-[2.4rem] w-[2.4rem] min-w-[2.4rem] mr-[1.2rem] rounded-lg"
          />
          <h2 className="text-[2rem] font-semibold">{data.type.type} templates</h2>
        </div>
      )}
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {data.templates.length === 0 ? <span>No templates found</span> : <TemplatesList templates={data.templates} />}
        </>
      )}
    </Row>
  );
}

export default TemplatesType;
