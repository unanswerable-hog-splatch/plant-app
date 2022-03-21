import Auth from '../../utils/auth';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Gardener from './Gardener'
import Plants from './Plants'

import './profile.css'

const { Sider, Content } = Layout;

export default function Profile() {
  const [menuSelection, chooseMenuSelection] = useState('gardener')
  const { loading, data } = useQuery(QUERY_ME);
  const gardenerData = data?.me || [];
  console.log(gardenerData);

  console.log(data)

  function Content() {
    switch (menuSelection) {
      case 'gardener':
        return (
          <div className='my-info-list'>
            <Gardener gardener={gardenerData} />
          </div>
        );
        break;
      case 'plants':
        return (
          <div className='profile-list'>
            <Plants plants={gardenerData.plants} />
          </div>
        );
        break;
    }
  }

  return (
    <Layout className="profile-menu">
      <Sider>
        <Menu
          mode="inline"
          defaultSelectedKeys={'gardener'}
          style={{ height: '100%' }}
        >
          <Menu.Divider />
          <Menu.Item key='gardener' onClick={() => chooseMenuSelection('gardener')}>
            Info
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key='plants' onClick={() => chooseMenuSelection('plants')}>
            Greenery
          </Menu.Item>
          <Menu.Divider />

        </Menu>
      </Sider>
      <Content>
        {Content()}
      </Content>
    </Layout>
  )
}
