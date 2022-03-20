import aloeVera from '../img/aloe-vera.png'
import basil from '../img/basil.jpg';
import bonsaiTree from '../img/bonsai-tree.png';
import snakePlant from '../img/snake-plant.jpg';

export default function useHook() {

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
    return iconStr === 'cactus' ? null
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

  return {
    convertFrequency,
    camelCase,
    selectIcon,
    oneDay,
    today,
    aloeVera,
    basil,
    bonsaiTree,
    snakePlant,
    plantIcons,
    frequencyUnits
  }
}