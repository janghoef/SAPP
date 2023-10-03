import { View, Text , SafeAreaView , StatusBar } from 'react-native'
import React from 'react'
import CustomButton from './src/Components/CustomButton'
import COLORS from './src/constant/COLOR'
import Navigation from './src/Navigation'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar/>
      <Navigation/>
    </SafeAreaView>
   
  )
}

export default App