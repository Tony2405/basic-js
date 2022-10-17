const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!Array.isArray(members)){
    return false;
  }
  const stringMembers = members.filter(member => typeof member === 'string');
  const firstLetters = [];
  stringMembers.forEach(el => firstLetters.push(el.trim().substr(0, 1).toUpperCase()));
  const secretName = firstLetters.sort().join('');
  return secretName;
}

module.exports = {
  createDreamTeam
};
