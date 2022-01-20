import React from "react"
import defaultImg from "../images/house-1.jpg"
import PropTypes from "prop-types"
export default function House({ house }) {
  const { name, image, description, artist } = house
  return (
    <article className="house">
      <div className="img-container">
        <img src={image} alt="apartment house" />

        {/* <Link to={`/houses/${slug}`} className="btn-primary house-link">
          Features
        </Link> */}
      </div>
      <p className="house-title">{name}</p>
      <p className="house-artist">{artist}</p>
      <p className="house-description">{description}</p>
    </article>
  )
}

House.propTypes = {
  house: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
}
