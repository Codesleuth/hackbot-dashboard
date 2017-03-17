import React, { Component, PropTypes as T } from 'react'
import './SponsorsGrid.scss'

class SponsorsGrid extends Component {
  static propTypes = {
    sponsors: T.array.isRequired
  }

  render() {
    const { sponsors } = this.props

    return (
      <div>
        <div className="tile is-ancestor">
          <div className="tile is-12">
              {sponsors.filter(sponsor => sponsor.challenge).map((sponsor, i) => (                
                  <div key={`sponsor_${i}`} className='tile is-child'>                    
                      <figure className='image is-4by3'>
                        <img src={sponsor.logo}/>
                      </figure>                    
                  </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default SponsorsGrid
