import './view-plant.css'
import GreenCardInfo from '../greenCard/GreenCardInfo';
import useHook from '../../hooks/useHook';

export default function ViewPlant({ plant }) {
  const { selectIcon } = useHook();

  return (
    <div className='view-plant'>
      <GreenCardInfo plant={plant} />
      <img
        alt={plant.plantIcon}
        src={selectIcon(plant.plantIcon)}
        width={'15%'} />
    </div>
  )
}