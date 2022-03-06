import hyundai from '../../formulas/hyundai';
import maruti from '../../formulas/maruti';
import tata from '../../formulas/tata';

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

export function select_brand_object(brand_string) {
  switch (brand_string) {
    case 'hyundai':
      return hyundai;
    case 'maruti':
      return maruti;
    case 'tata':
      return tata;
    default: {
      console.log('how did it threw null', brand_string);
      return null;
    }
  }
}
