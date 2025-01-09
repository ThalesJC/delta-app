import { StyleSheet, Text, View } from 'react-native'

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Busca</Text>
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    gap: 16,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0089BF',
  },
})
