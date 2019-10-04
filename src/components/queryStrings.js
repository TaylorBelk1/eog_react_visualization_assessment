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