export function get_index_of_key_from_left(arr, key) {
  console.log('left');
  return arr.indexOf(key);
}

export function get_index_of_key_from_right(arr, key) {
  console.log('right');
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === key) {
      return i;
    }
  }
}
