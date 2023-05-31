import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const AddPeopleBtn = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('AddPeople')}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>SCAN</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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
