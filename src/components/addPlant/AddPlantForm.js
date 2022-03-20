import './plantForm.css';
import { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  InputNumber,
  Switch
} from 'antd';

// import cactus from '../../img/cactus-1.png';
import aloeVera from '../../img/aloe-vera.png';
import basil from '../../img/basil.jpg';
import bonsaiTree from '../../img/bonsai-tree.png';
import snakePlant from '../../img/snake-plant.jpg';

import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADOPT_PLANT } from '../../utils/mutations';

import useHook from '../../hooks/useHook';

export default function AddPlantForm({ addPlantVisible, setAddPlantVisible }) {
  const [adoptPlant] = useMutation(ADOPT_PLANT);
  const [fertilizerVisible, setFertilizerVisible] = useState(false);
  const [plantIcon, setPlantIcon] = useState('cactus');

  const { convertFrequency, camelCase, today, oneDay } = useHook();

  const categories = ['Cactus', 'Shrubbery', 'Herb', 'Succulent', 'Tree', 'Medicinal', 'Flower', 'Foliage', 'Fern', 'Hanging', 'Fake', 'Christmas'];
  const plantIcons = ['Cactus', 'Snake Plant', 'Aloe Vera', 'Bonsai Tree', 'Basil'];
  const frequencyUnits = ['day', 'week', 'month', 'year'];



  // This is what we do instead of onSubmit I guess
  const onFinish = async (values) => {
    const token = Auth.isLoggedIn() ? Auth.getToken() : null;
    // Stops the function if there is no auth token
    if (!token) {
      return false;
    }
    // Formatting dates
    values.waterFrequency = convertFrequency(values.waterFrequency.amount, values.waterFrequency.unit)
    values.fertilizeFrequency = convertFrequency(values.fertilizeFrequency.amount, values.fertilizeFrequency.unit)
    values.lastWaterDate = Number(values.lastWaterDate.startOf("day").format("X"));
    if (fertilizerVisible) values.lastFertilizeDate = Number(values.lastFertilizeDate.startOf("day").format("X"));

    // Determines if plant was watered or fertilized today
    values.watered = values.lastWaterDate <= today - (oneDay * values.waterFrequency);
    console.log(values.lastWaterDate)
    console.log(today - (oneDay * values.waterFrequency))
    console.log(values.watered);
    values.fertilized = values.lastFertilizeDate === today;

    try {
      await adoptPlant({
        variables: { ...values },
      });
    } catch (err) {
      console.error(err);
    }

    // Destroys modal
    setAddPlantVisible(!addPlantVisible)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleChange = (value) => {
    setPlantIcon(value);
  }


  return (
    <div className='addPlantModal'>
      <Form
        className='addPlantForm'
        labelCol={{ span: 10, offset: -2 }}
        wrapperCol={{ span: 20 }}
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{
          species: '',
          category: '',
          nickname: '',
          plantIcon: '',
          waterFrequency: 1,
          fertilizeFrequency: 180,
        }}
      >
        {/* PLANT SPECIES */}
        <Form.Item
          label="Species"
          name="species"
          rules={[
            {
              required: true,
              message: 'Please input a species name.'
            }
          ]}
        >
          <Input />
        </Form.Item>
        {/* PLANT CATEGORY */}
        <Form.Item
          label="Category"
          name="category"
          rules={[
            {
              required: true,
              message: 'Please select a category.'
            }
          ]}
        >
          <Select placeholder="Select a category for your plant">
            {/* Creates a select option for each category */}
            {categories.map((category, index) => <Select.Option key={index} value={camelCase(category)}>{category}</Select.Option>)}
          </Select>
        </Form.Item>
        {/* NICKNAME */}
        <Form.Item
          label="Nickname"
          name="nickname"
          rules={[
            {
              required: true,
              message: 'Please create a nickname.'
            }
          ]}
        >
          <Input />
        </Form.Item>
        {/* PLANT ICON */}
        <Form.Item
          label="Plant Icon"
          name="plantIcon"
          rules={[
            {
              required: true,
              message: 'Please select an icon.'
            }
          ]}
        >
          <Select
            placeholder="Select a plant icon"
            onChange={handleChange}
          >
            {plantIcons.map((icon, index) => <Select.Option key={index} value={camelCase(icon)}>{icon}</Select.Option>)}

          </Select>
        </Form.Item>
        {/* WATERING FREQUENCY */}
        <Form.Item
          label="Watering Frequency"
          name="waterFrequency"
          rules={[
            {
              required: true,
              message: 'Create a schedule.'
            }
          ]}
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
                {frequencyUnits.map((unit, index) => <Select.Option key={index} value={camelCase(unit)}>{`${unit}(s)`}</Select.Option>)}
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>
        {/* LAST WATERING DATE */}
        <Form.Item
          label="Last Watering"
          name="lastWaterDate"
          rules={[
            {
              required: true,
              message: 'Select your best guess for last watered date.'
            }
          ]}
        >
          <DatePicker />
        </Form.Item>
        {/* This button will make the fertilizer section appear/disappear */}
        <Form.Item label="Fertilizer?" valuePropName="checked">
          <Switch defaultChecked={false} onChange={() => setFertilizerVisible(!fertilizerVisible)} />
        </Form.Item>
        {/* FERTILIZER FREQUENCY */}
        <Form.Item
          label="Fertilize Frequency"
          name="fertilizeFrequency"
          style={fertilizerVisible ? null : { display: 'none' }}
          rules={[
            {
              required: true,
              message: 'Create a schedule.'
            }
          ]}
        >
          <Input.Group >
            {"Every "}
            <Form.Item
              name={["fertilizeFrequency", "amount"]}
              placeholder="#"
              noStyle>
              <InputNumber />
            </Form.Item>
            <Form.Item
              name={["fertilizeFrequency", "unit"]}
              noStyle
            >
              <Select placeholder="month(s)">
                {frequencyUnits.map((unit, index) => <Select.Option key={index} value={camelCase(unit)}>{`${unit}(s)`}</Select.Option>)}
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>
        {/* LAST FERTILZING DATE */}
        <Form.Item
          label="Last Fertilizing"
          name="lastFertilizeDate"
          style={fertilizerVisible ? null : { display: 'none' }}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType='submit'>Add to Nursery</Button>
        </Form.Item>

      </Form>
      <img
      alt={plantIcon}
      // Sets the image source depending on plant icon
      src={
          plantIcon === 'cactus' ? null
        : plantIcon === 'aloeVera' ? aloeVera 
        : plantIcon === 'basil' ? basil
        : plantIcon === 'snakePlant' ? snakePlant
        : plantIcon === 'bonsaiTree' ? bonsaiTree
        : null }/>
    </div>

  )
}
