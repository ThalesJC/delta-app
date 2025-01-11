import { useEffect, useState } from 'react'

import { FlatList, Modal, StyleSheet, View } from 'react-native'

import ProductCard from '../../components/product-card'
import SearchBar from '../../components/search-bar'
import { fetchApi } from '../../server'
import FilterModal from '../../components/filter-modal'

interface IProduct {
  id: string
  name: string
  distance: string
  status: boolean
  date: string
}

export default function Product() {
  const [response, setResponse] = useState<IProduct[]>([])
  const [openModal, setOpenModal] = useState(false)

  useEffect(() => {
    fetchApi().then((responseApi) => {
      if (!responseApi) {
        console.log('Erro ao carregar os dados.')
      }
      setResponse(responseApi)
    })
  }, [])

  return (
    <View style={styles.container}>
      <SearchBar openModal={setOpenModal} />
      <FlatList
        data={response}
        contentContainerStyle={{ gap: 16 }}
        renderItem={({ item, index }) => (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            distance={item.distance}
            status={item.status}
            date={item.date}
            index={index}
          />
        )}
      />
      <Modal visible={openModal} animationType="slide" transparent={true}>
        <FilterModal openModal={setOpenModal} />
      </Modal>
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
