import moment from 'moment';

export default (value) => {
  if (!value) {
    return '';
  }

  return moment.unix(value).fromNow();
};
