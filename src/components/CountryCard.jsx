import React from "react"

function CountryCard({ flagSrc, name, region, population, capital }) {
  return (
    <div className="flex cursor-pointer flex-col rounded-lg bg-white shadow-md transition-shadow hover:shadow-none">
      <img
        className="aspect-4/3 overflow-hidden rounded-t-lg"
        src={flagSrc}
        alt={`${name} flag`}
      />
      <div className="px-5 py-7">
        <h2 className="mb-6 text-xl font-extrabold">{name}</h2>

        <ul>
          <li>
            <strong>Region: </strong>
            <span>{region}</span>
          </li>
          <li>
            <strong>Population: </strong>
            <span>{population}</span>
          </li>
          <li>
            <strong>Capital: </strong>
            <span>{capital}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default CountryCard
