import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;

export const Container = styled.View`
  height: 200px;
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
