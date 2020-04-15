import React from 'react';

import { FlatList, Image, View, Text } from 'react-native';

import {
  Button,
  Container,
  Cartaz,
  ImageContent,
  Genero,
  GeneroContent,
} from './styles';

const IMAGE = 'https://image.tmdb.org/t/p/w500/';

export default function Sessoes({ genero, data, navigate }) {
  function handleScreen(item, index) {
    // console.tron.log(item);
    return navigate.navigation.navigate('Detail', { item, index });
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

  return (
    <Container>
      <Genero>
        <GeneroContent>{genero.name}</GeneroContent>
      </Genero>
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => renderItem(item, index)}
      />
    </Container>
  );
}
