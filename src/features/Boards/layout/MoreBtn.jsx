import React, { useState } from 'react';
import { CgDetailsMore } from 'react-icons/cg';
import { BsPerson, BsTextParagraph } from 'react-icons/bs';

import MoreList from './MoreList';
import ChangeBg, { BgList } from './ChangeBg';
import MenuDropdown from '../../../ui/MenuDropdown';
import Button from '../../../ui/Button';
import UserDetail from '../../../ui/UserDetail';

function AboutBoard({ creator }) {
  console.log('creator', creator)
  return (
    <div className="flex flex-col gap-[1rem] min-w-[20rem] max-w-[30rem]">
      <div className="flex items-center gap-[0.8rem]">
        <BsPerson size={24} />
        <span className="text-[1.6rem] leading-[20px] font-semibold">Board creators</span>
      </div>

      <UserDetail user={creator} size={40} />

      <div className="flex items-center gap-[0.8rem]">
        <BsTextParagraph size={30} />
        <span className="text-[16px] leading-[20px] font-semibold">Description</span>
      </div>

      <span>
        Add a description to let your teammates know what this board is used for. You will get bonus points if you add
        instructions for how to collaborate!
      </span>
    </div>
  );
}

function MoreBtn({ background, setBackground, creator, curMember }) {
  const [moreHistory, setMoreHistory] = useState([{ title: null, component: 'MoreList' }]);

  const renderComponent = (component) => {
    return (
      <>
        {component === 'MoreList' && <MoreList curMember={curMember} setMoreHistory={setMoreHistory} background={background} />}
        {component === 'ChangeBackground' && <ChangeBg setMoreHistory={setMoreHistory} />}
        {component === 'AboutBoard' && <AboutBoard creator={creator.user} />}
        {component === 'PhotoBackground' && <BgList isPhotos setBackground={setBackground} />}
        {component === 'ColorBackground' && <BgList setBackground={setBackground} />}
      </>
    );
  };

  return (
    <MenuDropdown
      onBack={() => setMoreHistory((prev) => prev.slice(0, -1))}
      onReset={() => setMoreHistory((prev) => prev.slice(0, 1))}
      history={moreHistory}
      renderComponent={renderComponent}
    >
      <Button size="normal" type="icon" classNames="hover:bg-slate-600">
        <CgDetailsMore color="#fff" />
      </Button>
    </MenuDropdown>
  );
}

export default MoreBtn;
