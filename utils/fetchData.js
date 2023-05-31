export const getPersons = async () => {
  const response = await fetch('http://172.20.10.2:5000/')
  return await response.json()
}

export const addPerson = async (uri) => {
  // Fetch data from uri
  const response = await fetch(uri)
  const person = await response.json()

  // Send data to API
  const localapi = await fetch('http://172.20.10.2:5000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(person),
  })

  return await localapi.json()
}
