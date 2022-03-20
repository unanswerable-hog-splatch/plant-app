
import GreenCard from "../../components/greenCard/GreenCard"

export default function Plants({ plants }) {
    
    const mappedPlants = plants.map((plant, i) => {
        const unixTime = new Date(plant.dateAdded * 1000);

        return (
            <div key={plant._id}>
                <h1>
                    {plant.species}
                </h1>
                <h3>
                    {plant.nickname}
                </h3>
                <h3>
                    Added to shelf on: {unixTime.toLocaleDateString("en-US")}
                </h3>
                <GreenCard plant={plant} />
            </div>
        )
    });

    return (
        <>
            {mappedPlants}
        </>
    )
}