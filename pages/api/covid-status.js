import { getCovidData } from '../../lib/covid-data'

export default async function handler(_, res) {
    const response = await getCovidData()

    return res.status(200).json(response)
}