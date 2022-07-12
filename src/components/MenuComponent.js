import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardTitle } from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card tag="li">
            {/* Hiển thị hình ảnh món ăn */}
            <CardImg
              width="100%"
              object
              src={dish.image}
              alt={dish.name}
            ></CardImg>

            <CardImgOverlay>
              {/* Hiển thị tên món ăn*/}
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <Media list>{menu}</Media>
        </div>
      </div>
    );
  }
}

export default Menu;
