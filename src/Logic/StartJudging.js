import {
  get_index_of_key_from_left,
  get_index_of_key_from_right,
  select_brand_object,
} from './utils';

export function StartJudging(number, cracked) {
  let brand = cracked.brand;
  if (brand === null || number === null) {
    return;
  }

  brand_obj = select_brand_object(brand);

  let c = 'MALPA813MMM000001D';
  let month_index_of_chassis_number_to_look_at =
    brand_obj['month']['nth_character'];
  let year_index_of_chassis_number_to_look_at =
    brand_obj['year']['nth_character'];

  let month_char = number[month_index_of_chassis_number_to_look_at];
  let year_char = number[year_index_of_chassis_number_to_look_at];

  cracked.debugString = month_char;

  let month_index_to_interpolate;
  let year_index_to_interpolate;

  let direction_for_month_read = brand_obj['month']['count_from'];
  let direction_for_year_read = brand_obj['year']['count_from'];

  if (direction_for_month_read === 'right') {
    month_index_to_interpolate = get_index_of_key_from_right(
      brand_obj['month']['series_on_chassis'],
      month_char,
    );
  } else {
    //   cracked.debugString = month_index_of_chassis_number_to_look_at;
    month_index_to_interpolate = get_index_of_key_from_left(
      brand_obj['month']['series_on_chassis'],
      month_char,
    );
  }

  if (direction_for_year_read === 'right') {
    year_index_to_interpolate = get_index_of_key_from_right(
      brand_obj['year']['series_on_chassis'],
      year_char,
    );
  } else {
    year_index_to_interpolate = get_index_of_key_from_left(
      brand_obj['year']['series_on_chassis'],
      year_char,
    );
  }

  // console.log(month_index_to_interpolate, year_index_to_interpolate);

  cracked.month = brand_obj['month']['inference'][month_index_to_interpolate];
  cracked.year = brand_obj['year']['inference'][year_index_to_interpolate];

  console.log(cracked.month, cracked.year);
}
