import { View, Text, Button } from 'react-native'
import React from 'react'


const SignOut = ({navigation}) => {
  return (
    <View style={{flex: 1 , justifyContent: 'center', alignItems: 'center'}} >
      <Text>SignOut</Text>
      <Button onPress={() => navigation.navigate("Setting")}
        title="Go to setting"
      />
    </View>
  )
}

export default SignOut;

