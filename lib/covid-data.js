import axios from 'axios'
import Papa from 'papaparse'

export const getCovidData = async () => {
    const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQvvugFsb4GePXQnmEZbgrtqmJRiaA7tO1UGSBwvBdhbJEmf2ntzE0am-x-Lo6mLPj9ASLpAg6UZsCF/pub?gid=1214476126&output=csv'
    const population = 1.05274

    // Fetch data from api
    const res = await axios.get(url)

    // Parse csv data to json array
    const json = Papa.parse(res.data).data.slice(-7)

    // Calculate community transmission
    const ct = Math.floor(json.map(i => parseInt(i[3], 10)).reduce((sum, a) => sum + a, 0) / population)

    // Construct new object with calculated data
    const data = {
        date: json[6][0],
        new_cases: json[6][3],
        total_cases: json[6][4],
        community_transmission: ct
    }

    return data
}