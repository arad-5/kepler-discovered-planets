const { parse } = require('csv-parse')
const fs = require('fs')

const planets = []
fs.createReadStream('kepler_planets_data.csv')
    .pipe(
        parse({
            comment: '#',
            columns: true,
        })
    )
    .on('data', (chunk) => planets.push(chunk))
    .on('end', () => console.log('reading planets csv done ✔\n' + planets))
    .on('error', (err) => console.log(err))
