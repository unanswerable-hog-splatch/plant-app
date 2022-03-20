import { useState } from "react";
import { 
    Modal, 
    Button,
    Form,
    Input,
    InputNumber,
    Select
} from "antd";
import { useMutation } from "@apollo/client";
import { UPDATE_PLANT } from "../../utils/mutations";

export default function GreenCard({ plant }) {
    console.log(plant)
    const [ updatePlant ] = useMutation(UPDATE_PLANT)
    const [ greenCardVisible, setGreenCardVisible ] = useState(false);
    const unixTime = (date) => new Date(date * 1000).toLocaleDateString("en-US")
    // const unixTime = new Date(plant.dateAdded * 1000);
    const frequencyUnits = ['day', 'week', 'month', 'year'];
    const convertFrequency = (amount, unit) => {
        let multiplier;
        switch (unit) {
          default: multiplier = 1;
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

    const onFinish = async (values) => {
        console.log(values)
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed', errorInfo)
    };

    return (
        <>
            <Button type="primary" onClick={() => setGreenCardVisible(true)}>
                Green Card
            </Button>
            <Modal
                title="Permanent Plant Residency"
                centered
                visible={greenCardVisible}
                okButtonProps={{ disabled: true }}
                onCancel={() => setGreenCardVisible(false)}
                width={800}>
                <h1>{plant.nickname}</h1>
                <h2>{plant.species}</h2>
                <h3>RESIDENT SINCE: {unixTime(plant.dateAdded)}</h3>
                <h3>{plant.category.toUpperCase()}</h3>
                <h3>Last Watering: {unixTime(plant.lastWaterDate)}</h3>
                <Form
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    initialValues={{
                        _id: plant._id,
                        waterFrequency: plant.waterFrequency,
                    }}
                >
                    <Form.Item
                        label="Change Water Frequency"
                        name="waterFrequency"
                    >
                        <Input.Group>
                            {" Every "}
                            <Form.Item
                                name={["waterFrequency", "amount"]}
                                noStyle
                            >
                                <InputNumber />
                            </Form.Item>
                            <Form.Item
                                name={["waterFrequency", "unit"]}
                                noStyle
                            >
                                <Select
                                    placeholder="day(s)"
                                    noStyle>
                                        {frequencyUnits.map((unit, index) => <Select.Option key={index} values={unit}>{`${unit}`}</Select.Option>)}
                                    </Select>
                            </Form.Item>
                        </Input.Group>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit">
                                Update Plant
                            </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}