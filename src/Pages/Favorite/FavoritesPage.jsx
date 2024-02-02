import React, { useEffect, useState } from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../Favorite/favorite.css";
import Tooltip from "@mui/material/Tooltip";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [length, setLength] = useState(0);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setLength(storedFavorites.length);
    setFavorites(storedFavorites);
  }, []);

  const handleFavoriteDelete = (beerId) => {
    const updatedFavorites = favorites.filter((beer) => beer.id !== beerId);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    setLength(updatedFavorites.length);
  };

  return (
    <div className="favorites">
      {length === 0 ? (
        <div className="no-favorites">
          <h1 class="title">Not available</h1>
          <Typography variant="body2" color="textSecondary">
            There are no favorites
            <br />
            Contact{" "}
            <a href="https://www.inclusivefintech50.com/2021-cohort">
              Fintech50
            </a>{" "}
            for info
          </Typography>
        </div>
      ) : (
        <>
          <h1>Your {length} Favorite Beers</h1>
          <Grid container spacing={1}>
            {favorites.map((beer) => (
              <Grid item key={beer.id} xs={12} sm={6} md={4} lg={3}>
                <div className="card">
                  <Card>
                    <CardMedia
                      component="img"
                      alt={beer.name}
                      height="140"
                      image={beer.image_url}
                      className="media"
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom className="name">
                        {beer.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        className="description"
                      >
                        {beer.description}
                      </Typography>
                      <Tooltip title="Delete From Favorites">
                        <span
                          role="img"
                          aria-label="favorite"
                          style={{ cursor: "pointer", fontSize: "1.5em" }}
                          onClick={() => handleFavoriteDelete(beer.id)}
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            style={{ marginTop: "10px" }}
                          />
                        </span>
                      </Tooltip>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default FavoritesPage;
