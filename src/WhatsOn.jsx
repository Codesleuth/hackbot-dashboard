// eslint-disable-next-line no-unused-vars
import m from 'mithril'
import moment from 'moment'

export default class WhatsOn {
  constructor (vnode) {
    this.agenda = vnode.attrs.agenda
  }

  oninit () {
    this.updateCurrentItems()
  }

  updateCurrentItems () {
    const now = moment()
    this.currentItems = this.agenda
      .filter((item) => now.isBetween(item.start, item.end))
      .sort((a, b) => a.start.isAfter(b.start))

    setTimeout(() => this.updateCurrentItems(), 5000)
  }

  view (vnode) {
    const { currentItems } = this
    return (
      <span>
        {currentItems.length > 0 && currentItems.map((item) => <span>{item.title}</span>)}
      </span>
    )
  }
}
