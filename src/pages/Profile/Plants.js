

export default function Plants({ plants }) {
    const mappedPlants = plants.map((plant, i) => {
        return (
            <h1>
                {plant._id}
            </h1>
        )
    });

    return (
        <div>
            {mappedPlants}
        </div>
    )
}