import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
// import Header from '../components/header/Header';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <StatusBar
      backgroundColor='#0083C0'
      style='light'
      />
      <Image source={require('../../assets/largeLogo.png')} />
      <View style={styles.linkContainer}>
        <Link style={styles.linkButton} href={'/product'}><Text style={styles.baseText}>Buscar por produto</Text><Image style={{alignSelf:'center', width: 25}} source={require('../../assets/font-icons/search-icon.png')} /></Link>
        <Link style={styles.linkButton} href={'/contactus'}><Text style={styles.baseText}>Fale com a gente</Text><Image source={require('../../assets/font-icons/arrow-right.png')} /></Link>
      </View>
       {/* <Header /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 64,
    backgroundColor: '#0083C0',
  },
  linkContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 23,
    width: '75%',
  },
  linkButton: {
    display: 'flex',
    textAlign: 'center',
    backgroundColor: '#00C1B4',
    color: '#FFF',
    padding: 16,
    gap: 24,
    borderRadius: 50,
    width: '100%',
  },
  baseText: {
    color: '#FFF',
    fontSize: 16,
    margin: 'auto',
    fontWeight: 'bold',
  }
});
