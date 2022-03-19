

export default function Plants({ plants }) {
    console.log(plants)

    const mappedPlants = plants.map((plant, i) => {
        const unixTime = new Date(plant.dateAdded * 1000);

        return (
            <div>
                <h1>
                    {plant.species}
                </h1>
                <h3>
                    {plant.nickname}
                </h3>
                <h3>
                    Added plant on: {unixTime.toLocaleDateString("en-US")}
                </h3>
                <button>Tasks</button>
            </div>
        )
    });

    return (
        <div>
            {mappedPlants}
        </div>
    )
}