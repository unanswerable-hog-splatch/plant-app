import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Gardener from './Gardener'
import Plants from './Plants'

import './profile.css'

const { Sider } = Layout;

export default function Profile() {
  const [menuSelection, setMenuSelection] = useState('gardener')
  const { data } = useQuery(QUERY_ME);
  const gardenerData = data?.me || [];

  function Content() {
    return menuSelection === 'gardener' ? (<div className='my-info-list'>
                                              <Gardener gardener={gardenerData} />
                                          </div>)
                                        : (<div className='profile-list'>
                                              <Plants plants={gardenerData.plants} />
                                          </div>)
  }

  return (
    <Layout className='profile'>
      <Sider>
        <Menu
          className='profile-menu'
          mode="inline"
          defaultSelectedKeys={'gardener'}
          style={{ height: '100%' }}
        >
          <Menu.Divider />
          <Menu.Item key='gardener' onClick={() => setMenuSelection('gardener')}>
            Info
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key='plants' onClick={() => setMenuSelection('plants')}>
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
