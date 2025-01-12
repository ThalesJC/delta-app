import { Dispatch, SetStateAction } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import Combobox from '../ui/combobox'

import { useForm, Controller } from 'react-hook-form'

// array com 100 opcoes de entradas para o combobox
import { teste } from '../data-teste'
import DatePicker from '../ui/datepicker'

interface Filters {
  name: string
  status: boolean | undefined
  date: string | Date
}

interface FilterModalProps {
  openModal: Dispatch<SetStateAction<boolean>>
  handleFilters: ({ name, status, date }: Filters) => void
}

const nameOptions = [
  {
    label: 'AUTO FROTA',
    value: 'AUTO FROTA',
  },
]
const statusOption = [
  {
    label: 'Ativo',
    value: true,
  },
  {
    label: 'Inativo',
    value: false,
  },
]

export default function FilterModal({
  openModal,
  handleFilters,
}: FilterModalProps) {
  const { control, handleSubmit } = useForm<Filters>({
    defaultValues: {
      name: '',
      status: undefined,
      date: new Date(),
    },
  })

  const onSubmit = async (data: Filters) => {
    await handleFilters(data)
    openModal(false)
  }

  const handleClose = () => {
    openModal(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.closeButton}>
          <Pressable onPress={handleClose}>
            <Feather size={32} color={'#FFF'} name={'x'} />
          </Pressable>
        </View>
        <View style={styles.filterInput}>
          <Text style={styles.title}>Filtros de busca</Text>
        </View>
        <View style={styles.filterInput}>
          <Text style={styles.text}>Produto</Text>
          <Controller
            control={control}
            name={'name'}
            render={({ field: { onChange, value } }) => (
              <Combobox
                options={nameOptions}
                value={value}
                onChange={onChange}
                placeholder={'Todos'}
              />
            )}
          />
        </View>
        <View style={styles.filterInput}>
          <Text style={styles.text}>Status</Text>
          <Controller
            control={control}
            name={'status'}
            render={({ field: { onChange, value } }) => (
              <Combobox
                options={statusOption}
                value={value}
                onChange={onChange}
                placeholder={'Todos'}
              />
            )}
          />
        </View>
        <View style={styles.filterInput}>
          <Controller
            control={control}
            name={'date'}
            render={({ field: { onChange, value } }) => (
              <DatePicker
                value={new Date(value)}
                onChange={onChange}
                label={'Periodo'}
                placeholder={'Selecione uma data'}
              />
            )}
          />
        </View>
        <View style={styles.filterInput}>
          <Pressable style={styles.touchable} onPress={handleSubmit(onSubmit)}>
            <View style={styles.applyButton}>
              <Text style={styles.text}>Aplicar filtros</Text>
              <Feather size={24} color={'#FFF'} name="arrow-right" />
            </View>
          </Pressable>
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
    gap: 4,
    width: '60%',
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 15,
  }
})
