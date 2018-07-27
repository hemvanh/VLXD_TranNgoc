import axios from 'axios'
import {Notify} from 'quasar'

export const _ax = axios.create({
  timeout: 20000,
  // remove the abundant "data" key from grahql response
  transformResponse: axios.defaults.transformResponse.concat(data => {
    if (Object.keys(data).length === 1) return data.data
    else return data // keep all data properties
  }),
})

// get auth token, to make sure all _get _post require got auth-token attached
let getToken = () => localStorage.getItem('auth-token')
let setToken = () => {
  let token = getToken()
  if (token) {
    _ax.defaults.headers.common['Authorization'] = 'Bearer ' + token
  } else {
    delete _ax.defaults.headers.common['Authorization']
  }
}

export const _get = query => {
  setToken()
  return _ax.get('/api', {
    params: {
      query: query,
    },
  })
}

export const _post = (input, query) => {
  setToken()
  return _ax({
    method: 'post',
    url: '/api',
    headers: {'Content-Type': 'application/json'},
    data: JSON.stringify({query, variables: {input}}),
  })
}

export const _alert = (message, type) => {
  Notify.create({
    message,
    type,
    timeout: 2000,
  })
}

export const _procAlert = data => {
  if (data.errors) _alert(data.errors[0].message, 'warning')
  else {
    _alert('Success', 'positive')
  }
}

export const _procError = err => {
  _alert(`Code: ${err.response.status} - ${err.response.statusText}`, 'negative')
}
