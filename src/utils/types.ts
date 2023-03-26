import {StackNavigationProp} from '@react-navigation/stack';
type RootStackParamList = {
  Home: undefined;
  Feeds: undefined;
};
type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Feeds'
>;
export type Props = {
  navigation: DetailsScreenNavigationProp;
};
