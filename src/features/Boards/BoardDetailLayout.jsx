import React, { useState } from 'react'
import Header from './Header'

function BoardDetailLayout({title, template, backgroundPath, creator, membersList}) {
  const [background, setBackground] = useState(backgroundPath != undefined ? backgroundPath : template.img)

  return (
    <div className='bg-cover h-screen' style={{backgroundImage: `url(${background})`}}>
      <Header background={background} title={title} creator={creator} membersList={membersList}/>
      
      
    </div>
  )
}

export default BoardDetailLayout