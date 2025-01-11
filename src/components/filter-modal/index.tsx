import { Dispatch, SetStateAction } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

interface FilterModalProps {
  openModal: Dispatch<SetStateAction<boolean>>
}
export default function FilterModal({ openModal }: FilterModalProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.filterInput}>
          <Text style={styles.title}>Filtros de busca</Text>
        </View>
        <View style={styles.filterInput}>
          <Text style={styles.text}>Produto</Text>
        </View>
        <View style={styles.filterInput}>
          <Text style={styles.text}>status</Text>
        </View>
        <View style={styles.filterInput}>
          <Text style={styles.text}>periodo</Text>
        </View>
        <View style={styles.filterInput}>
          <TouchableOpacity
            style={styles.touchable}
            onPress={() => openModal(false)}
          >
            <View style={styles.applyButton}>
              <Text style={styles.text}>Aplicar filtros</Text>
              <Feather size={24} color={'#FFF'} name="arrow-right" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#00000054',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 14,
    height: '75%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#0089BF',
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 700,
    lineHeight: 32,
  },
  text: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 500,
  },
  touchable: {
    marginTop: 12,
  },
  applyButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    padding: 15,
    backgroundColor: '#00C1B4',
    borderRadius: 50,
  },
  filterInput: {
    width: '60%',
  },
})
