import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

export const Container = styled.View`
  height: 300px;
`;

export const ImageSlider = styled.Image``;

export const Circle = styled.View`
  position: absolute;
  bottom: 15px;
  height: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContentCircle = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  margin: 5px;
  background-color: #fff;
`;

export const Descrition = styled.View`
  position: absolute;
  z-index: 2;
  width: 100%;
  padding: 10px;
  bottom: 10px;
`;

export const DescriptionContent = styled.Text`
  color: #fff;
  font-size: 25px;
  text-shadow: 2px 4px 2px rgba(0, 0, 0, 0.19);
  font-weight: bold;
`;
