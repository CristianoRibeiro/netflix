import React, { useState, useEffect } from 'react';

import { ScrollView } from 'react-native';

import Slider from '../../components/Slider';
import Sessoes from '../../components/Sessoes';
import { Container } from './styles';
import api from '../../services/api';

const API_KEY = 'api_key=f2f6bad835f0eb1a657e213f7f863e6b&language=pt-BR';

export default function Main(props) {
  const [discover, setDiscovers] = useState([]);
  const [genre, setGenres] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [banner, setBanners] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const filmes = await api.get(`discover/movie?${API_KEY}`);
      const generos = await api.get(`genre/movie/list?${API_KEY}`);
      const bannerResponse = await api.get(`trending/movie/day?${API_KEY}`);

      generos.data.genres.map((genero, index) => {
        categorias.push({ genero, filmes: [] });

        filmes.data.results.map(filme => {
          filme.genre_ids.map(genre_id => {
            if (genero.id === genre_id) {
              categorias[index].filmes.push(filme);
            }
          });
        });
      });

      setDiscovers(filmes.data.results);
      setGenres(generos.data.genres);
      setCategorias(categorias);
      setBanners(bannerResponse.data.results);
    } catch (error) {}
  }

  return (
    <Container>
      <ScrollView>
        <Slider images={banner} />
        {categorias.map((data, index) => {
          if (data.filmes.length !== 0)
            return (
              <Sessoes
                key={index}
                data={data.filmes}
                genero={data.genero}
                navigate={props}
              />
            );
        })}
      </ScrollView>
    </Container>
  );
}
