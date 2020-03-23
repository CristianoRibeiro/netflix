import React, { Component } from 'react';
import { View } from 'react-native';
import Slider from '../../components/Slider';
import Sessoes from '../../components/Sessoes';
import { Container } from './styles';
import api from '../../services/api';

const API_KEY = 'api_key=f2f6bad835f0eb1a657e213f7f863e6b&language=pt-BR';
const IMAGE = 'https://image.tmdb.org/t/p/w500/';

const data = [
  {
    imageUrl: 'http://via.placeholder.com/150x250',
    title: 'something',
  },
  {
    imageUrl: 'http://via.placeholder.com/150x250',
    title: 'something two',
  },
  {
    imageUrl: 'http://via.placeholder.com/150x250',
    title: 'something three',
  },
  {
    imageUrl: 'http://via.placeholder.com/150x250',
    title: 'something four',
  },
  {
    imageUrl: 'http://via.placeholder.com/150x250',
    title: 'something five',
  },
  {
    imageUrl: 'http://via.placeholder.com/150x250',
    title: 'something six',
  },
];
export default class Main extends Component {
  state = {
    discover: [],
    genre: [],
  }
  async componentDidMount() {
    this._getData();
  }

   _getData = async () => {
    try {
      let responseDiscover = await api.get('discover/movie?'+ API_KEY);

      let responseGenre = await api.get('genre/movie/list?'+ API_KEY);


      this.setState({
        discover: responseDiscover.data.results,
        genre: responseGenre.data.genres
      });


    } catch (error) {

    }
  }

  render() {

    const { genre, discover } = this.state;

    return (
      <Container>
        <Slider />
        {
          discover.map((discove) => {
            discove.genre_ids.map((genrer_id) => {
              genre.map((genero) => {


                  if(genrer_id === genero.id){
                    console.tron.log(genero);
                    console.tron.log(discove);

                  }

              });
              // if(genrer_id)


            })
          })
        }
        <Sessoes data={data} />
      </Container>
    );
  }
}
