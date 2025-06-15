// sidebar.js
import { LayoutDashboard, UserCircle, ShoppingCart, Shuffle, BarChart4, FileText, Users, Settings, HelpCircle, LogOut } from 'lucide-react';

const sidebarData = [
  {
    title: 'Pages',
    items: [
      { label: 'Dashboard', icon: <LayoutDashboard />, link: '/dashboard' },
      { label: 'Users', icon: <UserCircle />, link: '/dashboard/users/show-users' },
      { label: 'Products', icon: <ShoppingCart />, link: '/products' },
      { label: 'Transaction', icon: <Shuffle />, link: '/transaction' },
    ],
  },
  {
    title: 'Analytics',
    items: [
      { label: 'Revenue', icon: <BarChart4 />, link: '/revenue' },
      { label: 'Reports', icon: <FileText />, link: '/reports' },
      { label: 'Teams', icon: <Users />, link: '/teams' },
    ],
  },
  {
    title: 'User',
    items: [
      { label: 'Settings', icon: <Settings />, link: '/settings' },
      { label: 'Help', icon: <HelpCircle />, link: '/help' },
      { label: 'Logout', icon: <LogOut />, link: '/logout' },
    ],
  },
];

export default sidebarData;
