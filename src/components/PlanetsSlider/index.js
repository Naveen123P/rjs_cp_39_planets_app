// Write your code here
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props

  return (
    <div className="bg-con">
      <PlanetItem planetsList={planetsList} />
    </div>
  )
}

export default PlanetSlider
