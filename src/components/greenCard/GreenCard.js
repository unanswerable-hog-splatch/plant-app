import { useState } from "react";
import {
    Modal,
    Button,
} from "antd";
import useHook from '../../hooks/useHook'

import GreenCardInfo from "./GreenCardInfo";
import FrequencyForm from "./FrequencyForm";
import LastWaterForm from "./LastWaterForm";
import './greencard.css'

export default function GreenCard({ plant }) {
    const { selectIcon } = useHook();
    const [ greenCardVisible, setGreenCardVisible ] = useState(false);

    return (
        <>
            <Button type="primary" onClick={() => setGreenCardVisible(true)}>
                Green Card
            </Button>
            <Modal
                bodyStyle={{
                    backgroundColor: 'rgb(98, 218, 98)',
                    // display: 'flex',
                    // justifyContent: 'center',
                    // textAlign: 'center'
                }}
                title="Permanent Plant Residency"
                centered
                visible={greenCardVisible}
                okButtonProps={{ disabled: true }}
                onCancel={() => setGreenCardVisible(false)}
                width={800}>
                <div className='greencard-format'>
                <div>
                    <GreenCardInfo plant={plant} />
                    <FrequencyForm plant={plant} />
                    <LastWaterForm plant={plant} />
                </div>

                <div>
                    <img className='greencard-img' alt={plant.plantIcon} src={selectIcon(plant.plantIcon)} />
                </div>
                </div>
            </Modal>
        </>
    )
}