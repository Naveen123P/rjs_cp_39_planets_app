// Write your code here

import './index.css'

const PlanetItem = props => {
  const {children} = props
  console.log(children)
  return (
    <>
      <h1 className="planets">PLANETS</h1>
      <div className="slider-container">{children}</div>
    </>
  )
}

export default PlanetItem
