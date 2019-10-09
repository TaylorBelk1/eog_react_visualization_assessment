/* eslint-disable prefer-default-export */
import styled from 'styled-components';
import { media } from './variables';

export const MetricCardsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 40px auto;

  .value {
    font-size: 18px;
  }
`;

export const MetricsWrap = styled.div`
  width: 100%
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  ${media.modern} {
    width: 90%;
  }

  ${media.largeDt} {
    width: 95%
  }
`;
