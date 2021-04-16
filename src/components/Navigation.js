import React, { Component } from "react";
import  MoveDownButton from "./moveDown";
import  MoveUpButton from "./moveUp";
import "./Navigation.css";
import {moveUp, moveDown} from '../common/swap';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: this.props.locations,
    };

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

  showButtonShow(index) {
    if (this.isFirst(index)) {
      return   <MoveDownButton  onClick={() => this.setState({locations: moveDown(this.state.locations, index)})} />
    } else if (this.isLast(index)) {
      return  (
        <MoveUpButton  onClick={() => this.setState({locations: moveUp(this.state.locations, index)})} />
      );
    }

     return  (
        <React.Fragment>
          <MoveUpButton  onClick={() => this.setState({locations: moveUp(this.state.locations, index)})} />
          <MoveDownButton  onClick={() => this.setState({locations: moveDown(this.state.locations, index)})} />
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
