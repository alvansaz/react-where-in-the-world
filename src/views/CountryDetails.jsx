import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getBordersOfCountry, getSingleCountry } from "../api"

export async function loader({ params }) {
  const country = await getSingleCountry(params.name)
  const borders = await getBordersOfCountry(country)

  return [country, borders]
}

function CountryDetails() {
  const [country, borders] = useLoaderData()

  return (
    <div className="flex flex-col">
      <img
        className="mx-auto mb-10 block aspect-4/3 w-10/12 max-w-sm"
        src={country.flags.png}
        alt={`${country.name} flag`}
      />
      <h1 className="mb-10 text-3xl font-extrabold">{country.name}</h1>
      <div className="mb-5 text-2xl">Borders:</div>
      <ul className="flex flex-wrap gap-3">
        {borders.length === 0 ? (
          <div>No Borders</div>
        ) : (
          borders.map((border) => (
            <li className="rounded-full bg-slate-200 py-1 px-2" key={border}>
              <Link to={`/country/${border}`}>{border}</Link>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default CountryDetails
