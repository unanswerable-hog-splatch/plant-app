import Auth from '../utils/auth';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';
const { Sider, Content } = Layout;

export default function Profile() {
  const [ menuSelection, chooseMenuSelection ] = useState('gardener')
  const { loading, data } = useQuery(GET_ME);
  const gardenerData = data?.me || [];
  console.log(gardenerData);

  return (
    <Layout>
      <Sider>
        <Menu
          mode="inline"
          defaultSelectedKeys={'gardener'}
          style={{ height: '100%'}}
        >
          <Menu.Item key='gardener' onClick={() => chooseMenuSelection('gardener')}>
            Gardener
          </Menu.Item>
          <Menu.Item key='plants' onClick={() => chooseMenuSelection('plants')}>
            Plants
          </Menu.Item>
        </Menu>
      </Sider>
      <Content>
        {`${menuSelection}`}
      </Content>
    </Layout>
  )
}