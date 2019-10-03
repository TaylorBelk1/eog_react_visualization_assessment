# Possibly needed queries... Note to self

## url: https://react.eogresources.com/graphql

## Possible Metric Names:
#### -tubingPressure
#### -flareTemp
#### -injValveOpen
#### -oilTemp
#### -casingPressure
#### -waterTemp


## Queries

### getLastKnownMeasurement
    getLastKnownMeasurement(metricName: "tubingPressure") {
        metric
        at
        value
        unit
    }


### getMeasurements
    getMeasurements(input: {
        metricName: "tubingPressure"
    }) {
        metric
        at
        value
        unit
    }
#### with after
    getMeasurements(input: {
        metricName: "tubingPressure"
        after: 1570105140
    }) {
        metric
        at
        value
        unit
    }
#### with before
    getMeasurements(input: {
        metricName: "tubingPressure"
        after: 1570105140,
        before: 1570106940
    }) {
        metric
        at
        value
        unit
  }

### getMultipleMeasurements
    getMultipleMeasurements(input: [
        {
            metricName: "tubingPressure"
            after: 1570105140,
        },
        {
            metricName: "flareTemp"
            after: 1570105140,
        }
    ]) {
        metric
        measurements {
            metric
            at
            value
            unit
        }
    }




## Subscriptions

### newMeasurement
    subscription {
        newMeasurement {
            metric
            at
            value
            unit
        }
    }