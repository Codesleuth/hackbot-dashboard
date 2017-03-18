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
        <div className='tile is-ancestor'>
          <div className='tile is-12'>
            {sponsors.filter(sponsor => sponsor.challenge).map((sponsor, i) => {
              const image = require('./' + sponsor.logo)
              return (
                <div key={`sponsor_${i}`} className='tile is-child logo'>
                  <figure className='image is-4by3'>
                    <img src={image} />
                  </figure>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default SponsorsGrid
