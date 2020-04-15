import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  background: #000;
`;

export const Banner = styled.View`
  /* display: flex; */
`;

export const Content = styled.View``;

export const Description = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
`;

export const ContentVoto = styled.View``;

export const VotoText = styled.Text`
  color: #fff;
`;

export const ImageBanner = styled.Image`
  width: 100%;
  height: 300px;
`;

export const Similar = styled.View``;

export const Button = styled.TouchableOpacity`
  flex: 1;
`;

export const Cartaz = styled.View`
  align-items: center;
  justify-content: center;
  margin: 10px 5px 2px 0px;
`;

export const ImageContent = styled.Image`
  height: 230px;
  width: 130px;
`;

export const Load = styled.View`
  margin-top: 10px;
  align-items: center;
`;

export const DescriptionSimilar = styled.Text`
  font-size: 20px;
  color: #fff;
  margin-top: 20px;
`;
