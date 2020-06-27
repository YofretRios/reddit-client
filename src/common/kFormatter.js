import numeral from 'numeral';

export default (value) => {
  if (!value) {
    return '';
  }

  return numeral(value).format('0a');
};
