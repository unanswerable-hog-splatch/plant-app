import './greencard.css'

export default function GreenCardInfo ({plant}) {

    const givenTime = (date) => new Date(date * 1000).toLocaleDateString("en-US")


    return (
        <div className='greencard-info'>
            <div>
                <h1 className='greencard-plant-name'>{plant.nickname}</h1>
                <h2>{plant.species}</h2>
                <h3>RESIDENT SINCE: {givenTime(plant.dateAdded)}</h3>
                <h3>{plant.category.toUpperCase()}</h3>
                <h3>Last Watering: {givenTime(plant.lastWaterDate)}</h3>
                <h3>Water Frequency: Every {plant.waterFrequency} days</h3>
                {plant.lastFertilizeDate ? <h3>Last Fertilized: {givenTime(plant.lastFertilizeDate)}</h3> : <h3>Not Fertilized</h3>}
                {plant.fertilizeFrequenccy ? <h3>Fertilize Frequency: Every {plant.fertilizeFrequenccy} days</h3> : ""}
            </div>
        </div>
    )
}