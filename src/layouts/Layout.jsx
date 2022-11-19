import React from "react"
import { Link, Outlet } from "react-router-dom"

function Layout() {
  return (
    <>
      <header className="flex items-center justify-between border-b-2 border-solid bg-white px-7 py-5 text-slate-600">
        <Link to={"/"} className="font-bold">
          Where in the world?!
        </Link>
      </header>
      <main className="px-7 py-14">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
