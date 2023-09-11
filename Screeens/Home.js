import { View, Text, Button, StatusBar } from 'react-native'
import React from 'react'
import { useTheme } from "@react-navigation/native"
import { color } from 'react-native-reanimated';

const Home = ({ navigation }) => {
  const { colors } = useTheme();
  const theme = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#BBC6C8" }} >
      <StatusBar barStyle={theme.dark ? "light-content" : "dark-content"} />
      <Text style={{ margin: 10, colors: colors.text }} >This is Home</Text>
      <View style={{ margin: 10 }}>
        <Button
          onPress={() => navigation.navigate('Notification')}
          title='Go to Noti'
        />
      </View>
    </View>
  )
}

export default Home;


