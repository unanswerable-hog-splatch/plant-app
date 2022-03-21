import './view-plant.css'
import GreenCardInfo from '../greenCard/GreenCardInfo';
import { useState } from 'react';
import useHook from '../../hooks/useHook';
import { Badge } from 'antd';
import { useMutation } from '@apollo/client';
import { UPDATE_PLANT } from '../../utils/mutations';

export default function ViewPlant({ plant }) {
  const { selectIcon } = useHook();
  // const []
  const [updatePlant] = useMutation(UPDATE_PLANT);



  const { _id, species, plantIcon, category, nickname, dateAdded, fertilized, waterFrequency, fertilizeFrequency, lastWaterDate, lastFertilizeDate } = plant;

  let { watered } = plant;

  const onClick = async (e) => {
    e.preventDefault();
    if (!watered) {
      watered = true;


      try {
        await updatePlant({
          variables: { _id: plant._id, watered }
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
      <Badge.Ribbon
        text={watered ? 'Appreciate me!' : 'Water me!'}
        placement={'start'}

      >
        <img
          alt={plantIcon}
          src={selectIcon(plantIcon)}
          width={'45%'}
          onClick={onClick}
        />
      </Badge.Ribbon>
      {/* Put functionality here so you can water/fertilize plants */}
    </div>
  )
}