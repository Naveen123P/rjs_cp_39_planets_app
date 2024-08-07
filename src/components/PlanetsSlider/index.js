// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: false,
  }

  return (
    <div data-testid="planets" className="bg-con">
      <PlanetItem>
        <Slider {...settings}>
          {planetsList.map(planet => (
            <div key={planet.id} className="planet-item">
              <div className="img-con">
                <img
                  src={planet.imageUrl}
                  alt={planet.name}
                  className="planet-image"
                />
              </div>
              <h1 className="name">{planet.name}</h1>
              <p className="description">{planet.description}</p>
            </div>
          ))}
        </Slider>
      </PlanetItem>
    </div>
  )
}

export default PlanetSlider
