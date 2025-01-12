import { useState } from 'react'
import { useRouter } from 'next/router'
import { LayoutDashboard, Vote, Users, Wallet, ChevronLeft, ChevronRight } from 'lucide-react'
import { useTheme } from '../ThemeContext'

interface SidebarProps {
  isCollapsed: boolean
  setIsCollapsed: (collapsed: boolean) => void
}

const Sidebar = ({ isCollapsed, setIsCollapsed }: SidebarProps) => {
  const router = useRouter()
  const { theme } = useTheme()

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Overview', path: '/dashboard' },
    { icon: <Vote size={20} />, label: 'Proposals', path: '/proposals' },
    { icon: <Users size={20} />, label: 'Voting Power', path: '/voting' },
    { icon: <Wallet size={20} />, label: 'Treasury', path: '/treasury' },
  ]

  return (
    <div 
      className={`${
        isCollapsed ? 'w-20' : 'w-64'
      } h-screen fixed left-0 transition-all duration-300 ${
        theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border-r mt-16`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`absolute top-1/2 -right-3 p-1 rounded-full ${
          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
        } hover:scale-110 transition-transform`}
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </button>

      <div className="space-y-2 p-4">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => router.push(item.path)}
            className={`w-full text-left py-3 rounded-lg flex items-center justify-center md:justify-start gap-3 ${
              router.pathname === item.path 
                ? 'bg-blue-500 text-white' 
                : 'hover:bg-gray-100 dark:hover:bg-gray-700'
            } ${isCollapsed ? 'px-2' : 'px-4'}`}
          >
            <div className={isCollapsed ? 'w-full flex justify-center' : ''}>
              {item.icon}
            </div>
            {!isCollapsed && <span>{item.label}</span>}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Sidebar 