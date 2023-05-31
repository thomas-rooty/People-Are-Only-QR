export const getPersons = async () => {
  const response = await fetch('http://172.20.10.2:5000/')
  return await response.json()
}
