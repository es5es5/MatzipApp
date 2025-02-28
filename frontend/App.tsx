import React, {useState} from 'react'
import {SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native'

function App() {
  const [name, setName] = useState('')

  const handleChangeInput = (text: string) => {
    console.log(text)
    setName(text)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>이름</Text>
        <TextInput
          style={styles.input}
          onChangeText={handleChangeInput}
          value={name}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    flex: 1,
    borderWidth: 2,
    height: 50,
    width: 100,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
})

export default App
