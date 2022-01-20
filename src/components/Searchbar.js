import React from "react"

export default ({ term, data, update }) => { 

  const dataSearch = (e) => {
    const value = e.target.value.toLowerCase()  
    const filter = data.filter((house) => {
      return house.name.toLowerCase().includes(value)
    }) 
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
