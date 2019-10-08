  export const convertEpochToLocalTime = (timestamp) => {
      return new Date(timestamp).toLocaleTimeString("it-IT");
  };

  export const subtractMinutes = (timestamp) => {
    return timestamp - (30*60000);
  }
