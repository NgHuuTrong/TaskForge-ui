import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import CategoriesList from '../features/Templates/CategoriesList';
import TemplatesList from '../features/Templates/TemplatesList';

const categories = [
  {
    key: 0,
    imagePath: 'https://trello.com/assets/3919e0fe0976de0298b4.svg',
    title: 'Business',
    templates : [
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
    ]
  },
  {
    key: 1,
    imagePath: 'https://trello.com/assets/3919e0fe0976de0298b4.svg',
    title: 'Business',
    templates : [
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
    ]
  },
  {
    key: 2,
    imagePath: 'https://trello.com/assets/3919e0fe0976de0298b4.svg',
    title: 'Business',
    templates : [
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
    ]
  },
  {
    key: 3,
    imagePath: 'https://trello.com/assets/3919e0fe0976de0298b4.svg',
    title: 'Business',
    templates : [
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
    ]
  },
  {
    key: 4,
    imagePath: 'https://trello.com/assets/3919e0fe0976de0298b4.svg',
    title: 'Business',
    templates : [
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
    ]
  },
  {
    key: 5,
    imagePath: 'https://trello.com/assets/3919e0fe0976de0298b4.svg',
    title: 'Business',
    templates : [
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
    ]
  },
  {
    key: 6,
    imagePath: 'https://trello.com/assets/3919e0fe0976de0298b4.svg',
    title: 'Business',
    templates : [
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
      {
        key: 0,
        name: 'A Lead Management Pipeline by Crmble',
        backgroundPath: 'https://trello-backgrounds.s3.amazonaws.com/5e627d9fa6c99f7637f32c47/480x270/c0d295ff3ef480a03090b113f1eae301/crmble_trello_order-mgmt.png',
        avatarPath: 'https://trello-logos.s3.amazonaws.com/e4816f3c4e30318dc91ee7f3f4938c86/170.png',
        author: 'Toni, Founder @ Crmble',
        description: 'Use this board to manage inventory or swag requests with the Crmble Power-Up!',
        copies: 30069,
        views: 185224
      },
    ]
  },
]

function Templates() {

  const renderCategoriesList = () => {
    return (
      <div>
        {categories.map((item) => <TemplatesList key={item.key} category={item} />)}
      </div>
    )
  }

  return (
    <div className='mt-[16px] mb-[0] max-w-[825px] min-w-[288px] w-full'>
      <div className='flex items-center mb-[6px] mt-[6px]'>
        <div className='flex justify-between items-center w-full'>
          <h1 className='leading-[24px] text-[20px] mb-0 font-semibold'>
            Featured categories
          </h1>
          <div className='min-w-[240px]'>
            <Input
              style={{borderRadius: 0, padding: 8}}
              placeholder="Find template"
              suffix={<SearchOutlined />}
            />
          </div>
        </div>
      </div>

      <CategoriesList categoriesList={categories}/>

      {renderCategoriesList()}

    </div>
  )
}

export default Templates