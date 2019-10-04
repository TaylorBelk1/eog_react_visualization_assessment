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
    query getMeasurementsQuery ($metricArray: [MeasurementQuery]) {
        getMultipleMeasurements(input: $metricArray) {
            metric
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