
import GreenCard from "../../components/greenCard/GreenCard"
import './profile.css'
import useHook from '../../hooks/useHook'


export default function Plants({ plants }) {
    const { selectIcon } = useHook();

    const mappedPlants = plants.map((plant, i) => {
        const unixTime = new Date(plant.dateAdded * 1000);

        return (
            <div className='ind-plant' key={plant._id}>
                <div>
                    <h1 className='plant-nick'>
                        {plant.nickname}
                    </h1>
                    <h3>
                    {plant.species}
                    </h3>
                </div>
                <img className='ind-plant-img' src={selectIcon(plant.plantIcon)} />
                <div className='ind-plant-footer'>
                    <h6>
                        Added to shelf on: {unixTime.toLocaleDateString("en-US")}
                    </h6>
                    <GreenCard className='ind-plant-btn' plant={plant} />
                </div>
            </div>
        )
    });

    return (
        <>
            {mappedPlants}
        </>
    )
}