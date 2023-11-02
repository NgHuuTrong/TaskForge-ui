import React, { useState } from 'react'
import Header from './Header'

function BoardDetailLayout({title, template, backgroundPath, creator, membersList}) {
  const [background, setBackground] = useState(backgroundPath != undefined ? backgroundPath : template.img)

  return (
    <div className=''>
      <Header/>
      <div className='bg-cover flex-1 h-screen' style={{backgroundImage: `url(${background})`}}>

      </div>
    </div>
  )
}

export default BoardDetailLayout