import * as Yayson from 'yayson'
const yayson = Yayson()

export function fetchTeams () {
  return window.fetch('https://hack24-api-staging.herokuapp.com/teams')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Unable to fetch teams; network error.')
    }).then(json => Promise.resolve((new yayson.Store()).sync(json)))
}

export function fetchUsers () {
  return window.fetch('https://hack24-api-staging.herokuapp.com/users')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Unable to fetch users; network error.')
    }).then(json => Promise.resolve((new yayson.Store()).sync(json)))
}
