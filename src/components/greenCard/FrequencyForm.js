import { 
    Button,
    Form,
    Input,
    InputNumber,
    Select,
} from "antd";
import { useMutation } from "@apollo/client";
import { UPDATE_PLANT } from "../../utils/mutations";
import './greencard.css'


export default function FrequencyForm({ plant }) {
    const [ updatePlant ] = useMutation(UPDATE_PLANT)
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

        values.waterFrequency = convertFrequency(values.waterFrequency.amount, values.waterFrequency.unit)
            
        try {
            await updatePlant({
                variables: { ...values, _id: plant._id }
            })
        } catch (err) {
            console.error(err)
        }
    

    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed', errorInfo)
    };


    return (
        <div className='freq-form'>
            <Form
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    
                >
                    <Form.Item
                        label="Change Water Frequency:"
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
                                    {frequencyUnits.map((unit, index) => <Select.Option key={index} value={unit}>{`${unit}`}</Select.Option>)}
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
        </div>
    )
}
