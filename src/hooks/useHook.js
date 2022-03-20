export default function useTime() {

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
    }
}