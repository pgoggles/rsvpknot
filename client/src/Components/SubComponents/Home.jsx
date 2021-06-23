import React from 'react';
import { Carousel } from 'react-bootstrap';
import ImageConstants from '../../Constants/Home/Images';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Carousel>
        {ImageConstants.Carousel.map((image) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image}
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default Home;