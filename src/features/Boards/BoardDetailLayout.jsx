import React, { useState } from 'react';
import SubHeader from './SubHeader';
import Header from '../Header/Header';
import BoardContent from './BoardContent';

function BoardDetailLayout({ title, template, backgroundPath, creator, membersList }) {
  const [background, setBackground] = useState(backgroundPath != undefined ? backgroundPath : template.img);

  return (
    <div className="bg-cover h-screen" style={{ backgroundImage: `url(${background})` }}>
      <Header />
      <SubHeader
        setBackground={setBackground}
        background={background}
        title={title}
        creator={creator}
        membersList={membersList}
      />
      <div className='px-[2rem]'>
        <BoardContent />
      </div>
    </div>
  );
}

export default BoardDetailLayout;
