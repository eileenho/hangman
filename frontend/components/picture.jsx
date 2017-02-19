import React from 'react';

class Picture extends React.Component {
  constructor(props) {
    super(props);

    this.renderTheseImages = this.renderTheseImages.bind(this);
  }

  renderTheseImages() {

    let catHappy = "http://res.cloudinary.com/di8mt9hbc/image/upload/v1487464940/happycat_ycbe7f.png";
    let catHappyOpen = "http://res.cloudinary.com/di8mt9hbc/image/upload/v1487464917/happyopeneyescat_tdlytl.png";
    let catMeh = "http://res.cloudinary.com/di8mt9hbc/image/upload/v1487464917/openeyescat_uyywcp.png";
    let catConcerned = "http://res.cloudinary.com/di8mt9hbc/image/upload/v1487464915/concernedcat_y5mxdt.png";
    let catSad = "http://res.cloudinary.com/di8mt9hbc/image/upload/v1487464917/sadcat_eef8di.png";

    let cushion1Yellow = "http://res.cloudinary.com/di8mt9hbc/image/upload/v1487464913/yellowcushion_iu5bca.png";
    let cushion2Purple = "http://res.cloudinary.com/di8mt9hbc/image/upload/v1487464913/purplecushion_dir6hv.png";
    let cushion3Orange = "http://res.cloudinary.com/di8mt9hbc/image/upload/v1487464912/orangecushion_vlziuu.png";
    let cushion4LightBlue = "http://res.cloudinary.com/di8mt9hbc/image/upload/v1487464912/lightbluecushion_hnrrkq.png";
    let cushion5Green = "http://res.cloudinary.com/di8mt9hbc/image/upload/v1487464912/greencushion_hyz3dv.png";
    let cushion6Blue = "http://res.cloudinary.com/di8mt9hbc/image/upload/v1487464898/bluecushion_ypx4pj.png";

    switch (this.props.guessesRemaining) {
      case 6:
        return (
          <div>
            <img src={ catHappy } />
            <img src={ cushion1Yellow } />
            <img src={ cushion2Purple } />
            <img src={ cushion3Orange } />
            <img src={ cushion4LightBlue } />
            <img src={ cushion5Green } />
            <img src= { cushion6Blue } />
          </div>
        );
      case 5:
        return (
          <div>
            <img src={ catHappyOpen } />
            <img src={ cushion2Purple } />
            <img src={ cushion3Orange } />
            <img src={ cushion4LightBlue } />
            <img src={ cushion5Green } />
            <img src= { cushion6Blue } />
          </div>
        );
      case 4:
        return (
          <div>
            <img src={ catHappyOpen } />
            <img src={ cushion3Orange } />
            <img src={ cushion4LightBlue } />
            <img src={ cushion5Green } />
            <img src= { cushion6Blue } />
          </div>
        );
      case 3:
        return (
          <div>
            <img src={ catMeh } />
            <img src={ cushion4LightBlue } />
            <img src={ cushion5Green } />
            <img src= { cushion6Blue } />
          </div>
        );
      case 2:
        return (
          <div>
            <img src={ catMeh } />
            <img src={ cushion5Green } />
            <img src= { cushion6Blue } />
          </div>
        );
      case 1:
        return (
          <div>
            <img src={ catConcerned } />
            <img src= { cushion6Blue } />
          </div>
        );
      case 0:
        return (
          <div>
            <img src={ catSad } />
          </div>
        );
      default:
        return (
          <div></div>
        );
    }
  }


  render() {
    return (
      <div>
        { this.renderTheseImages() }
      </div>
    );
  }
}

export default Picture;
