import React, { Component } from "react";
import axios from "axios";
import Detail from "./Detail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list: [], details: [], err: "" };
  }

  componentDidMount() {
    axios
      .get("https://davids-restaurant.herokuapp.com/categories.json")
      .then(res => {
        this.setState({ list: res.data });
      })
      .catch(err => {
        this.setState({ err: err });
      });
  }

  handleClick = id => {
    axios
      .get(
        `https://davids-restaurant.herokuapp.com/menu_items.json?category=${id}`
      )
      .then(res => {
        this.setState({ details: res.data });
      })
      .catch(err => this.setState({ err: err }));
  };

  render() {
    return (
      <div className="app">
        <div className="category">
          <h1>Menu Categories</h1>
          <ul>
            {this.state.list.map(ele => {
              return (
                <li className = "list-row" onClick={() => this.handleClick(ele.short_name)}>
                {`${ele.name} - (${ele.short_name})`}</li>
              );
            })}
          </ul>
        </div>

        <Detail data={this.state.details} />
      </div>
    );
  }
}

export default App;
