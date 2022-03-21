import { useState } from "react";
import { 
    Modal, 
    Button,
    Form,
    Input,
    InputNumber,
    Select,
    DatePicker
} from "antd";
import useHook from '../../hooks/useHook'

import { useMutation } from "@apollo/client";
import { UPDATE_PLANT } from "../../utils/mutations";
import GreenCardInfo from "./GreenCardInfo";
import FrequencyForm from "./FrequencyForm";
import LastWaterForm from "./LastWaterForm";

export default function GreenCard({ plant }) {
    const { selectIcon } = useHook();

    console.log(plant)
    const [ greenCardVisible, setGreenCardVisible ] = useState(false);
    // const [ updatePlant ] = useMutation(UPDATE_PLANT)
    // const frequencyUnits = ['day', 'week', 'month', 'year'];
    // const convertFrequency = (amount, unit) => {
    //     let multiplier;
    //     switch (unit) {
    //       default: multiplier = 1;
    //         break;
    //       case ('week'): multiplier = 7;
    //         break;
    //       case ('month'): multiplier = 30;
    //         break;
    //       case ('year'): multiplier = 365;
    //         break;
    //     }
    //     return multiplier * amount;
    // }

    // const onFinish = async (values) => {
    //     console.log(values)

    //     values.waterFrequency = convertFrequency(values.waterFrequency.amount, values.waterFrequency.unit)
    //     const waterFrequency = values.waterFrequency
    //     if (values.lastWaterDate = !undefined) {
    //         values.lastWaterDate = Number(values.lastWaterDate.startOf("day").format("X"))
    //         return values.lastWaterDate
    //     }


    //     if (waterFrequency || values.lastWaterDate) {
            
    //     console.log(values)
    //     try {
    //         await updatePlant({
    //             variables: { ...values, _id: plant._id }
    //         })
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    //     // setGreenCardVisible(!greenCardVisible);
    // }

    // const onFinishFailed = (errorInfo) => {
    //     console.log('Failed', errorInfo)
    // };

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
                <GreenCardInfo plant={plant}/>
                <FrequencyForm plant={plant} />
                <LastWaterForm plant={plant} />
                {/* <Form
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
                    <Form.Item
                        label="Update Last Water Date:"
                        name="lastWaterDate"
                    >
                        <DatePicker />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit">
                                Update Plant
                            </Button>
                    </Form.Item>
                </Form> */}
                <img alt={plant.plantIcon} src={selectIcon(plant.plantIcon)} />
            </Modal>
        </>
    )
}