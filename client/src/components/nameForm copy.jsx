import React, { useState } from "react"
import axios from "axios"

export function NameForm(props) {
  const [name, setName] = useState("")


  const handleChange = (e) => {
    const { id, value } = e.target
    console.log('e.target', e.target);
    setName((value) )
  }


    const register = newUser => {
    return axios
      .post('users/register', {
        name:name, 
      })
      .then(response => {
        console.log('Registered')
      })
  }

  const handleSubmitClick = (e) => {
    e.preventDefault()
 
    register(name).then(res => {
      console.log('111111');
     })
  }

  

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputName1">Your name</label>
          <input
            type="name"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            placeholder="Enter your name"
            onChange={handleChange}
            value={name}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmitClick}
        >
          Enter
        </button>
      </form>
    </div>
  )
}
