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
import { useMutation } from "@apollo/client";
import { UPDATE_PLANT } from "../../utils/mutations";

export default function LastWaterForm({ plant }) {
    const [ updatePlant ] = useMutation(UPDATE_PLANT)

    const onFinish = async (values) => {


        values.lastWaterDate = Number(values.lastWaterDate.startOf("day").format("X"))



            
        try {
            await updatePlant({
                variables: { ...values, _id: plant._id }
            })
        } catch (err) {
            console.error(err)
        }
    

        // setGreenCardVisible(!greenCardVisible);
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Failed', errorInfo)
    };


    return (
        <div>
            <Form
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    
                >
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
                </Form>
        </div>
    )
}
