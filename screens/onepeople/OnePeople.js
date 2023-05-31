import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Image } from 'react-native'

const OnePeople = ({ route }) => {
  const { personData } = route.params
  
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: personData.picture?.large,
        }}
      />
        <Text>
            {personData.name?.first} {personData.name?.last}
        </Text>
        <Text style={styles.email}>
            {personData.email}
        </Text>
        <Text>
            {personData.location?.city}
        </Text>
        <Text>
            {personData.location?.country}
        </Text>
        <Text>
            {personData.location?.postcode}
        </Text>
        <Text>
            {personData.location?.state}
        </Text>
        <Text>
            {personData.location?.street?.name}
        </Text>
        <Text>
            {personData.location?.street?.number}
        </Text>
        <Text>
            {personData.phone}
        </Text> 
        <Text>
            {personData.cell}
        </Text>
        <Text>
            {personData.dob?.age} ans
        </Text>
        <Text>
            {personData.dob?.date}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e3e3e3',
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

export default OnePeople
