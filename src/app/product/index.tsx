import { useEffect, useState } from 'react'

import { FlatList, Modal, StyleSheet, View } from 'react-native'

import ProductCard from '../../components/product-card'
import SearchBar from '../../components/search-bar'
import { fetchApi } from '../../server'
import FilterModal from '../../components/filter-modal'
import ListFooterLoading from '../../components/loadings/list-footer-loading'

interface IProduct {
  id: string
  name: string
  distance: string
  status: boolean
  date: string
}

interface FetchParams {
  page: number
  pageSize: number
  sortBy?: 'name' | 'status' | 'date'
  sortOrder?: 'asc' | 'desc'
  filters?: {
    name?: string
    status?: boolean
    date?: string
  }
}

interface Filters {
  name: string
  status: boolean | undefined
  date: string
}

export default function Product() {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [openModal, setOpenModal] = useState(false)
  const [filters, setFilters] = useState<Filters>({
    name: '',
    status: undefined,
    date: '',
  })

  const params: FetchParams = {
    page,
    pageSize: 5,
    sortBy: 'date',
    sortOrder: 'asc',
    filters,
  }

  const handleFilters = ({name, status, date}: Filters) => {
    console.log('entrou em filters', filters);
    
    setFilters({
      name,
      status,
      date
    })
  }

  const handleGetData = async () => {
    console.log('chamei getData');
    
    setLoading(true)

    const response = await fetchApi(params)
    setProducts([...products, ...response?.data])
    setPage(page + 1)
    setLoading(false)
  }

  useEffect(() => {
    handleGetData()
    console.log('useEffect', filters);
    
  }, [filters])

  return (
    <View style={styles.container}>
      <SearchBar openModal={setOpenModal} />
      <FlatList
        data={products}
        contentContainerStyle={{ gap: 16 }}
        onEndReached={handleGetData}
        onEndReachedThreshold={0.2}
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
        ListFooterComponent={() => <ListFooterLoading loading={loading} />}
      />
      <Modal visible={openModal} animationType="slide" transparent={true}>
        <FilterModal openModal={setOpenModal} handleFilters={handleFilters} />
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
