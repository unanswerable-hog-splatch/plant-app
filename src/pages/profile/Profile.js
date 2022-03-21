import Auth from '../../utils/auth';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import Gardener from './Gardener'
import Plants from './Plants'
const { Sider, Content } = Layout;

export default function Profile() {
  const [ menuSelection, chooseMenuSelection ] = useState('gardener')
  const { loading, data } = useQuery(QUERY_ME);
  const gardenerData = data?.me || [];
  console.log(gardenerData);

  console.log(data)

  function Content() {
    switch (menuSelection) {
      case 'gardener' :
        return <Gardener gardener={gardenerData} />;
        break;
      case 'plants' :
        return <Plants plants={gardenerData.plants}/>;
        break;
    }
  }

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
        {Content()}
      </Content>
    </Layout>
  )
}
