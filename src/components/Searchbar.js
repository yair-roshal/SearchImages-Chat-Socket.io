import React from "react"
import TextField from "@mui/material/TextField"
 
export default ({ term, data, update }) => {
  const dataSearch = (e) => {
    const value = e.target.value.toLowerCase()
    const filter = data.filter((house) => {
      return house.name.toLowerCase().includes(value)
    })
    update(filter, value)
  }

  return (
    <TextField
      id="filled-basic"
      label="name or type of house..."
      variant="filled"
      sx={{
        display: "flex",
        p: 1,
        m: 1,
      }}
      value={term}
      type="text"
      placeholder="Search..."
      onChange={dataSearch}
    />
  )
}
