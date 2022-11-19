import React from "react"
import { useRouteError } from "react-router-dom"

function NoMatch() {
  const error = useRouteError()
  console.error(error)
  return (
    <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="text-2xl mb-10">Seems like you've lost your way!</h1>
      <p className="text-slate-400">{error.statusText || error.mesaage}</p>
    </div>
  )
}

export default NoMatch
