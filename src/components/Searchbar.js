import React from "react"

export default ({ term, data, update }) => {
  // console.log("term", term)
  // console.log("data", data)
  // console.log("update", update)

  const dataSearch = (e) => {
    const value = e.target.value.toLowerCase()

    // console.log("value", value)

    const filter = data.filter((house) => {
      return house.name.toLowerCase().includes(value)
    })

    // console.log("filter", filter)

    update(filter,value)

  }

  return (
    <div className="searchbar form-group">
      <input
        value={term}
        type="text"
        className="form-control"
        placeholder="Search..."
        onChange={dataSearch}
      />
    </div>
  )
}
