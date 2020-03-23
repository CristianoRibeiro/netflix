import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';

import { Container, ImageSlider, Circle, ContentCircle } from './styles';

const DEVICE_WIDTH = Dimensions.get('window').width;

export default class Slider extends Component {
 scrollRef = React.createRef();

  state = {
    selectedIndex: 0
  }

  componentDidMount = () => {
    setInterval(() => {
      this.setState(prev => ({selectedIndex: prev.selectedIndex === this.props.images.length - 1? 0 : prev.selectedIndex + 1}),
      () => {
        this.scrollRef.current.scrollTo({
          animated: true,
          y: 0,
          x: DEVICE_WIDTH * this.state.selectedIndex
        })
      })
    }, 1000);
  }


  setSelectedIndex = (event) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentoffset = event.nativeEvent.contentOffset.x;

    const selectedIndex = Math.floor(contentoffset / viewSize);
    this.setState({selectedIndex});
  }

  render() {
    const { images} = this.props;
    const { selectedIndex } = this.state;
    // console.tron.log(imageSlide)

    return (
      <Container>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
        >
          {images.map(image => (
            <ImageSlider
              key={image}
              style={{ height: 200, width: DEVICE_WIDTH }}
              source={{ uri: image }}
            />
          ))}
        </ScrollView>

        <Circle>
          {images.map((image, i) => (
            <ContentCircle
              key={image}
              style={{
                opacity: i === selectedIndex ? 0.5 : 1,
              }}
            />
          ))}
        </Circle>
      </Container>
    );
  }
}
