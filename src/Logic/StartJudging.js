import {get_index_of_key_from_left, get_index_of_key_from_right} from './utils';
export function StartJudging(number, cracked) {
  if (number === null) {
    return;
  }
  let c = 'MALPA813MMM000001D';
  let month_index_of_chassis_number_to_look_at =
    hyundai['month']['nth_character'];
  let year_index_of_chassis_number_to_look_at =
    hyundai['year']['nth_character'];

  let month_char = number[month_index_of_chassis_number_to_look_at];
  let year_char = number[year_index_of_chassis_number_to_look_at];

  cracked.debugString = month_char;

  let month_index_to_interpolate;
  let year_index_to_interpolate;

  let direction_for_month_read = hyundai['month']['count_from'];
  let direction_for_year_read = hyundai['year']['count_from'];

  if (direction_for_month_read === 'right') {
    month_index_to_interpolate = get_index_of_key_from_right(
      hyundai['month']['series_on_chassis'],
      month_char,
    );
  } else {
    //   cracked.debugString = month_index_of_chassis_number_to_look_at;
    month_index_to_interpolate = get_index_of_key_from_left(
      hyundai['month']['series_on_chassis'],
      month_char,
    );
  }

  if (direction_for_year_read === 'right') {
    year_index_to_interpolate = get_index_of_key_from_right(
      hyundai['year']['series_on_chassis'],
      year_char,
    );
  } else {
    year_index_to_interpolate = get_index_of_key_from_left(
      hyundai['year']['series_on_chassis'],
      year_char,
    );
  }

  // console.log(month_index_to_interpolate, year_index_to_interpolate);

  cracked.month = hyundai['month']['inference'][month_index_to_interpolate];
  cracked.year = hyundai['year']['inference'][year_index_to_interpolate];

  console.log(cracked.month, cracked.year);
}
