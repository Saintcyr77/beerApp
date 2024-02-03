import axios from "axios";
import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import DebounceInput from "react-debounce-input";
import "../Search/search.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faSearch } from "@fortawesome/free-solid-svg-icons";
import "react-tooltip/dist/react-tooltip.css";
import Tooltip from "@mui/material/Tooltip";
import Loader from "../../DebouneLoader/Loader";
const Search = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [favoriteId, setFavoriteId] = useState(0);

  const fetchBeers = async () => {
    try {
      const response = await axios.get(
        `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}&page=${page}`
      );
      if (page === 1) {
        setBeers(response.data);
      } else {
        setBeers((prevBeers) => [...prevBeers, ...response.data]);
      }
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching beers:", error);
    }
  };

  const handleSearchChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    setPage(1);

    if (!newSearchTerm) {
      setBeers([]);
    }
  };

  const handleFavoriteClick = (beerId) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const isAlreadyFavorited = favorites.some(
      (favBeer) => favBeer.id === beerId
    );

    if (!isAlreadyFavorited) {
      const selectedBeer = beers.find((beer) => beer.id === beerId);
      setFavoriteId(beerId);
      if (selectedBeer) {
        const updatedFavorites = [...favorites, selectedBeer];

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

        console.log(`Added beer with ID ${beerId} to favorites`);
      }
    }
  };

  useEffect(() => {
    fetchBeers();
  }, [searchTerm]);

  return (
    <div className="textfield">
      <div className="search-container">
        <DebounceInput
          type="text"
          className="search-input"
          placeholder="Search..."
          debounceTimeout={500}
          onChange={handleSearchChange}
        />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <InfiniteScroll
        dataLength={beers.length}
        next={fetchBeers}
        hasMore={true}
         className="infinite-scroll"
        loader={<Loader />}
      >
        <Grid container spacing={1}>
          {beers.map((beer) => (
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
                    <Tooltip
                      title={
                        favoriteId === beer.id
                          ? "Favorited"
                          : "Add to Favorites"
                      }
                    >
                      <span
                        role="img"
                        aria-label="favorite"
                        style={{
                          cursor: "pointer",
                          fontSize: "1.5em",
                          color: favoriteId === beer.id ? "blue" : "black",
                        }}
                        onClick={() => handleFavoriteClick(beer.id)}
                        data-tip="Add to Favorites"
                      >
                        <FontAwesomeIcon
                          icon={faStar}
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
      </InfiniteScroll>
    </div>
  );
};

export default Search;
