import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

const getAllCountries = async () => {
  const countries = await axios
    .get(`${API_URL}/all`)
    .then((response) => response.data)

  return countries
}

const getSingleCountry = async (countryName) => {
  const country = await axios
    .get(`${API_URL}/name/${countryName}`)
    .then((response) => response.data[0])

  return country
}

const getBordersOfCountry = async (country) => {
  let borders = []

  for (let border of country.borders) {
    await axios.get(`${API_URL}/alpha/${border}`).then((response) => {
      borders.push(response.data.name)
    })
  }

  return borders
}

export { getAllCountries, getSingleCountry, getBordersOfCountry }
