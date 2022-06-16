import DashboardOutlined from '@mui/icons-material/DashboardOutlined'
import Person from '@mui/icons-material/Person'
import Forum from '@mui/icons-material/Forum'
// import Analytics from '@mui/icons-material/Analytics'
// import FolderOpen from '@mui/icons-material/FolderOpen'
// import BorderColor from '@mui/icons-material/BorderColor'
import Search from '@mui/icons-material/Search'
import CategoryIcon from '@mui/icons-material/Category'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion'

const navbarList = [
  {
    icon: Search,
    desc: 'Search',
    secondDesc: '',
    badge: 0,
    subList: [],
  },
  {
    icon: DashboardOutlined,
    desc: 'Dashboard',
    secondDesc: '',
    badge: 0,
    subList: [],
    path: '/dashboard',
  },
  {
    icon: CategoryIcon,
    desc: 'Category',
    secondDesc: '',
    badge: 0,
    subList: [],
    path: '/category',
  },
  {
    icon: AutoAwesomeMotionIcon,
    desc: 'Product',
    secondDesc: '',
    badge: 0,
    subList: [],
    path: '/product',
  },
  {
    icon: Person,
    desc: 'User',
    secondDesc: '',
    badge: 0,
    subList: [],
    path: '/user',
  },
  {
    icon: Forum,
    desc: 'Forum',
    secondDesc: 'Message from andi',
    badge: 2,
    path: '/forum',
    subList: [
      {
        desc: 'chat',
        badge: 2,
      },
      {
        desc: 'reminder',
        badge: 0,
      },
    ],
  },
]

export default navbarList
