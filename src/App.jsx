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
    const teamsSlickSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <span />,
      prevArrow: <span />
    }
    return (
      <div className='container is-fluid'>
        <section className='section'>
          <Stats teams={teams.length} hackers={users.length} challenges={sponsors.length} />
        </section>
        <section className='section'>
          <SponsorsGrid sponsors={sponsors} />
        </section>
        <section className='section'>
          <div>
            {teams.map((team, i) => (
              <div key={`team_${team.id}`} className={['button', 'is-primary', (i % 2 === 0) ? 'is-outlined' : '', 'team-name'].join(' ')}><span>{team.name}</span></div>)
            )}
          </div>
        </section>
      </div>
    )
  }
}

export default App
