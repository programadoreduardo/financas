import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style={{ backgroundColor: '#f0f4ff', barStyle: 'dark-content' }} />
      <Routes />
    </NavigationContainer>
  );
}
