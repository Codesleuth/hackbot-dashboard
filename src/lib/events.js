/* global process */

import * as Pusher from 'pusher-js'
import * as EventEmitter from 'event-emitter'

class Events {

  constructor() {
    EventEmitter(this)

    Pusher.logToConsole = true

    this.pusher = new Pusher(process.env.PUSHER_APP_KEY, {
      cluster: 'eu',
      encrypted: true
    })

    this.channel = this.pusher.subscribe('api_events')
    this.channel.bind('teams_add', this.emit.bind(this, 'teams_add'))
  }

  clear() {
    EventEmitter.allOff(this)
  }
}


export default Events
