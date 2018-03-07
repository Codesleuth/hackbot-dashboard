// eslint-disable-next-line no-unused-vars
import m from 'mithril'
import moment from 'moment'

function zeroPad (num) {
  const str = num.toString()
  return str.length > 2 ? str : ('00' + str).substring(str.length)
}

export default class Timer {
  constructor (vnode) {
    this.start = vnode.attrs.start
    this.end = vnode.attrs.end
    this.abort = false
  }

  oninit (vnode) {
    this.updateTimer()
  }

  onremove () {
    this.abort = true
  }

  updateTimer () {
    const epochStart = moment(this.start).valueOf() + 1000
    const epochEnd = moment(this.end).valueOf() + 1000
    const now = moment().valueOf()

    if (now > epochEnd) {
      this.abort = true
      this.isTeeMinus = false
      this.currentTime = moment.duration(0)
    } else {
      this.isTeeMinus = now < epochStart
      this.currentTime = now < epochStart ? moment.duration(epochStart - now) : moment.duration(epochEnd - now)

      if (!this.abort) {
        const nowSec = now / 1000
        const timeout = Math.trunc(1000 - (nowSec - Math.trunc(nowSec)) * 1000)
        setTimeout(() => this.updateTimer(), timeout)
      }
    }

    m.redraw()
  }

  view (vnode) {
    const { isTeeMinus, currentTime } = this
    const totalHours = currentTime.hours() + currentTime.days() * 24
    return (
      <span>
        <span>{isTeeMinus && 'T- '}</span>
        <span>{zeroPad(totalHours)}</span>:
        <span>{zeroPad(currentTime.minutes())}</span>:
        <span>{zeroPad(currentTime.seconds())}</span>
      </span>
    )
  }
}
