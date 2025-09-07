import { useNavigation } from '@react-navigation/native';
import { HeaderProperties } from './properties';
import { ButtonMenu, Container, Title } from './styles';
import Feather from '@react-native-vector-icons/feather';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export default function Header(properties: HeaderProperties) {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <Container>
      <ButtonMenu onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={35} color="#121212" />
      </ButtonMenu>
      {properties.title && <Title>{properties.title}</Title>}
    </Container>
  );
}
