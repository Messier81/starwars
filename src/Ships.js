import React, { Component } from "react";
import data from "./Ships.json";
import PFdata from "./PilotFilm.json";
import AudioPlayer from "./AudioPlayer";

//import { gql } from "apollo-boost";
//import { Query } from "react-apollo";

/* const getAllArticles = gql`
  {
    allStarships {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`; */

class Ships extends Component {
  constructor() {
    super();
    this.state = { switchState: 0, shipName: "" };
  }

  changeShip = (e) => {
    //Change current ship to display details of
    this.setState({ switchState: 1, shipName: e.target.name });
  };

  render() {
    return (
      /*
    <Query query={getAllArticles}>
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return;
        return (
          <div className="container">
            <h1>Articales</h1>
            <div className="row">
              {data.client.map((article) => (
                <h5 className="card-title">{article.title}</h5>
              ))}
            </div>
          </div>
        );
      }}
    </Query>*/
      //<img className="card-img-top" src="..." alt="Card image cap" />
      <div>
        <AudioPlayer />;
        {this.state.switchState === 0 ? ( //Display ship names
          <div className="list-group">
            {data.data.allStarships.edges.map((item, i) => (
              <button //As clickable buttons
                key={i}
                type="button"
                className="btn btn-info"
                name={item.node.name}
                onClick={this.changeShip}
              >
                {item.node.name}
              </button>
            ))}
          </div>
        ) : (
          //QUERY
          /* {
  allStarships {
    starships {
      name
      filmConnection {
        films {
          title
          episodeID
          openingCrawl
          director
          producers
          releaseDate
        }
      }
      pilotConnection {
        pilots {
          name
          birthYear
          eyeColor
          gender
          hairColor
          height
          mass
          skinColor
          homeworld {
            name
          }
          
        }
      }
    }
  }
}
 */

          // PFdata.data.allStarships.starships[0].filmConnection.films[0].title
          <div>
            <a href="https://messier81.github.io/starwars/" role="button">
              Go Back
            </a>

            <div className="alert alert-danger" role="alert">
              <h1>{this.state.shipName}</h1>
            </div>
            <div className="alert alert-light" role="alert">
              <h4>Appeared In</h4>
            </div>

            {PFdata.data.allStarships.starships.map((item, i) =>
              item.filmConnection.films.map((film, t) =>
                item.name === this.state.shipName ? ( //Information about film
                  <div className="alert alert-info" role="alert">
                    <p>
                      <a
                        key={t}
                        className="btn btn-primary"
                        data-toggle="collapse"
                        href={"#multiCollapseExample1" + t}
                        role="button"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample1"
                      >
                        {film.title}
                      </a>
                    </p>
                    <div className="row">
                      <div className="col">
                        <div
                          className="collapse multi-collapse"
                          id={"multiCollapseExample1" + t}
                        >
                          <div className="card card-body">
                            <ul className="list-group">
                              <li className="list-group-item">
                                Episode #: {film.episodeID}
                              </li>
                              <li className="list-group-item">
                                Opening Crawl: {film.openingCrawl}
                              </li>
                              <li className="list-group-item">
                                Director: {film.director}
                              </li>
                              <li className="list-group-item">
                                Producers: {film.producers.toString()}
                              </li>
                              <li className="list-group-item">
                                Release Date: {film.releaseDate}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )
            )}
            <div className="alert alert-light" role="alert">
              <h4>Piloted By</h4>
            </div>

            {PFdata.data.allStarships.starships.map((item, i) =>
              item.pilotConnection.pilots.map((pilot, t) =>
                item.name === this.state.shipName ? ( //Information about pilot
                  <div className="alert alert-warning" role="alert">
                    <p>
                      <a
                        key={t}
                        className="btn btn-primary"
                        data-toggle="collapse"
                        href={"#multiCollapseExample1" + t + "aaa"}
                        role="button"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample1"
                      >
                        {pilot.name}
                      </a>
                    </p>
                    <div className="row">
                      <div className="col">
                        <div
                          className="collapse multi-collapse"
                          id={"multiCollapseExample1" + t + "aaa"}
                        >
                          <div className="card card-body">
                            <ul className="list-group">
                              <li className="list-group-item">
                                Birth Year: {pilot.birthYear}
                              </li>
                              <li className="list-group-item">
                                Eye Colour: {pilot.eyeColor}
                              </li>
                              <li className="list-group-item">
                                Gender: {pilot.gender}
                              </li>
                              <li className="list-group-item">
                                Hair Colour: {pilot.hairColor}
                              </li>
                              <li className="list-group-item">
                                Height: {pilot.height}
                              </li>
                              <li className="list-group-item">
                                Mass: {pilot.mass}
                              </li>
                              <li className="list-group-item">
                                Skin Colour: {pilot.skinColor}
                              </li>
                              <li className="list-group-item">
                                Home World: {pilot.homeworld.name}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Ships;
