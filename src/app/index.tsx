import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.image}
        source={require('../../assets/img/deltaGlobalBgCompress.png')}
      >
        <View style={styles.bgColor}>
          <StatusBar backgroundColor="#0083C0" style="light" />
          <Image source={require('../../assets/largeLogo.png')} />
          <View style={styles.linkContainer}>
            <Link style={styles.linkButton} href={'/product'}>
              <View style={styles.linkContent}>
                <Text style={styles.baseText}>Buscar por produto</Text>
                <Image
                  style={{ width: 25 }}
                  source={require('../../assets/font-icons/search-icon.png')}
                />
              </View>
            </Link>
            <Link style={styles.linkButton} href={'/contactus'}>
              <View style={styles.linkContent}>
                <Text style={styles.baseText}>Fale com a gente</Text>
                <Image
                  source={require('../../assets/font-icons/arrow-right.png')}
                />
              </View>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
    fontWeight: 'bold',
  },
  linkContent: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  bgColor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 64,
    backgroundColor: '#00729FE0',
  },
  image: {
    flex: 1,
    width: '100%',
  },
})
