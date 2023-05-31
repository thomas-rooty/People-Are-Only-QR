import React, { useState } from 'react'
import { StyleSheet, View, Text, Button, TextInput, Alert } from 'react-native'
import * as Calendar from 'expo-calendar'

const Meeting = ({ route }) => {
  // Get person data from route
  const { personData } = route.params
  const [title, setTitle] = useState(personData.name?.first + ' ' + personData.name?.last + ' meeting')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  // Event manager
  const addEventToCalendar = async () => {
    // Check if all fields are filled
    if (title === '' || startDate === '' || endDate === '') {
      Alert.alert('Error', 'Please fill in all fields')
      return
    }

    // Check if calendar permission is granted
    const { status } = await Calendar.requestCalendarPermissionsAsync()
    if (status !== 'granted') {
      Alert.alert('Error', 'Calendar permission not granted')
      return
    }

    // Create event
    const newEvent = {
      title,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
    }

    // Add event to calendar
    try {
      const calendar = await Calendar.getDefaultCalendarAsync()
      await Calendar.createEventAsync(calendar.id, newEvent)
      Alert.alert('Ready to meet your capy ?', 'Check your calendar')
    } catch (error) {
      Alert.alert('Error', 'Failed to add capy meeting to calendar')
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.meetContainer}>
        <Text style={styles.title}>Meet with {personData.name?.first}</Text>
        <TextInput placeholder="Meeting title" placeholderTextColor="#fff" value={title} onChangeText={(text) => setTitle(text)} style={styles.input} />
        <TextInput placeholder="Start date (YYYY-MM-DD)" placeholderTextColor="#fff" value={startDate} onChangeText={(text) => setStartDate(text)} style={styles.input} />
        <TextInput placeholder="End date (YYYY-MM-DD)" placeholderTextColor="#fff" value={endDate} onChangeText={(text) => setEndDate(text)} style={styles.input} />
        <Button title="I meet my person !" onPress={addEventToCalendar} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcd00',
    padding: 16,
    paddingTop: 50,
  },
  meetContainer: {
    backgroundColor: '#ffdf50',
    borderRadius: 4,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    marginBottom: 12,
    backgroundColor: '#ffe678',
    borderRadius: 4,
    padding: 10,
  },
})

export default Meeting
