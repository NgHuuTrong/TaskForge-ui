import React, { useState } from 'react';
import { BsHandIndex } from 'react-icons/bs';
import { Input } from 'antd';
import FormRow from '../../../ui/FormRow';
import Button from '../../../ui/Button';
import BoardDetail from './BoardDetail';
import BoardBackground from './BoardBackground';
import BoardTemplate from './BoardTemplate';

function CreateBoard({ template, onAddHistory }) {
  const [titleBoard, setTitleBoard] = useState(template ? template.name : '');
  const handleChangeTextInput = (e) => {
    setTitleBoard(e.target.value);
  };
  return (
    <div className="p-[12px]">
      {template ? <BoardTemplate template={template} /> : <BoardBackground />}
      <div className="mt-[16px]">
        <FormRow
          type="ver"
          label="Board title"
          isCompulsory
          error={
            titleBoard?.length === 0 && (
              <>
                <BsHandIndex />
                <p className="text-[14px]">Board title is required</p>
              </>
            )
          }
        >
          <Input status={titleBoard?.length === 0 && 'error'} value={titleBoard} onChange={handleChangeTextInput} />
        </FormRow>
      </div>

      <BoardDetail />

      <div className="flex flex-col gap-[8px] mt-[16px]">
        <Button size="normal" disabled={titleBoard === ''} classNames="justify-center">
          Create
        </Button>
        {!template && (
          <Button
            size="normal"
            type="icon"
            classNames="justify-center"
            onClick={() =>
              onAddHistory((prev) => [...prev, { title: 'Create from template', component: 'TemplatesList' }])
            }
          >
            Start with a template
          </Button>
        )}
      </div>
    </div>
  );
}

export default CreateBoard;
