import { useTheme } from '../ThemeContext'
import { ConnectButton } from "thirdweb/react"
import { client } from '../pages/client'
import { useRouter } from 'next/router'
import { Sun, Moon } from 'lucide-react'
import Sidebar from './Sidebar'
import { useState } from 'react'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { theme, toggleTheme } = useTheme()
  const router = useRouter()
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900'
    }`}>
      <nav className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center h-16 px-6 border-b border-gray-200 dark:border-gray-700 bg-inherit">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">DecentDAO</h1>
        </div>
        <div className="flex items-center gap-4">
          <ConnectButton 
            client={client} 
            onDisconnect={() => router.push('/')}
          />
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
      
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      
      <main className={`transition-all duration-300 ${
        isCollapsed ? 'ml-20' : 'ml-64'
      } pt-20 px-6`}>
        {children}
      </main>
    </div>
  )
}

export default Layout 