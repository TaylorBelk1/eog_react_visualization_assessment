import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { getMeasurementsQuery, getLastValue } from '../queryStrings';
import { subtractMinutes } from '../../store/utils';
import { useQuery } from 'urql';

const useStyles = makeStyles({
  card: {
    width: 200,
    height: 60,
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: 550
  }
});

// this component needs to initially query getMeasurements and send it
// to redux so it will have a baseline set of data

const MetricsCard = (props) => {
    const classes = useStyles();
    const [toggleChart, setToggleChart] = useState(false);
    const [cardData, setCardData] = useState(null);
    const metricName = props.title;

    const [{ fetching, data, error }] = useQuery({
      query: getLastValue,
      variables: { metricName }
    })

    if(fetching) {
      return 'Loading...';
    } else if(error) {
      return `This is not the error you are looking for...
              ERROR: ${error}`
    }

    const { value } = data.getLastKnownMeasurement


    const handleClick = () => {
      setCardData(value);
      setToggleChart(!toggleChart);
      props.viewGraph(toggleChart, props.title)
    }
    if(cardData !== null) {
      console.log(cardData)
    }

    // #TODO: Need to get the names to toggle view for the value

    return (
        <Card className={classes.card} raised={true} onClick={() => handleClick()}>
            <CardContent>
                <Typography className={classes.title}>
                    {props.title}
                </Typography>
                {cardData !== null ? null : <p>{ cardData }</p>}
            </CardContent>
        </Card>
    )
}

const mstp = state => {
  return {
      measurements: state.data,
      loading: state.loading
  }
}

export default MetricsCard