

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
