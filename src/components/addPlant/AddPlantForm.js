import { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Switch,
} from 'antd';

import { useQuery, useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { GET_ME } from '../../utils/queries';
import { ADOPT_PLANT } from '../../utils/mutations';

export default function AddPlantForm() {
  const today = new Date().setHours(0, 0, 0, 0);
  console.log('today', today / 1000)

  // Set defaults for category, plantIcon, waterFrequency, watered
  const [plantFormData, setPlantFormData] = useState({
    species: '',
    category: 'cactus',
    nickname: '',
    plantIcon: 'cactus',
    watered: true,
    fertilized: false,
    waterFrequency: 1,
    fertilizeFrequency: 180,
    lastWaterDate: today,
    lastFertilizeDate: today
  })

  const onFinish = (plantFormData) => {
    console.log('Success:', plantFormData);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlantFormData({ ...plantFormData, [name]: value });
  };

  return (
    <Form
      // 
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{
        remember: true,
      }}
      // onSubmit={handleFormSubmit}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {/* PLANT SPECIES */}
      <Form.Item
        label="Species"
        name="species"
        onChange={handleInputChange}
        value={plantFormData.species}
        rules={[
          {
            required: true,
            message: 'Please input a species name.'
          }
        ]}>
        <Input />
      </Form.Item>
      {/* PLANT CATEGORY */}
      <Form.Item
        label="Category"
        name="category"
        onChange={handleInputChange}
        value={plantFormData.category}
      >
        <Select placeholder="Select a category for your plant">
          <Select.Option value="cactus">Cactus</Select.Option>
          <Select.Option value="shrubbery">Shrubbery</Select.Option>
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
      {/* NICKNAME */}
      <Form.Item
        label="Nickname"
        name="nickname"
        onChange={handleInputChange}
        value={plantFormData.nickname}
      >
        <Input />
      </Form.Item>
      {/* PLANT ICON */}
      <Form.Item
        label="Plant Icon"
        name="plantIcon"
        onChange={handleInputChange}
        value={plantFormData.plantIcon}>
        <Select placeholder="Select a plant icon">
          <Select.Option value="cactus">Cactus</Select.Option>
          <Select.Option value="snakePlant">Snake Plant</Select.Option>
          <Select.Option value="aloeVera">Aloe Vera</Select.Option>
          <Select.Option value="bonsaiTree">Bonsai Tree</Select.Option>
          <Select.Option value="basil">Basil</Select.Option>
        </Select>
      </Form.Item>
      {/* WATERING FREQUENCY */}
      <Form.Item
        label="Watering Frequency"
        name="waterFrequency"
        onChange={handleInputChange}
        value={plantFormData.waterFrequency}
        >
        Every
        <InputNumber label="#" />
        <Select
          defaultValue={"day(s)"}>
          <Select.Option value="day">day(s)</Select.Option>
          <Select.Option value="week">week(s)</Select.Option>
          <Select.Option value="month">month(s)</Select.Option>
          <Select.Option value="year">year(s)</Select.Option>
        </Select>
      </Form.Item>
      {/* LAST WATERING DATE */}
      <Form.Item
        label="Last Watering"
        name="lastWaterDate"
        onChange={handleInputChange}
        value={plantFormData.lastWaterDate}
        defaultValue={today}>
        <DatePicker />
      </Form.Item>
      {/* This button will make the fertilizer section appear/disappear */}
      <Form.Item label="Fertilizer?" valuePropName="checked">
        <Switch />
      </Form.Item>
      {/* FERTILIZER FREQUENCY */}
      <Form.Item
        label="Fertilizing"
        name="fertilizeFrequency"
        onChange={handleInputChange}
        value={plantFormData.species}
        defaultValue={today}>
        Every
        <InputNumber label="#" />
        <Select
        defaultValue={'months(s)'}>
          <Select.Option value="day">day(s)</Select.Option>
          <Select.Option value="week">week(s)</Select.Option>
          <Select.Option value="month">month(s)</Select.Option>
          <Select.Option value="year">year(s)</Select.Option>
        </Select>
      </Form.Item>
      {/* LAST FERTILZING DATE */}
      <Form.Item 
      label="Last Fertilizing"
      name="lastFertilizeDate"
        onChange={handleInputChange}
        value={plantFormData.species}
        defaultValue={today}>
        <DatePicker />
      </Form.Item>

      <Form.Item>
        <Button
          // disabled={!()}
          type="primary"
          htmlType='submit'>Add to Nursery</Button>
      </Form.Item>

    </Form>
  )
}


// **********USE THIS BUTTON TO MAKE THIS FORM VISIBLE

{/* <Button type="primary" onClick={() => setAddPlantVisible(true)}>
Add Plant Child
</Button>
<Modal
title='United Shelf of (name)'
centered
visible={addPlantVisible}
okButtonProps={{ disabled: true }}
onCancel={() => setAddPlantVisible(false)}
width={1000}>
<AddPlant/>
</Modal> */}

// **************** NEED THESE IMPORTS AND VARIABLES FOR MODAL
// import { Modal, Button } from 'antd';
// import { useState } from 'react';
// import 'antd/dist/antd.css';
//   const [addPlantVisible, setAddPlantVisible] = useState(false);