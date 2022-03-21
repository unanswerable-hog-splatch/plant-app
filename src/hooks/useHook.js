import cactus from '../img/cactus-1.png';
import aloeVera from '../img/aloe-vera.png'
import basil from '../img/basil.png';
import bonsaiTree from '../img/bonsai-tree.png';
import snakePlant from '../img/snake-plant.png';
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
  const dailyPlants = (targetDate) => {

    const plantData = data?.me.plants || [];
    const dailyPlantList = []
    
    for (let i =0 ; i < plantData.length ; i++) {

      const watering = (((targetDate - plantData[i].lastWaterDate) / oneDay % plantData[i].waterFrequency) === 0) || (((targetDate - plantData[i].lastWaterDate + 3600) / oneDay % plantData[i].waterFrequency) === 0)
      
      const fertilizing = plantData[i].fertilized ? ((targetDate - plantData[i].lastFertilizeDate) / oneDay % plantData[i].fertilizeFrequency) === 0 : false

      if (fertilizing || watering) {
        dailyPlantList.push([plantData[i],{wateringDay: watering}, {fertilizingDay: fertilizing}])
      }
 
    }
      return dailyPlantList
  }

  
  return {
    convertFrequency,
    camelCase,
    selectIcon,
    dailyPlants,
    plantIcons,
    oneDay,
    today,
    frequencyUnits

  }

  

}