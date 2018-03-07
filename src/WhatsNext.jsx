// eslint-disable-next-line no-unused-vars
import m from 'mithril'
import moment from 'moment'

export default class WhatsNext {
  constructor (vnode) {
    this.agenda = vnode.attrs.agenda
  }

  oninit () {
    this.updateNextItem()
  }

  updateNextItem () {
    const now = moment()
    const nextItems = this.agenda
      .filter((item) => now.isBefore(item.start))
      .sort((a, b) => a.start.isAfter(b.start))

    this.nextItem = nextItems.length > 0 ? nextItems[0] : null

    setTimeout(() => this.updateNextItem(), 5000)
  }

  view (vnode) {
    const { nextItem } = this
    return (
      <span>
        {nextItem && <span>{nextItem.start.format('ha')} {nextItem.title}</span>}
      </span>
    )
  }
}
