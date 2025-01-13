import React, { useState } from 'react'
import { View, StyleSheet, Text, Pressable, Platform } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { FontAwesome } from '@expo/vector-icons'

interface DatePickerProps {
  value: Date
  onChange: (date: Date | null) => void
  label: string
  placeholder: string
}

export default function DatePicker({
  value,
  onChange,
  label,
  placeholder,
}: DatePickerProps) {
  const [show, setShow] = useState(false)

  const onChangeDate = (event: any, selectedDate?: Date) => {
    setShow(Platform.OS === 'ios')
    if (event.type === 'set') {
      onChange(selectedDate || value)
    }
  }

  const showDatepicker = () => {
    setShow(true)
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Pressable onPress={showDatepicker}>
        <View style={styles.input}>
          <FontAwesome name="calendar" size={24} color="#000" />
          <Text style={[styles.inputText, !value && styles.placeholderText]}>
            {value ? formatDate(value) : placeholder}
          </Text>
        </View>
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
          mode={'date'}
          is24Hour={true}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          onChange={onChangeDate}
        />
      )}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 500,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 50,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  inputText: {
    fontSize: 16,
  },
  placeholderText: {
    color: '#c2c2c2',
  },
})
