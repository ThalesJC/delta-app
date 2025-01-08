import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
// import Header from '../components/header/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
      backgroundColor='#0083C0'
      style='light'
      />
      <Image source={require('../../assets/largeLogo.png')} />
      <Link href={'/product'}>Tela de produtos</Link>
      <Link href={'/contactus'}>Tela de contate-nos</Link>
       {/* <Header /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0083C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
