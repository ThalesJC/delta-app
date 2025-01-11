import { Dispatch, SetStateAction, useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { FontAwesome, Feather } from '@expo/vector-icons'

interface SearchBarProps {
  openModal: Dispatch<SetStateAction<boolean>>
}

export default function SearchBar({ openModal }: SearchBarProps) {
  const [searchText, setSearchText] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Busca</Text>
      <View style={styles.componentsWrapper}>
        <View style={styles.searchTextLabelWrapper}>
          <Text style={styles.searchTextLabel}>Pesquise por ID</Text>
          <View style={styles.searchTextInputContainer}>
            <FontAwesome size={16} color={'#545454'} name="search" />
            <TextInput
              value={searchText}
              onChangeText={setSearchText}
              placeholder="Pesquisar"
            />
          </View>
        </View>
        <View style={styles.buttonsWrapper}>
          <View style={styles.filterButtonContainer}>
            <Feather size={16} color={'#c2c2c2'} name="filter" />
            <Text style={styles.placeholder}>Filtros</Text>
          </View>
          <TouchableOpacity
            style={styles.blueButton}
            onPress={() => {
              openModal(true)
            }}
          >
            <Feather size={24} color={'#FFF'} name="arrow-right" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 24,
    gap: 16,
  },
  componentsWrapper: {
    gap: 12,
    flexDirection: 'row',
  },
  searchTextLabelWrapper: {
    flex: 1,
    gap: 4,
  },
  buttonsWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  searchTextInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    height: 40,
    paddingLeft: 16,
    borderColor: '#ebebeb',
    backgroundColor: '#f6f6f6',
  },
  filterButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    height: 40,
    marginTop: 'auto',
    paddingHorizontal: 24,
    borderColor: '#ebebeb',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0089BF',
  },
  searchTextLabel: {
    fontSize: 14,
    fontWeight: 500,
    color: '#727272',
  },
  placeholder: {
    fontSize: 14,
    fontWeight: 500,
    color: '#c2c2c2',
  },
  blueButton: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 'auto',
    borderRadius: 50,
    backgroundColor: '#0089BF',
  },
})
