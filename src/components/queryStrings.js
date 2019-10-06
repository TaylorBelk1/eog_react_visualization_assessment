export const getMetricTitles = `
    query GetMetricTitles {
        getMetrics
    }
`

export const getRealTimeMeasurements = `
    subscription MeasurementsSub {
        newMeasurement {
            metric
            at
            value
            unit
        }
    }
`

export const getMultipleMeasurements = `
    query getMultipleMeasurements ($measurements: [MeasurementQuery]) {
        getMultipleMeasurements(input: $measurements) {
                measurements {
                  metric
                  at
                  value
                  unit
                }
            }
    }
`

export const getMeasurementsQuery = `
query getMeasurements ($met: MeasurementQuery) {
    getMeasurements(input: $met) {
        metric
        at
        value
        unit
    }
}
`

export const getLastValue = `
    query getLastKnown($metricName: String!) {
        getLastKnownMeasurement(metricName: $metricName) {
            value
        }
    }
`