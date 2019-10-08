  export const convertEpochToLocalTime = (timestamp) => {
      return new Date(timestamp).toLocaleTimeString();
  };

  export const subtractMinutes = (timestamp) => {
    return timestamp - (30*60000);
  }
