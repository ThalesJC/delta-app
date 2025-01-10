import { Stack } from 'expo-router'
import { Image } from 'react-native'

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0083C0',
        },
        headerTintColor: '#fff',
        headerBackButtonDisplayMode: 'minimal',
        headerShown: true,
        headerTitle: (props) => (
          <Image source={require('../../assets/smallLogo.png')} />
        ),
      }}
    >
      <Stack.Screen name="index" options={{}} />
      <Stack.Screen name="product/index" options={{}} />
      <Stack.Screen name="contactus/index" options={{}} />
    </Stack>
  )
}
