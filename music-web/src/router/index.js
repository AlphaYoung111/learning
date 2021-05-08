import AYDiscover from '@/pages/discover'
import AYMine from '@/pages/mine'
import AYFriend from '@/pages/friend'
const routes = [
  {
    path: '/',
    component: AYDiscover,
    exact: true,
  },
  {
    path: '/mine',
    component: AYMine,
  },
  {
    path: '/friend',
    component: AYFriend,
  },
]

export default routes
