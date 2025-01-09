import { Image, StyleSheet, Text, View } from 'react-native'

interface IProductCardProps {
  id: string
  name: string
  distance: string
  status: boolean
  date: string
  index: number
}

export default function ProductCard({
  id,
  name,
  distance,
  status,
  date,
  index,
}: IProductCardProps) {
  return (
    <View
      style={(index + 1) % 2 === 0 ? styles.containerEven : styles.containerOdd}
    >
      <View style={styles.dataContainer}>
        <View>
          <Text style={styles.titleText}>ID</Text>
          <Text style={styles.idBox}>{id}</Text>
        </View>
        <View>
          <Text style={styles.titleText}>Produto</Text>
          <Text style={styles.productTitle}>{name}</Text>
          <Text style={styles.productTitle}>{distance}KM</Text>
        </View>
        <View>
          <Text style={styles.titleText}>Status</Text>
          <Text style={status ? styles.statusActive : styles.statusInative}>
            {status ? 'Ativo' : 'Inativo'}
          </Text>
        </View>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.lateDate}>{`De ${date} a ${date}`}</Text>
        <Image
          source={require('../../../assets/font-icons/chevron-right.png')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerOdd: {
    width: '100%',
    height: 128,
    padding: 16,
    gap: 16,
    borderRadius: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ebebeb',
  },
  containerEven: {
    width: '100%',
    height: 128,
    padding: 16,
    gap: 16,
    borderRadius: 16,
    backgroundColor: '#EAF1FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ebebeb',
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 16,
  },
  dateContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    gap: 16,
  },
  titleText: {
    color: '#727272',
    fontSize: 12,
    fontWeight: 500,
    lineHeight: 20,
  },
  idBox: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#EAEDF2',
    borderRadius: 4,
    color: '#868EA4',
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 16,
    color: '#666',
  },
  statusActive: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    color: '#00C1B4',
    backgroundColor: '#D8EFEE',
  },
  statusInative: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#C2C2C2',
    color: '#333333',
    backgroundColor: '#EAF1FF',
  },
  shorterDate: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#D8EFEE',
    color: '#00C1B4',
  },
  upcomingDate: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#FFF4E2',
    color: '#FFB340',
  },
  lateDate: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: '#F4DFE3',
    color: '#FF4B6A',
  },
})
