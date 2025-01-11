import { useTheme } from '../ThemeContext'
import { useState } from 'react'

const Dashboard = () => {
  const { theme, toggleTheme } = useTheme()
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">DecentDAO</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
            Connected: 0x1234...5678
          </div>
          <button onClick={toggleTheme} className="p-2 rounded-full">
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Sidebar and Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className={`w-64 h-screen p-4 border-r ${
          theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="space-y-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === 'overview' ? 'bg-blue-500 text-white' : ''
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('proposals')}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === 'proposals' ? 'bg-blue-500 text-white' : ''
              }`}
            >
              Proposals
            </button>
            <button
              onClick={() => setActiveTab('voting')}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === 'voting' ? 'bg-blue-500 text-white' : ''
              }`}
            >
              Voting Power
            </button>
            <button
              onClick={() => setActiveTab('treasury')}
              className={`w-full text-left px-4 py-2 rounded-lg ${
                activeTab === 'treasury' ? 'bg-blue-500 text-white' : ''
              }`}
            >
              Treasury
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className={`p-6 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } shadow-lg`}>
                  <h3 className="text-lg font-semibold mb-2">Your Voting Power</h3>
                  <p className="text-3xl font-bold text-blue-500">156.8 DDAO</p>
                </div>
                <div className={`p-6 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } shadow-lg`}>
                  <h3 className="text-lg font-semibold mb-2">Active Proposals</h3>
                  <p className="text-3xl font-bold text-blue-500">12</p>
                </div>
                <div className={`p-6 rounded-xl ${
                  theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                } shadow-lg`}>
                  <h3 className="text-lg font-semibold mb-2">Treasury Value</h3>
                  <p className="text-3xl font-bold text-blue-500">$2.1M</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className={`mt-8 p-6 rounded-xl ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } shadow-lg`}>
                <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className={`p-4 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                    }`}>
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-semibold">Proposal #123 Voted</h4>
                          <p className="text-sm opacity-70">2 hours ago</p>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm">
                          Approved
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard 