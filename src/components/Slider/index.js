import React from 'react';
import Carousel from 'react-native-banner-carousel';

import { Image, View, Dimensions } from 'react-native';
import { Container, Descrition, DescriptionContent } from './styles';

const API_KEY = 'api_key=f2f6bad835f0eb1a657e213f7f863e6b&language=pt-BR';
const IMAGE = 'https://image.tmdb.org/t/p/w500/';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = 300;

export default function Slider(props) {
  function renderPage(image, index) {
    return (
      <View key={index}>
        <Descrition>
          <DescriptionContent>{image.title}</DescriptionContent>
        </Descrition>

        <Image
          style={{ width: BannerWidth, height: BannerHeight }}
          source={{ uri: IMAGE + image.backdrop_path }}
        />
      </View>
    );
  }

  return (
    <Container>
      <Carousel
        autoplay
        autoplayTimeout={5000}
        loop
        index={0}
        pageSize={BannerWidth}
      >
        {props.images.map((image, index) => renderPage(image, index))}
      </Carousel>
    </Container>
  );
}
