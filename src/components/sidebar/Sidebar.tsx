import { FaRegFolder } from 'react-icons/fa';
import { FaServicestack } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { BsRecord } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
export default function Sidebar() {
  const navItems = [
    {
      icon: <FaRegFolder className="w-5 h-5 mr-3" />,
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      icon: <FaServicestack className="w-5 h-5 mr-3" />,
      label: 'Services',
      href: '/dashboard/Services',
    },
    {
      icon: <FaRegCalendarAlt className="w-5 h-5 mr-3" />,
      label: 'Appointments',
      href: '/dashboard/Appointments',
    },
    {
      icon: <BsRecord className="w-5 h-5 mr-3" />,
      label: 'Records',
      href: '/dashboard/Records',
    },
    {
      icon: <FiSettings className="w-5 h-5 mr-3" />,
      label: 'Settings',
      href: '/dashboard/Settings',
    },
  ];
  return (
    <aside className="w-64 bg-primary-dark text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-primary">
        <h1 className="text-xl font-bold">MiCont</h1>
      </div>

      {/* Navigation Menu */}
      <aside className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className="flex items-center px-4 py-3 rounded-lg hover:bg-primary transition-colors"
              >
                {item.icon}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </aside>
  );
}
