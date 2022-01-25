import { useState, useRef } from "react"
import { Link } from "react-router-dom"
// hooks
import { useLocalStorage } from "../hooks"
// styles
import { Form, Button } from "react-bootstrap"

export function NameForm() {
  const [username, setUsername] = useLocalStorage('username', 'John') 
  const linkRef = useRef(null)
 
  const handleChangeName = (e) => {
    setUsername(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    linkRef.current.click()
  }

  const trimmed = username.trim()

  return (
    <div>
      <main class="join-main">
        <form onSubmit={handleSubmit}>
          <div class="form-control">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username..."
              required
              // onChange={(e) => setUsername(e.target.value)}
              value={username} 
              onChange={handleChangeName}
              // onChange={(e) => handleChangeName(e.target.value)}

            />
          </div>

          {trimmed && (
            <Link
              as={Link}
              to={`/main`}
              // to={`/main?username=${username}`}

              // to={{
              //   pathname: "/main",
              //   search: `?username=${username}`, 
              // }}


              ref={linkRef}
              className="btn-primary"
            >
              ENTER
            </Link>
          )}
          {/* {   trimmed &&  <Link  as={Link} to={`/main/`} ref={linkRef} className="btn-primary">
          ENTER
        </Link>} */}
        </form>
      </main>
    </div>

    // <Form
    //   className='mt-5'
    //   style={{ maxWidth: '320px', margin: '0 auto' }}
    //   onSubmit={handleSubmit}
    // >
    //   <Form.Group>
    //     <Form.Label>Name:</Form.Label>
    //     <Form.Control value={username} onChange={handleChangeName} />
    //   </Form.Group>

    //   {trimmed && (
    //     <Button variant='success' as={Link} to={`/${roomId}`} ref={linkRef}>
    //       Enter
    //     </Button>
    //   )}
    // </Form>
  )
}
