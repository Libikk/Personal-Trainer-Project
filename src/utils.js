import moment from 'moment';


module.exports = {
  getTextUploadTime: (date) => {
    const isMinuteDisplay = moment().diff(date, 'minutes') < 60;
    const isLessThen24h = moment().diff(date, 'hours') > 24;
    const is7DaysOlder = moment().diff(date, 'days') > 7;

    const hoursOrMinutes = isMinuteDisplay ? `${moment().diff(date, 'minutes')} minutes ago` : `${moment().diff(date, 'hours')} hours ago`;
    const days = is7DaysOlder ? moment(date).format('DD') : `${moment().diff(date, 'days')} days ago`;
    const month = is7DaysOlder ? moment(date).format('MMMM') : '';
    const year = moment().isSame(date, 'year') ? '' : `, ${moment(date).format('YYYY')}`;

    return isLessThen24h ? `${days} ${month + year}` : hoursOrMinutes;
  },
};
