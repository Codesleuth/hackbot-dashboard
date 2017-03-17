import React, { Component } from 'react'
import sponsors from './data/sponsors.json'
import * as api from './lib/api'
import Events from './lib/events'
import Clock from './Clock'

import './App.scss'
import Hack24Logo from '../public/Hack24+Logo.png'
import Stats from './Stats'
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
      console.log('team added', data)
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
      <div className='container is-fluid'>
        
        <div className='columns top-banner'>
            <div className='column is-4'>
              <img src={Hack24Logo} />
            </div>
            <div className='column has-text-centered'>
              <section className='hero'>
              <div className='hero-body'>
                <Clock/>
              </div>        
                
              </section>
            </div>
          </div>
        
        <div className='columns'>
          <div className='column is-12'> 
            <section className='section stats'>                       
                <Stats teams={teams.length} hackers={users.length} challenges={sponsors.length} />            
            </section>  
          </div>  
        </div>

        <div className='columns'>    
          <div className='column is-12'>
            <section className='section'>
              <div>
                {teams.map((team, i) => (
                  <div key={`team_${team.id}`} className={['button', 'is-primary', (i % 2 === 0) ? 'is-outlined' : '', 'team-name'].join(' ')}><span>{team.name}</span></div>)
                )}
              </div>
            </section> 
          </div> 
        </div>        
     
        <div className='columns'>
            <div className='column is-12'>
              <SponsorsGrid sponsors={sponsors} />
            </div>
          </div>
      </div>
    )
  }
}

export default App
