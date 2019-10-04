function pad(date) {
    let dateArr = date.split('');
    if(dateArr.length >= 10) {
      dateArr.unshift(0);
      dateArr.join('');
    }

    return dateArr.slice(0, 5).join('');
  }

  export const convertEpochToLocalTime = (timestamp) => {
      return pad(new Date(timestamp).toLocaleTimeString());
  };

  export const subtractMinutes = (timestamp) => {
    return timestamp - (30*60000);
  }
