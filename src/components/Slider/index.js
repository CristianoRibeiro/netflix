import React, { Component } from 'react';
import { ScrollView, Dimensions } from 'react-native';

import { Container, ImageSlider, Circle, ContentCircle } from './styles';
import api from '../../services/api';

const DEVICE_WIDTH = Dimensions.get('window').width;

const API_KEY = 'api_key=f2f6bad835f0eb1a657e213f7f863e6b&language=pt-BR';
const IMAGE = 'https://image.tmdb.org/t/p/w500/';

export default class Slider extends Component {
  scrollRef = React.createRef();

  state = {
    selectedIndex: 0,
    imageSlide: [],
  }
  async componentDidMount() {
    setInterval(() => {
      this.setState(prev => ({selectedIndex: prev.selectedIndex === this.state.imageSlide.length - 1? 0 : prev.selectedIndex + 1}),
      () => {
        this.scrollRef.current.scrollTo({
          animated: true,
          y: 0,
          x: DEVICE_WIDTH * this.state.selectedIndex
        })
      })
    }, 5000);

    this._getData();

  }

   _getData = async () => {
    try {
      let response = await api.get('trending/movie/day?'+ API_KEY);
      // console.tron.log(response.data);
      this.setState({imageSlide: response.data.results})
    } catch (error) {

    }
  }



  setSelectedIndex = (event) => {
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentoffset = event.nativeEvent.contentOffset.x;

    const selectedIndex = Math.floor(contentoffset / viewSize);
    this.setState({selectedIndex});
  }

  render() {
    const { selectedIndex, imageSlide } = this.state;
    return (
      <Container>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={this.setSelectedIndex}
          ref={this.scrollRef}
        >
          {imageSlide.map(image => (
            <ImageSlider
              key={image}
              style={{ height: 200, width: DEVICE_WIDTH }}
              source={{ uri: IMAGE+image.backdrop_path }}
            />
          ))}
        </ScrollView>

        <Circle>
          {imageSlide.map((image, i) => (
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
