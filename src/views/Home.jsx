import React from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getAllCountries } from "../api"
import CountryCard from "../components/CountryCard"

export async function loader() {

  const countries = await getAllCountries()

  return countries
}

function Home() {
  const countries = useLoaderData()

  return (
    <>
      {countries.length === 0 ? (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-light">
          Loading...
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-8">
          {countries.map((country) => (
            <Link
              key={country.name}
              to={`country/${country.name}`}
              className="max-w-xs"
            >
              <CountryCard
                flagSrc={country.flags.png}
                name={country.name}
                region={country.region}
                population={country.population}
                capital={country.capital}
              />
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

export default Home
