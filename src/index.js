import m from 'mithril'

import Home from './Home.jsx'

m.route.prefix('')

m.route(document.body, '/', {
  '/': Home
})
