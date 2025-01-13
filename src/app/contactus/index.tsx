import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native'

import { useForm, Controller } from 'react-hook-form'
import { Feather } from '@expo/vector-icons'
import { useState } from 'react'
import ConfirmationModal from '../../components/confirmation-modal'

interface CustomerContact {
  name: string
  email: string
  cpf: string
  rg: string
  phoneNumber: string
  birthDate: string
  postalCode: string
  street: string
  addressNumber: string
  complement?: string
  district: string
  city: string
  state: string
}

export default function ContactUs() {
  const [openModal, setOpenModal] = useState(false)
  const { control, handleSubmit, watch } = useForm<CustomerContact>({
    defaultValues: {
      name: '',
      email: '',
      cpf: '',
      rg: '',
      phoneNumber: '',
      birthDate: '',
      postalCode: '',
      street: '',
      addressNumber: '',
      complement: '',
      district: '',
      city: '',
      state: '',
    },
  })

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.mainTitle}>Formulário de Contato</Text>

        <View style={styles.container}>
          <Text style={styles.sectionTitle}>Dados do Cliente</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Nome</Text>
            <Controller
              control={control}
              name={'name'}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  onChangeText={onChange}
                  placeholder="Digite seu nome"
                  placeholderTextColor={'#c2c2c2'}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <Controller
              control={control}
              name={'email'}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  onChangeText={onChange}
                  placeholder="Digite seu email"
                  placeholderTextColor={'#c2c2c2'}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.row}>
              <View style={styles.smallInputContainer}>
                <Text style={styles.inputLabel}>CPF</Text>
                <Controller
                  control={control}
                  name={'cpf'}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.textInput}
                      onChangeText={onChange}
                      placeholder="Digite seu cpf"
                      placeholderTextColor={'#c2c2c2'}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </View>
              <View style={styles.smallInputContainer}>
                <Text style={styles.inputLabel}>RG</Text>
                <Controller
                  control={control}
                  name={'rg'}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.textInput}
                      onChangeText={onChange}
                      placeholder="Digite seu RG"
                      placeholderTextColor={'#c2c2c2'}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.row}>
              <View style={styles.smallInputContainer}>
                <Text style={styles.inputLabel}>Telefone</Text>
                <Controller
                  control={control}
                  name={'phoneNumber'}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.textInput}
                      onChangeText={onChange}
                      placeholder="(00)00000-0000"
                      placeholderTextColor={'#c2c2c2'}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </View>
              <View style={styles.smallInputContainer}>
                <Text style={styles.inputLabel}>Data de Nascimento</Text>
                <Controller
                  control={control}
                  name={'birthDate'}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.textInput}
                      onChangeText={onChange}
                      placeholder="__/__/__"
                      placeholderTextColor={'#c2c2c2'}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.sectionTitle}>Endereço</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>CEP</Text>
            <Controller
              control={control}
              name={'postalCode'}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  onChangeText={onChange}
                  placeholder="Buscar"
                  placeholderTextColor={'#c2c2c2'}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Endereço</Text>
            <Controller
              control={control}
              name={'street'}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.textInput}
                  onChangeText={onChange}
                  placeholder="Rua Olinda,"
                  placeholderTextColor={'#c2c2c2'}
                  onBlur={onBlur}
                  value={value}
                />
              )}
            />
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.row}>
              <View style={styles.smallInputContainer}>
                <Text style={styles.inputLabel}>Número</Text>
                <Controller
                  control={control}
                  name={'addressNumber'}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.textInput}
                      onChangeText={onChange}
                      placeholder="140"
                      placeholderTextColor={'#c2c2c2'}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </View>
              <View style={styles.smallInputContainer}>
                <Text style={[styles.inputLabel]}>Complemento</Text>
                <Controller
                  control={control}
                  name={'complement'}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.textInput}
                      onChangeText={onChange}
                      placeholder="5º andar"
                      placeholderTextColor={'#c2c2c2'}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.row}>
              <View style={styles.smallInputContainer}>
                <Text style={styles.inputLabel}>Bairro</Text>
                <Controller
                  control={control}
                  name={'district'}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.textInput}
                      onChangeText={onChange}
                      placeholder="São Geraldo"
                      placeholderTextColor={'#c2c2c2'}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </View>
              <View style={styles.smallInputContainer}>
                <Text style={[styles.inputLabel]}>Cidade</Text>
                <Controller
                  control={control}
                  name={'city'}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      style={styles.textInput}
                      onChangeText={onChange}
                      placeholder="Porto Alegre"
                      placeholderTextColor={'#c2c2c2'}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => setOpenModal(true)}
        >
          <Text style={styles.buttonText}>Enviar</Text>
          <Feather name={'arrow-right'} color={'#FFF'} size={24} />
        </TouchableOpacity>
      </View>
      <Modal
        visible={openModal}
        animationType="slide"
        transparent={true}
      >
        <ConfirmationModal openModal={setOpenModal} handleSubmit={handleSubmit} watch={watch} />
      </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
  },
  container: {
    gap: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mainTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: '#0089BF',
    marginTop: 24,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 500,
    color: '#727272',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 600,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#dadada',
    backgroundColor: '#f6f6f6',
  },
  inputContainer: {
    gap: 4,
  },
  smallInputContainer: {
    width: '48%',
    gap: 4,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: 500,
    color: '#727272',
  },
  submitButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#00C1B4',
    borderRadius: 50,
    padding: 16,
    marginBottom: 43,
  },
})
