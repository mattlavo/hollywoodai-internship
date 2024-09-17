"use client";
import AudioBanner from "@/components/AudioBanner";
import { AudioPlayerProvider } from "@/context/audio-player-context";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import { useParams } from "next/navigation";

function PlayerPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);

  const fetchMovie = async () => {
    try {
      const response = await axios.get(
        `https://advanced-internship-api-production.up.railway.app/movies/${id}`
      );
      setMovie(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <AudioPlayerProvider>
        <div className="playerSummary">
          <div className="page-row playerSummary__row">
            {loading ? (
              <div className="spinner">
                <CircularProgress
                  className="playerSummar__spinner__icon"
                  variant="determinate"
                  value={75}
                />
              </div>
            ) : (
              <>
                <h1 className="playerSummary__title">{movie.title}</h1>
                <p className="playerSummary__para">{movie.summary}</p>
              </>
            )}
          </div>
        </div>
        {!loading && (
          <AudioBanner
            movie={movie}
            title={movie.title}
            src={`https://advanced-internship-api-production.up.railway.app/${movie.audioLink}`}
            director={movie.director}
            cover={movie.imageLink}
          />
        )}
      </AudioPlayerProvider>
    </>
  );
}

export default PlayerPage;
