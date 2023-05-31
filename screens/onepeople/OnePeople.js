import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

const OnePeople = ({ route }) => {
  const { personData } = route.params

  return (
    <View style={styles.container}>
      <View style={styles.onePersonCard}>
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
          <Text>{personData.dob?.age} years old</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcd00',
    padding: 20,
    paddingTop: 50,
  },
  onePersonCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#ffba00',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  email: {
    fontSize: 18,
    color: '#888',
    marginBottom: 10,
  },
})

export default OnePeople
