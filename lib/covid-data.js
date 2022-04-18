import axios from 'axios'
import Papa from 'papaparse'

export const getCovidData = async () => {
    const url = 'https://datawrapper.dwcdn.net/eac5p/242/dataset.csv'
    
    // Fetch data from api
    const res = await axios.get(url)

    // Parse csv data to json array
    const json = Papa.parse(res.data)

    // Clean up data and return previous 7 days of data
    const data = json.data.slice(-7).map(obj => ({
        date: obj[0],
        total_cases: obj[1],
        new_cases: obj[2],
        seven_day_avg: obj[3],
        community_transmission: obj[4]
    }))

    return data
}