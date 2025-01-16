import React from "react";
import { IMAGE_BASE_URL } from "../slices/MoviesSlice";

const CastCard = ({ cast }) => {
  return (
    <div className="cast-card">
      {cast.profile_path && (
        <img
          src={`${IMAGE_BASE_URL}${cast.profile_path}`}
          alt={cast.name}
          className="cast-image"
        />
      )}
      <div className="cast-info">
        <h3>{cast.name}</h3>
        <p>Character : {cast.character}</p>
      </div>
    </div>
  );
};

export default CastCard;