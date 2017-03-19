import React, { Component } from 'react'
import sponsors from './data/sponsors.json'
import * as api from './lib/api'
import Events from './lib/events'
import Clock from './Clock'
import Timer from './Timer'

import './App.scss'
import Hack24Logo from '../public/Hack24+Logo.png'
import SponsorsGrid from './SponsorsGrid'

class App extends Component {
  state = {
    teams: [],
    users: [],
    sponsors
  }

  componentWillMount() {
    this.events = new Events()
    this.events.on('teams_add', (data) => {
      console.log('team added', data) // eslint-disable-line
    })
  }

  componentWillUnmount() {
    this.events.clear()
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
      <div className='app'>

        <div className='columns top-banner'>
          <div className='column is-4'>
            <img src={Hack24Logo} />
          </div>
          <div className='column has-text-centered'>

            <div className='tile is-ancestor'>
              <div className='tile is-parent'>

                <div className='tile is-child'>
                  <h2 className='subtitle is-3'>
                    <span>Time left</span>
                  </h2>
                  <h1 className='massive'>
                    <Timer start={new Date(2017, 2, 18, 12, 0, 0)} end={new Date(2017, 2, 19, 12, 0, 0)} />
                  </h1>
                  <h2 className='subtitle'>
                    <Clock />
                  </h2>
                </div>

                <div className='tile is-parent stats'>

                  <div className='tile is-child'>
                    <h1 className='title'>
                      {teams.length}
                    </h1>
                    <h2 className='subtitle'>
                      Teams
                    </h2>
                  </div>

                  <div className='tile is-child'>
                    <h1 className='title'>
                      {users.length}
                    </h1>
                    <h2 className='subtitle'>
                      Hackers
                    </h2>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

        <div className='columns logos-list'>
          <div className='column is-12'>
            <section className='section'>
              <SponsorsGrid sponsors={sponsors} />
            </section>
          </div>
        </div>

        <div className='teams-list'>
          <section className='section'>
            {teams.map((team, i) => (
              <div key={`team_${team.id}`} className={['button', 'is-primary', (i % 2 === 0) ? 'is-outlined' : '', 'team-name'].join(' ')}><span>{team.name}</span></div>)
            )}
          </section>
        </div>
      </div>
    )
  }
}

export default App
