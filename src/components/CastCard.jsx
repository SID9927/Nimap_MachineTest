import React from "react";
import { IMAGE_BASE_URL } from "../service/MovieDb";

const CastCard = ({ castMember }) => {
  return (
    <div className="cast-card">
      <img
        src={
          castMember.profile_path
            ? `${IMAGE_BASE_URL}${castMember.profile_path}`
            : "/placeholder.png"
        }
        alt={castMember.name}
      />
      <h4>{castMember.name}</h4>
      <p>{castMember.character}</p>
    </div>
  );
};

export default CastCard;