
import styled from 'styled-components';
import { media } from './variables';

export const LineChartWrapper = styled.div`
  width: 100%;
  height: 640px;
  margin: 2em auto;
  padding: 2em;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 6px 8px 20px darkgray;

  .lineChart {
    margin: 0 auto;
  }

  #myChart {
    width: auto;
    max-height: 700px;
  }

  ${media.largeDt} {
    height: 700px;
  }

  ${media.mid} {
    height: 780px;
  }
`;
