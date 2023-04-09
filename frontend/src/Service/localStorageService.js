
const storeToken = (value) => {
    localStorage.setItem('token', value[0])
    localStorage.setItem('role',value[1])
  }
  
  const getToken = () => {
    let token = localStorage.getItem('token')
    let role = localStorage.getItem('role')
    return token,role
  }
  
  const removeToken = (value) => {
    localStorage.removeItem(value[0])
    localStorage.removeItem(value[1])
  }
  
  export { storeToken, getToken, removeToken }