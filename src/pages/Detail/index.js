import React, { useState, useEffect } from 'react';

import { FlatList, ActivityIndicator } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import api from '../../services/api';

import {
  Container,
  Banner,
  Content,
  Description,
  DescriptionSimilar,
  ImageBanner,
  Similar,
  Button,
  Cartaz,
  ImageContent,
  Load,
} from './styles';

const API_KEY = 'api_key=f2f6bad835f0eb1a657e213f7f863e6b&language=pt-BR';
const IMAGE = 'https://image.tmdb.org/t/p/w500/';

export default function Detail(props) {
  const [similar, setSimilar] = useState([]);
  const [video, setVideo] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { item } = props.route.params;
  useEffect(() => {
    getSimilar();
  }, [page, item]);

  function handleScreen(item, index) {
    // console.tron.log(item);
    return props.navigation.navigate('Detail', { item, index });
  }
  function renderItem(item, index) {
    return (
      <Button key={index} onPress={() => handleScreen(item, index)}>
        <Cartaz>
          <ImageContent
            source={{ uri: IMAGE + item.poster_path }}
            resizeMode="contain"
          />
        </Cartaz>
      </Button>
    );
  }

  async function getSimilar() {
    try {
      const response = await api.get(
        `/movie/${item.id}/similar?${API_KEY}&page=${page}`
      );
      const video = await api.get(`/movie/${item.id}/videos?${API_KEY}`);
      setVideo(video.data.results);

      if (response.data.results.length > 0)
        setSimilar(similar => [...similar, ...response.data.results]);
    } catch (error) {}
  }

  function onEndReached() {
    setLoading(true);
    setPage(page + 1);
    setLoading(false);
  }

  function renderFooter() {
    return loading ? (
      <Load>
        <ActivityIndicator size="large" />
      </Load>
    ) : null;
  }

  return (
    <Container>
      <Banner>
        <ImageBanner source={{ uri: IMAGE + item.backdrop_path }} />

        <Content>
          <Description>{item.title}</Description>
        </Content>
      </Banner>

      <Similar>
        <DescriptionSimilar>Titulos Semelhantes</DescriptionSimilar>

        <FlatList
          data={similar}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => renderItem(item, index)}
          onEndReached={onEndReached}
          onEndReachedThreshold={7}
          ListFooterComponent={renderFooter}
        />
      </Similar>
    </Container>
  );
}
