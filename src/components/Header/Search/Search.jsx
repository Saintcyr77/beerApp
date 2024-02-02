import axios from "axios";
import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, CardMedia, Typography } from "@mui/material";
import "../Search/search.css"; // Import the CSS file

const Search = () => {
  const [beers, setBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          `https://api.punkapi.com/v2/beers?beer_name=${searchTerm}`
        );
        setBeers(response.data);
      } catch (error) {
        console.error("Error fetching beers:", error);
      }
    };

    fetchBeers();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFavoriteClick = (beerId) => {
    console.log(`Added beer with ID ${beerId} to favorites`);
  };

  return (
    <div className="textfield">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onChange={handleSearchChange}
        />
        <i className="search-icon">🔍</i>
      </div>
      <Grid container spacing={2}>
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
                  <Typography variant="h6" gutterBottom>
                    {beer.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {beer.description}
                  </Typography>
                  <span
                    role="img"
                    aria-label="favorite"
                    style={{ cursor: "pointer", fontSize: "1.5em" }}
                    onClick={() => handleFavoriteClick(beer.id)}
                  >
                    ❤️
                  </span>
                </CardContent>
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Search;
