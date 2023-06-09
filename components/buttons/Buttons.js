import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const AddPeopleBtn = () => {
  const navigation = useNavigation()
  const qrcodeimg = require('../../assets/qrcode.png')

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('AddPeople')}>
        <View style={styles.button}>
          <Image source={qrcodeimg} style={{ width: 30, height: 30, position: 'absolute', left: 10, top: 10 }} />
          <Text style={styles.buttonText}>SCAN</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    right: 10,
  },
  button: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    width: 160,
    height: 50,
    shadowColor: '#ffba00',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderBottomColor: '#d0d0d0',
    borderBottomWidth: 1,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default AddPeopleBtn
