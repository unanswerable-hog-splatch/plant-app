import GreenCardInfo from '../greenCard/GreenCardInfo';

import useHook from '../../hooks/useHook';
import { useMutation } from '@apollo/client';
import { UPDATE_PLANT } from '../../utils/mutations';

import './view-plant.css'


export default function ViewPlant({ plant }) {
  const { selectIcon } = useHook();

  const [updatePlant] = useMutation(UPDATE_PLANT);



  const { _id, plantIcon} = plant;

  let { watered } = plant;

  const onClick = async (e) => {
    e.preventDefault();
    if (!watered) {
      watered = true;

      try {
        await updatePlant({
          variables: { _id: _id, watered }
        })
      } catch (err) {
        console.error(err);
      }
    }
  }

  return (
    // Modal that pops up with plant info, plant image, and functionality
    <div className='view-plant'>
      <GreenCardInfo plant={plant} />
      <div className='water-me'>
        {watered ? <h2 className='not-thirsty'> THANKS!</h2> : <h3 className='thirsty'> SO THIRSTY!</h3>}
        <img
          className={!watered ? 'thirsty-img' : 'not-thirsty-img'}
          src={selectIcon(plantIcon)}
          alt={plantIcon}
          onClick={onClick}
        />
      </div>
      {/* Put functionality here so you can water/fertilize plants */}
    </div>
  )
}