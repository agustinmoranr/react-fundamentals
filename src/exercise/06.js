// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  // function handleSubmit(event) {
  //   event.preventDefault()
  //   console.log(event.nativeEvent) // real event (from browser)
  //   console.log(event) // synthatic event, (created by react to increase performance, but it is almost exactly the same as browser event)
  //   const formValue = event.target.elements['username-field'].value
  //   onSubmitUsername(formValue)
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username-field">Username:</label>
  //       <input id="username-field" type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )

  //===========Extra Credit 1 INICIO==========
  // const inputRef = React.useRef(null)

  // function handleSubmit(event) {
  //   event.preventDefault()

  //   const usernameValue = inputRef.current.value
  //   onSubmitUsername(usernameValue)
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username-field">Username:</label>
  //       <input ref={inputRef} id="username-field" type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )
  //===========Extra Credit 1 FIN==========

  //===========Extra Credit 2 INICIO==========
  // const [error, setError] = React.useState(null)
  // const inputRef = React.useRef(null)
  // const errorExist = Boolean(error)

  // function handleSubmit(event) {
  //   event.preventDefault()

  //   const usernameValue = inputRef.current.value
  //   onSubmitUsername(usernameValue)
  // }

  // function handleChange(event) {
  //   const usernameValue = inputRef.current.value

  //   const isValid = usernameValue === usernameValue.toLowerCase()
  //   setError(isValid ? null : 'Username must be lower case')
  // }

  // function HelperText() {
  //   return (
  //     <p role="alert" style={{color: 'red'}}>
  //       {error}
  //     </p>
  //   )
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username-field">Username:</label>
  //       <input
  //         ref={inputRef}
  //         id="username-field"
  //         type="text"
  //         onChange={handleChange}
  //       />
  //     </div>
  //     {errorExist && <HelperText />}
  //     <button type="submit" disabled={errorExist}>
  //       Submit
  //     </button>
  //   </form>
  // )
  //===========Extra Credit 2 FIN==========

  //===========Extra Credit 3 INICIO==========
  const [inputValue, setInputValue] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(inputValue)
  }

  function handleChange(event) {
    const usernameValue = event.target.value
    const parsedValue = usernameValue.toLowerCase()
    setInputValue(parsedValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username-field">Username:</label>
        <input
          value={inputValue}
          id="username-field"
          type="text"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
  //===========Extra Credit 3 FIN==========
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
