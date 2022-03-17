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
  // console.log('today', today / 1000)
  const [adoptPlant] = useMutation(ADOPT_PLANT);

  // Set defaults for plantFormData
  const [plantFormData, setPlantFormData] = useState({
    species: '',
    category: '',
    nickname: '',
    plantIcon: '',
    watered: true,
    fertilized: false,
    waterFrequency: 1,
    fertilizeFrequency: 180,
    lastWaterDate: today,
    lastFertilizeDate: today
  })

  // Takes in a number and unit of time and returns an equivelant number of days
  const convertFrequency = (amount, unit) => {
    let multiplier;
    switch (unit) {
      case ('day'): multiplier = 1;
        break;
      case ('week'): multiplier = 7;
        break;
      case ('month'): multiplier = 30;
        break;
      case ('year'): multiplier = 365;
        break;
    }
    return multiplier * amount;
  }

  // This is what we do instead of onSubmit I guess
  const onFinish = async (values) => {

    const token = Auth.isLoggedIn() ? Auth.getToken() : null;
    // Stops the function if there is no auth token
    if (!token) {
      return false;
    }

    console.log(Auth.getProfile());

    // Converts to number of days
    const waterFrequency = convertFrequency(values.waterFrequency.amount, values.waterFrequency.unit)
    console.log('water frequency', waterFrequency)
    setPlantFormData({ ...plantFormData, waterFrequency });
    console.log('values', values)
    console.log('plantFormData', plantFormData)

    try {
      console.log(plantFormData)
      const {data} = await adoptPlant({
        variables: { plant: { plantFormData } },
      });
      console.log(data)
    } catch (err) {
      console.error(err);
    }

    // Resets plantForm
    setPlantFormData({
      species: '',
      category: '',
      nickname: '',
      plantIcon: '',
      watered: true,
      fertilized: false,
      waterFrequency: 1,
      fertilizeFrequency: 180,
      lastWaterDate: today,
      lastFertilizeDate: today
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // console.log(name)
    setPlantFormData({ ...plantFormData, [name]: value });
    // console.log(plantFormData)
  };

  return (
    <Form
      // 
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
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
      // name="waterFrequency"
      // onChange={handleInputChange}
      // value={plantFormData.waterFrequency}
      >
        <Input.Group >
          {"Every "}
          <Form.Item
            name={["waterFrequency", "amount"]}
            placeholder="#"
            noStyle>
            <InputNumber />
          </Form.Item>
          <Form.Item
            name={["waterFrequency", "unit"]}
            noStyle
          >
            <Select placeholder="day(s)">
              <Select.Option value="day">day(s)</Select.Option>
              <Select.Option value="week">week(s)</Select.Option>
              <Select.Option value="month">month(s)</Select.Option>
              <Select.Option value="year">year(s)</Select.Option>
            </Select>
          </Form.Item>
        </Input.Group>
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
          type="primary"
          htmlType='submit'>Add to Nursery</Button>
      </Form.Item>

    </Form>
  )
}


// **********USE THIS BUTTON TO MAKE THIS FORM VISIBLE

// <Button type="primary" onClick={() => setAddPlantVisible(true)}>
// Add Plant Child
// </Button>
// <Modal
// title='United Shelf of (name)'
// centered
// visible={addPlantVisible}
// okButtonProps={{ disabled: true }}
// onCancel={() => setAddPlantVisible(false)}
// width={1000}>
// <AddPlantForm/>
// </Modal>

// **************** NEED THESE IMPORTS AND VARIABLES FOR MODAL
// import { Modal, Button } from 'antd';
// import { useState } from 'react';
// import 'antd/dist/antd.css';
//   const [addPlantVisible, setAddPlantVisible] = useState(false);
// import AddPlantForm from '../components/addPlant/AddPlantForm';