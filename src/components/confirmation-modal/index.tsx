import { Dispatch, SetStateAction } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Feather, MaterialIcons } from '@expo/vector-icons'
interface FilterModalProps {
  openModal: Dispatch<SetStateAction<boolean>>
  handleSubmit: any
  watch: any
}

export default function ConfirmationModal({
  openModal,
  handleSubmit,
  watch,
}: FilterModalProps) {
  const name = watch('name')
  const rg = watch('rg')
  const cpf = watch('cpf')
  const phoneNumber = watch('phoneNumber')
  const email = watch('email')
  const street = watch('street')
  const addressNumber = watch('addressNumber')
  const complement = watch('complement')
  const district = watch('district')
  const city = watch('city')
  const postalCode = watch('postalCode')

  const onSubmit = async () => {
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

        <View>
          <MaterialIcons
            style={{ backgroundColor: '#FFF', borderRadius: 50 }}
            name="check-circle"
            size={53}
            color={'#00C1B4'}
          />
        </View>

        <View style={styles.customerDataSection}>
          <Text style={styles.titleText}>Revise seus dados</Text>
          <View style={styles.row}>
            <View style={styles.column}>
              <View>
                <Text style={styles.dataTextField}>Nome</Text>
                <Text style={styles.dataTextValue}>{name}</Text>
              </View>
              <View>
                <Text style={styles.dataTextField}>CPF</Text>
                <Text style={styles.dataTextValue}>{cpf}</Text>
              </View>
            </View>
            <View style={styles.column}>
              <View>
                <Text style={styles.dataTextField}>RG</Text>
                <Text style={styles.dataTextValue}>{rg}</Text>
              </View>
              <View>
                <Text style={styles.dataTextField}>Telefone</Text>
                <Text style={styles.dataTextValue}>{phoneNumber}</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.dataTextField}>Email</Text>
            <Text style={styles.dataTextValue}>{email}</Text>
          </View>
          <View>
            <Text style={styles.dataTextField}>Endereço</Text>
            <Text style={styles.dataTextValue}>{`${street}, ${addressNumber} ${district}`}</Text>
            <Text style={styles.dataTextValue}>{`${city} - ${postalCode}`}</Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <Pressable onPress={handleSubmit(onSubmit)}>
            <View style={styles.pressable}>
              <Text style={styles.buttonText}>Confirmar</Text>
              <Feather size={24} color={'#FFF'} name="arrow-right" />
            </View>
          </Pressable>
          <Pressable onPress={() => openModal(false)}>
            <View style={styles.outlinePressable}>
              <Text style={styles.outlineText}>Cancelar</Text>
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
    height: '90%',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#0089BF',
  },
  customerDataSection: {
    gap: 16,
    padding: 50
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    gap: 16
  },
  buttonsContainer: {
    width: '60%',
    gap: 8,
  },
  outlinePressable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    padding: 15,
    backgroundColor: '#00C1B4',
    borderRadius: 50,
  },
  pressable: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    padding: 15,
    backgroundColor: '#00C1B4',
    borderRadius: 50,
  },
  titleText: {
    fontSize: 26,
    color: '#FFF',
    fontWeight: 700,
    lineHeight: 32,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 600,
  },
  outlineText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 500,
  },
  dataTextField: {
    fontSize: 13,
    fontWeight: 500,
    color: '#FFF',
  },
  dataTextValue: {
    fontSize: 13,
    fontWeight: 400,
    color: '#FFF',
  },
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 15,
  },
})
