// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
const deafultStyles = props => ({
  fontStyle: 'italic',
  backgroundColor: props.bgColor ? props.bgColor : 'none',
})

const smallBox = (
  <div className="box box--small" style={deafultStyles({bgColor: 'lightblue'})}>
    small lightblue box
  </div>
)
const mediumBox = (
  <div className="box box--medium" style={deafultStyles({bgColor: 'pink'})}>
    medium pink box
  </div>
)
const largeBox = (
  <div className="box box--large" style={deafultStyles({bgColor: 'orange'})}>
    large orange box
  </div>
)

//================extra credit 1=============
function Box({children, className = '', ...props}) {
  return (
    <div className={`box ${className}`} {...props}>
      {children}
    </div>
  )
}

// ========================================

//================extra credit 2=============

function Box2({children, size = null, ...props}) {
  const SIZES = {
    [null]: null,
    small: 'small',
    medium: 'medium',
    large: 'large',
  }

  const boxSizeClassName = Boolean(SIZES[size]) ? `box--${SIZES[size]}` : ''

  return (
    <div className={`box ${boxSizeClassName}`} {...props}>
      {children}
    </div>
  )
}

// ========================================
function App() {
  return (
    <React.Fragment>
      <div>
        <div>Main exercise</div>
        {smallBox}
        {mediumBox}
        {largeBox}
      </div>

      <div>
        <div>Extra credit 1</div>
        <Box
          className="box--small"
          style={deafultStyles({bgColor: 'lightblue'})}
        >
          small lightblue box
        </Box>
        <Box className="box--medium" style={deafultStyles({bgColor: 'pink'})}>
          medium pink box
        </Box>
        <Box className="box--large" style={deafultStyles({bgColor: 'orange'})}>
          large orange box
        </Box>
      </div>

      <div>
        <div>Extra credit 2</div>
        <Box2 size="small" style={deafultStyles({bgColor: 'lightblue'})}>
          small lightblue box
        </Box2>
        <Box2 size="medium" style={deafultStyles({bgColor: 'pink'})}>
          medium pink box
        </Box2>
        <Box2 size="large" style={deafultStyles({bgColor: 'orange'})}>
          large orange box
        </Box2>
      </div>
    </React.Fragment>
  )
}

export default App
