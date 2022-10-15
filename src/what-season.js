const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(date == null){
    return 'Unable to determine the time of year!'
  }
  if(!Date.parse(date)){
    throw new Error('Invalid date!')
  }
  let now = new Date(date);
  let month = now.getMonth() + 1;
  if(3 <= month && month <= 5){
    return 'spring'
  }else if(6 <= month && month <= 8){
    return 'summer'
  }else if(9 <= month && month <= 11) {
    return 'autumn'
  }else if(12 <= month || month <= 2){
    return 'winter'
  }
}

module.exports = {
  getSeason
};
