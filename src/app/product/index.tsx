import { StyleSheet, Text, View } from "react-native";

export default function Product() {
  return (
    <View style={styles.container}>
      <Text>Lista de produtos</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});