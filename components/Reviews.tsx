import React, { useEffect, useState } from "react";
import axios from "axios";
const Reviews = () => {
  const [data, setData] = useState(); // eslint-disable-line
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1`
      )
      .then((res) => setData(res.data));
  }, []);
  return <div>Reviews</div>;
};

export default Reviews;
