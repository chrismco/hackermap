import React, { Component } from "react";
import  MoveDownButton from "./moveDown";
import  MoveUpButton from "./moveUp";
import "./Navigation.css";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: this.props.locations,
    };
    this.handleMoveDown = this.handleMoveDown.bind(this);
    this.handleMoveUp = this.handleMoveUp.bind(this);
  }

  componentDidUpdate(currentProps, prevProps){
    console.log(currentProps, prevProps)
  }

  // Used for rendering
  getClasses(ctx, index) {
    let classes = `material-icons ${ctx}`;
    if (ctx === "dots") {
      if (this.isLast(index)) {
        classes += " hidden";
      }
    } else {
      classes += this.isLast(index) ? " small" : " x-small";
      if (index === 0) {
        classes += " first";
      }
    }
    return classes;
  }

  // Used for rendering

  isLast(index) {
    return index === this.state.locations.length - 1;
  }

  isFirst(index) {
    return index === 0;
  }

  handleMoveUp(index) {
    if (index > 0) {
      this.swapIndex(index, index - 1);
    }
  }

  handleMoveDown(index) {
    if (index < this.state.locations.length - 1) {
      this.swapIndex(index, index + 1);
    }
  }

  swapIndex(item1, item2) {
    let locations = [...this.state.locations];

    let tmpProp = locations[item1];
    locations[item1] = locations[item2];
    locations[item2] = tmpProp;

    this.setState({ locations });
  }

  showButtonShow(index) {
    if (this.isFirst(index)) {
      return   <MoveDownButton itemIndex={index} onClick={ this.handleMoveDown} />
    } else if (this.isLast(index)) {
      return  (
        <MoveUpButton itemIndex={index} onClick={ this.handleMoveUp} />
      );
    }

     return  (
        <React.Fragment>
          <MoveUpButton itemIndex={index} onClick={ this.handleMoveUp} />
          <MoveDownButton itemIndex={index} onClick={ this.handleMoveDown} />
        </React.Fragment>
      );


  }

  render() {
    const { locations } = this.state;


    console.log(this.props)


    return (
      <div className="layout-row align-items-center justify-content-center navigation-screen">
        <div className="card layout-row flat map-card">
          <section className="card pb-16 pr-16 flex-auto layout-column justify-content-center">
            <ul className="pl-0" data-testid="location-list">
              {locations.map((location, index) => (
                <li
                  key={"row" + index}
                  data-testid={"location-" + index}
                  className="layout-row justify-content-between align-items-center mr-8 pl-40 relative"
                >
                  <div className="layout-column justify-content-start align-items-center handle">
                    <i className={this.getClasses("marker", index)}>
                      {this.isLast(index) ? "room" : "radio_button_checked"}
                    </i>
                    <i className={this.getClasses("dots", index)}>more_vert</i>
                  </div>
                  <div className="location-name">
                    <p
                      className="caption text-start mb-4"
                      data-testid="location"
                    >
                      {location}
                    </p>
                  </div>
                  <div>{this.showButtonShow(index)}
                
                  </div>
                </li>
              ))}
            </ul>
          </section>
          <section className="flex-auto">
            <img src="images/map.svg" className="fill" alt="map" />
          </section>
        </div>
      </div>
    );
  }
}
