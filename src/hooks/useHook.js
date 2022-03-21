import cactus from '../img/cactus-1.png';
import aloeVera from '../img/aloe-vera.png'
import basil from '../img/basil.jpg';
import bonsaiTree from '../img/bonsai-tree.png';
import snakePlant from '../img/snake-plant.jpg';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

export default function useHook() {
  const { data } = useQuery(QUERY_ME);
  const today = (new Date().setHours(0, 0, 0, 0)) / 1000;
  const oneDay = 60 * 60 * 24;
  
  const plantIcons = ['Cactus', 'Snake Plant', 'Aloe Vera', 'Bonsai Tree', 'Basil'];
  const frequencyUnits = ['day', 'week', 'month', 'year'];

  // Takes in a number and unit of time and returns an equivelant number of days
  const convertFrequency = (amount, unit) => {
    let multiplier;
    switch (unit) {
      default: multiplier = 1;
        break;
      case ('week'): multiplier = 7;
        break;
      case ('month'): multiplier = 30;
        break;
      case ('year'): multiplier = 365;
        break;
    }
    return multiplier * amount;
  }

  const selectIcon = (iconStr) => {
    return iconStr === 'cactus' ? cactus
        : iconStr === 'aloeVera' ? aloeVera 
        : iconStr === 'basil' ? basil
        : iconStr === 'snakePlant' ? snakePlant
        : iconStr === 'bonsaiTree' ? bonsaiTree
        : null
  }

  // Converts a string to camel case for select option values
  const camelCase = (str) => {
    const words = str.toLowerCase().split(' ');
    let result = words[0];
    for (let i = 1; i < words.length; i++) {
      result += words[i].charAt(0).toUpperCase();
      result += words[i].slice(1);
    }
    return result;
  }
/* function that returns an array of plants that should populate for a specific day */
  const dailyPlants = (targetDate, { plant }) => {
 
    const plantData = data?.me.plants || [];
    let dailyPlantList = []
    let fertilizing;
    let i;
    let watering = ((targetDate - plantData[i].lastWaterDate) / 43200 % plantData[i].waterFrequency) === 0

    for (let i =0 ; i < plantData.length ; i++) {
      if (plantData[i].fertilized) {
        fertilizing = ((targetDate - plantData[i].lastWaterDate) / 43200 % plantData[i].waterFrequency) === 0
      } else {
        fertilizing = false
      }

      if (fertilizing || watering) {
        dailyPlantList.push( plantData[i],{wateringDay: watering, fertilizingDay: fertilizing})
      }
    }
    return dailyPlantList
    
  }

  
  return {
    convertFrequency,
    camelCase,
    selectIcon,
    plantIcons,
    oneDay,
    today,
    frequencyUnits,
    dailyPlants
  }

  

}