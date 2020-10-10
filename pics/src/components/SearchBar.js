import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value });
              }}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  console.log("Enter Pressed");
                }
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
