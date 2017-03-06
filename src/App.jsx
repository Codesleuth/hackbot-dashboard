import React, { Component } from 'react'
import sponsors from './data/sponsors.json'
import * as api from './lib/api'

import './App.scss'
import Stats from './Stats'
import SponsorsGrid from './SponsorsGrid'

class App extends Component {
  state = {
    teams: [],
    users: [],
    sponsors
  }

  componentDidMount() {
    api.fetchTeams().then(teams => (
      this.setState({ teams })
    ))

    api.fetchUsers().then(users => (
      this.setState({ users })
    ))
  }

  render() {
    const { teams, users, sponsors } = this.state
    return (
      <div className='container is-fluid'>
        <div className='columns top-banner'>
          <div className='column is-4'>
            <img src='http://static1.squarespace.com/static/54f1b189e4b0f6df27b46455/t/564e5068e4b052ed0de2b929/1488807242394/?format=1500w' />
          </div>
          <div className='column is-8'>
            <Stats teams={teams.length} hackers={users.length} challenges={sponsors.length} />
          </div>
        </div>
        <section className='section'>
          <div>
            {teams.map((team, i) => (
              <div key={`team_${team.id}`} className={['button', 'is-primary', (i % 2 === 0) ? 'is-outlined' : '', 'team-name'].join(' ')}><span>{team.name}</span></div>)
            )}
          </div>
        </section>
        <section className='section sponsors'>
          <SponsorsGrid sponsors={sponsors} />
        </section>
      </div>
    )
  }
}

export default App
