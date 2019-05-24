import React, { Component } from "react";

import defaultText from "./defaultText";
import "./App.css";

const marked = require("marked");

class App extends Component {
  state = {
    markdown: defaultText
  };

  textChange = event => {
    this.setState({
      markdown: event.target.value
    });
  };

  render() {
    const { markdown } = this.state;

    return (
      <div className="container">
        <header>
          <h1 className="text-center my-5">
            <u>Markdown Previewer</u>
          </h1>
        </header>

        <div className="row justify-content-around grid-divider">
          <div className="col-12 col-lg-5">
            <h5>Enter your markdown:</h5>
            <form>
              <div className="form-group">
                <textarea
                  name="markdown"
                  id="markdown"
                  cols="30"
                  rows="31"
                  className="form-control"
                  value={markdown}
                  onChange={this.textChange}
                />
              </div>
            </form>
          </div>

          <div className="col-12 col-lg-5">
            <h5>Your outputted text:</h5>
            <div
              className="border rounded p-3 mb-5 output"
              dangerouslySetInnerHTML={{ __html: marked(markdown) }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
