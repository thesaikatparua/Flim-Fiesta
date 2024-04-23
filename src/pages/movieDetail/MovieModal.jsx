import React, { useState } from "react";
import "./MovieModal.css";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const fetchMovieDetail = async (id) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=b935b5ca8bde9733059fef48810c9af7&language=en-US&append_to_response=videos`
  );
  const data = await response.json();
  return data;
};

export default function BasicModal() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trailerUrl, setTrailerUrl] = useState("");
  const {
    data: currentMovieDetail,
    isLoading,
    isError,
  } = useQuery(["movieDetail", id], () => fetchMovieDetail(id));

  const handleTrailerClick = () => {
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
        setIsModalOpen(true);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTrailerUrl("");
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;
  return (
    <>
      <Button onClick={handleTrailerClick} style={{ color: "snow" }}>
        <i class="fa-regular fa-circle-play"> </i>
        <p>Trailer</p>
      </Button>
      <Modal
        open={isModalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <iframe
              title="trailer"
              width="800"
              height="500"
              src={trailerUrl}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Modal>
    </>
  );
}
