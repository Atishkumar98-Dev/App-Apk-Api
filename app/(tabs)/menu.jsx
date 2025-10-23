import { View, Text , StyleSheet } from 'react-native'
import React from 'react'
import Colors from "../theme/Colors";
const menu = () => {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}> Menu Screen</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 54, justifyContent: 'center', backgroundColor: '#043915' , },
  title: { fontSize: 50, fontWeight: '700', marginBottom: 10 ,color:'#FFFD8F'},
  desc: { color: Colors.muted, marginBottom: 20 },
  option: { borderWidth: 1, borderColor: Colors.border, borderRadius: 8, padding: 16, marginBottom: 16 },
});
export default menu