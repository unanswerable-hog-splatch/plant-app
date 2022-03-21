import { useState } from "react";
import { 
    Modal, 
    Button,
} from "antd";
import useHook from '../../hooks/useHook'

import GreenCardInfo from "./GreenCardInfo";
import FrequencyForm from "./FrequencyForm";
import LastWaterForm from "./LastWaterForm";

export default function GreenCard({ plant }) {
    const { selectIcon } = useHook();

    const [ greenCardVisible, setGreenCardVisible ] = useState(false);

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
                <img alt={plant.plantIcon} src={selectIcon(plant.plantIcon)} />
            </Modal>
        </>
    )
}