import React, { Component } from 'react';

import { FlatList, Image, Dimensions, View, Text } from 'react-native';

import { Link } from './styles';
const imageLow = require('../../assets/images/movies.jpg');

export default class Sessoes extends Component {
  constructor(props) {
    super(props);
  }


   _renderItem = (item, index) => {
            return (
              <Link
                key={index}
                onPress={() => _handleScreen(item)}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginVertical: 10,
                    marginHorizontal: 5,
                  }}>
                  <Image
                    source={{uri: item.imageUrl}}
                    style={{
                      height: 250,
                      width: 150,

                    }}
                    resizeMode="contain"
                  />
                  <Text style={{color: '#fff'}}> {item.title} </Text>
                </View>
              </Link>
            );
          }

  render() {
    const { data } = this.props;
    return (
      <View style={{marginBottom: 4, marginHorizontal: 0}}>
          <FlatList
            data={data}
            horizontal={true}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => this._renderItem(item, index)}
          />
        </View>
    );
  }
}
