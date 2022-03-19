import { useState } from "react";
import { Modal, Button } from "antd";

export default function GreenCard({ plant }) {
    const [ greenCardVisible, setGreenCardVisible ] = useState(false);
    console.log(plant)
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
                width={1000}>
                <h1>{plant.nickname}</h1>
                <h2>{plant.species}</h2>
                <h3>{plant.dateAdded}</h3>
            </Modal>
        </>
    )
}