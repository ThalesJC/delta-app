import { ActivityIndicator, View } from "react-native"

interface ListFooterProps {
  loading: boolean
}

export default function ListFooterLoading({loading} : ListFooterProps) {
  if (!loading) return
  return (
    <View>
      <ActivityIndicator size={24} color={'#0089BF'} />
    </View>
  )
}