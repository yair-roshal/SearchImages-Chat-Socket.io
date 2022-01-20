import React from "react";
// import { Link } from "react-router-dom";
import defaultImg from "../images/house-1.jpg";
import PropTypes from "prop-types";
export default function House({ house }) {

  // console.log("house11",house);

  const { name, slug, images,description,type } = house;

  return (
    <article className="house">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="apartment house" />
      
        {/* <Link to={`/houses/${slug}`} className="btn-primary house-link">
          Features
        </Link> */}
      </div>
      <p className="house-title">{name}</p>
      <p className="house-artist">{type}</p>
      <p className="house-description">{description}</p>
 
    </article>
  );
}

House.propTypes = {
  house: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  })
};
