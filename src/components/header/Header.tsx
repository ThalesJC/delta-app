import { Image, View, StyleSheet } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <Image source={require('../../../assets/smallLogo.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: '15%',
    width: '100%',
    backgroundColor: '#0083C0',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 16,
  },
})
