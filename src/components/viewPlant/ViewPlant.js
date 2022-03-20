import './view-plant.css'
import GreenCardInfo from '../greenCard/GreenCardInfo';
import useHook from '../../hooks/useHook';

export default function ViewPlant({ plant }) {
  const { selectIcon } = useHook();

  return (
    // Modal that pops up with plant info, plant image, and functionality
    <div className='view-plant'>
      <GreenCardInfo plant={plant} />
      <img
        alt={plant.plantIcon}
        src={selectIcon(plant.plantIcon)}
        width={'15%'} />
        {/* Put functionality here so you can water/fertilize plants */}
    </div>
  )
}