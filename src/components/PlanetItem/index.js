// Write your code here
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import './index.css'

const PlanetItem = props => {
  const {planetsList} = props
  console.log(planetsList)
  const settings = {
    dots: false,
  }

  return (
    <>
      <h1 className="planets">Planets</h1>
      <div data-testid="planets" className="slider-container">
        <Slider>
          {/* {planetsList.map(planet => (
            <div className="planet-item">
              <div key={planet.id} className="img-con">
                <img
                  src={planet.imageUrl}
                  alt={planet.name}
                  className="planet-image"
                />
              </div>
              <h1 className="name">{planet.name}</h1>
              <p className="description">{planet.description}</p>
            </div>
          ))} */}
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Slider>
      </div>
    </>
  )
}

export default PlanetItem
