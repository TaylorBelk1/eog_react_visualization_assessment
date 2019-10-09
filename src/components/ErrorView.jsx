import React from 'react';
import errorImage from '../assetts/error.png';
import { ErrorWrapper } from '../styled-components/errorStyles';

const ErrorView = () => {
  return (
    <ErrorWrapper>
      <h4> Well, this is embarassing... </h4>
      <h5> Don&apos;t worry though, we are working on it!</h5>
      <img src={errorImage} alt="error" />
    </ErrorWrapper>
  );
};

export default ErrorView;
