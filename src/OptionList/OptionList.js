import React, { Component } from "react";
import Parts from "./Parts/Parts";

class OptionList extends Component {
  render() {
    return (
      <section className="main__form">
        <h2>Customize your Laptop</h2>
        <Parts
          features={this.props.features}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      </section>
    );
  }
}

export default OptionList;
