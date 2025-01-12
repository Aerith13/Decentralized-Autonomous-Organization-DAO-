import { useTheme } from '../ThemeContext'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Dashboard = () => {
  const { theme } = useTheme()

  return (
    <div className="p-8">
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
    </div>
  )
}

export default Dashboard