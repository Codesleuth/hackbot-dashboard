// eslint-disable-next-line no-unused-vars
import m from 'mithril'
import moment from 'moment'

export default class Clock {
  constructor (vnode) {
    this.abort = false
  }

  oninit (vnode) {
    this.updateCurrentTime()
  }

  onremove () {
    this.abort = true
  }

  updateCurrentTime () {
    this.currentTime = moment()

    m.redraw()

    if (!this.abort) {
      const now = this.currentTime.valueOf()
      const nowSec = now / 1000
      const msToNextSecond = Math.trunc(1000 - (nowSec - Math.trunc(nowSec)) * 1000)
      const timeout = msToNextSecond + 10
      setTimeout(() => this.updateCurrentTime(), timeout)
    }
  }

  view (vnode) {
    return (
      <span>{this.currentTime.format('HH:mm:ss')}</span>
    )
  }
}
