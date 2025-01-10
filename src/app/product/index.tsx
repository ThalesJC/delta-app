import { StyleSheet, View } from 'react-native'
import ProductCard from '../../components/product-card/index'
import SearchBar from '../../components/search-bar'
// import response from '../../../MOCK/MOCK_DATA.json'

const response = [
  {
    id: '1',
    name: 'Produto 1',
    distance: '10',
    status: true,
    date: '10/10/2021',
  },
  {
    id: '2',
    name: 'Produto 2',
    distance: '20',
    status: false,
    date: '12/10/2021',
  },
]

export default function Product() {
  return (
    <View style={styles.container}>
      <SearchBar />
      {response.map((product, index) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          distance={product.distance}
          status={product.status}
          date={product.date}
          index={index}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 16,
    backgroundColor: '#fff',
  },
})
