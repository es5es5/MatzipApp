import React from 'react'
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native'

function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hello World</Text>
        <Button
          title="버튼"
          onPress={() => {
            console.log('Hi')
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    marginHorizontal: 10,
    marginVertical: 10,
  },
})

export default App
