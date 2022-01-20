import React from "react"
import TextField from "@mui/material/TextField"
 
export default function SearchBar({ term, data, update }) {  
  
  const dataSearch = (e) => {
    const value = e.target.value.toLowerCase()

    const filter_name = data.filter((house) => {
      return house.name.toLowerCase().includes(value)
    })
    const filter_artist = data.filter((house) => {
      return house.artist.toLowerCase().includes(value)
    })

    const filter = [...new Set([...filter_name, ...filter_artist])]

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
