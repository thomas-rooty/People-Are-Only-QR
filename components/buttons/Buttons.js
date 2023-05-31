import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const AddPeopleBtn = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate('AddPeople')}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Add People</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: 100,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default AddPeopleBtn
