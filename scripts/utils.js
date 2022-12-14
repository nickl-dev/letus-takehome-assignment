/**
 * Update Local Storage
 * @desc Updates localStorage
 * @param {string} key used to identify the key in localStorage
 * @param {array} value array to be sent to localStorage
 */
export function updateLocalStorage (key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Trim and LowerCase
 * @desc Removes whitespace and transforms value to lowercase
 * @param {string} value to be trimmed and lowercased
 */
export function trimAndLowerCase (value) {
  return value.trim().toLowerCase();
};

/**
 * Reset Input
 * @desc Resets value of input field
 * @param {string} input element identifier
 */
export function resetInput (input) {
  input.value = '' || null;
};

/**
 * Get Index
 * @param {array} array of values to search
 * @param {value} value to search for in array 
 * @returns number that represents whether or not the value exists
 * If the value is found, return the index,
 * otherwise return -1
 */
export function getIndex (array, value) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'object') {
      for (const item in array[i]) {
        if (item === value) return i;
      }
    };

    if (array[i].value === value) return i;
  }
  return -1;
}