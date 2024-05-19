import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./MovieModal.css";
import "../../media query/Moviedetailsres.css";

const fetchMovieDetail = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b935b5ca8bde9733059fef48810c9af7&language=en-US&append_to_response=videos`
  );
  const data = await response.json();
  return data;
};

function MovieModal() {
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");

  const {
    data: currentMovieDetail,
    isLoading,
    isError,
  } = useQuery(["movieDetail", id], () => fetchMovieDetail(id));

  const handleShow = () => {
    if (
      currentMovieDetail &&
      currentMovieDetail.videos &&
      currentMovieDetail.videos.results
    ) {
      const officialTrailer = currentMovieDetail.videos.results.find(
        (video) => video.type === "Trailer"
      );
      if (officialTrailer) {
        setTrailerUrl(`https://www.youtube.com/embed/${officialTrailer.key}`);
        setShow(true);
      }
    }
  };

  const handleClose = () => {
    setShow(false);
    setTrailerUrl("");
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <>
      <Button onClick={handleShow} id="play_button">
        <i className="fa-regular fa-circle-play"> </i>
      </Button>

      <Modal show={show} onHide={handleClose} id="movie_trailer_modal">
          {trailerUrl ? (
            <iframe
              title="trailer"
              width="180%"
              height="500"
              src={trailerUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          ) : (
            "Trailer not available"
          )}
      </Modal>
    </>
  );
}

export default MovieModal;
