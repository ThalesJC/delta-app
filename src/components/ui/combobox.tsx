import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  StyleSheet,
  Modal,
  Pressable,
} from 'react-native'
import { Feather } from '@expo/vector-icons'

interface IOption {
  label: string
  value: any
}

interface ComboboxProps {
  options: IOption[]
  value: any
  onChange: (value: any) => void
  placeholder: string
  error?: { message?: string }
}

export default function Combobox({
  options,
  value,
  onChange,
  placeholder,
  error,
}: ComboboxProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const selectedOption = options.find((option) => option.value === value)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectOption = (option: IOption) => {
    onChange(option.value)
    setIsOpen(false)
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleDropdown}>
        <View style={[styles.header, error && styles.headerError]}>
          <Text
            style={[
              styles.headerText,
              selectedOption && styles.headerTextSelected,
            ]}
          >
            {selectedOption ? selectedOption.label : placeholder}
          </Text>
          <Feather size={18} color={'#000'} name={'chevron-down'} />
        </View>
      </Pressable>
      {error && <Text style={styles.errorText}>{error.message}</Text>}
      <Modal
        visible={isOpen}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <FlatList
                data={options}
                renderItem={({ item }) => (
                  <Pressable onPress={() => selectOption(item)}>
                    <View style={styles.option}>
                      <Text
                        style={[
                          styles.optionText,
                          item.value === value && styles.optionTextSelected,
                        ]}
                      >
                        {item.label}
                      </Text>
                    </View>
                  </Pressable>
                )}
                keyExtractor={(item) => item.value}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 50,
    backgroundColor: '#f8f8f8',
  },
  headerError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  headerText: {
    color: '#c2c2c2',
  },
  headerTextSelected: {
    color: '#000',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    maxHeight: 300,
    width: '80%',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    color: '#000',
  },
  optionTextSelected: {
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
})
