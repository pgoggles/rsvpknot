import React from 'react';
import { Carousel } from 'react-bootstrap';
import ImageConstants from '../../Constants/Home/Images';
import HomeStyles from '../../Styles/Home';

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
              <Carousel.Caption>
                <HomeStyles.Carousel>
                  <p>Looking to manage reservations?</p>
                  <HomeStyles.GetStartedButton>Get Started</HomeStyles.GetStartedButton>
                </HomeStyles.Carousel>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    );
  }
}

export default Home;