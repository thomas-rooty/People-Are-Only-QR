export const getPersons = async () => {
  const response = await fetch('http://localhost:5000/')
  return await response.json()
}
