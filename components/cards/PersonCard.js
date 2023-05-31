import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const PersonCard = ({ person }) => {
  const navigation = useNavigation()
  const [personData, setPersonData] = useState({})

  useEffect(() => {
    setPersonData(person)
  }, [person])

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('PersonDetails', { personData })}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: personData.picture?.large,
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>
          {personData.name?.first} {personData.name?.last}
        </Text>
        <Text style={styles.email}>{personData.email}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  textContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#888',
  },
})

export default PersonCard
