import { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

export default function AddPlant() {


  return (
    <Form
      // 
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
    >
      <Form.Item label="Species">
        <Input />
      </Form.Item>
      <Form.Item label="Category">
        <Select>
          <Select.Option value="cactus">Cactus</Select.Option>
          <Select.Option value="herb">Herb</Select.Option>
          <Select.Option value="succulent">Succulent</Select.Option>
          <Select.Option value="tree">Tree</Select.Option>
          <Select.Option value="medicinal">Medicinal</Select.Option>
          <Select.Option value="flower">Flower</Select.Option>
          <Select.Option value="foliage">Foliage</Select.Option>
          <Select.Option value="fern">Fern</Select.Option>
          <Select.Option value="hanging">Hanging</Select.Option>
          <Select.Option value="fake">Fake</Select.Option>
          <Select.Option value="christmas">Christmas</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item label="Nickname">
        <Input />
      </Form.Item>
      <Form.Item label="Plant Icon">
        <Select>
          <Select.Option value="cactus">Cactus</Select.Option>
          <Select.Option value="snakePlant">Snake Plant</Select.Option>
          <Select.Option value="aloeVera">Aloe Vera</Select.Option>
          <Select.Option value="bonsaiTree">Bonsai Tree</Select.Option>
          <Select.Option value="basil">Basil</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Watering">
        Every
        <InputNumber label="#" />
        <Select>
          {/* The choice of daily should get rid of the InputNumber field */}
          <Select.Option value="day">day(s)</Select.Option>
          <Select.Option value="week">week(s)</Select.Option>
          <Select.Option value="month">months(s)</Select.Option>
          <Select.Option value="year">year(s)</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Last Watering">
        <DatePicker />
      </Form.Item>
      {/* This button will make the fertilizer section appear/disappear */}
      <Form.Item label="Fertilizer?" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Fertilizing">
        Every
        <InputNumber label="#" />
        <Select>
          {/* The choice of daily should get rid of the InputNumber field */}
          <Select.Option value="day">day(s)</Select.Option>
          <Select.Option value="week">week(s)</Select.Option>
          <Select.Option value="month">months(s)</Select.Option>
          <Select.Option value="year">year(s)</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Last Fertilizing">
        <DatePicker />
      </Form.Item>

      <Form.Item>
        <Button type="primary">Add to Nursery</Button>
      </Form.Item>

    </Form>
  )
}