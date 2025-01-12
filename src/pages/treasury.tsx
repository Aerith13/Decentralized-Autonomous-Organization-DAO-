import { useTheme } from '../ThemeContext'
import { Plus, Copy, ArrowUp, ArrowDown } from 'lucide-react'

const Treasury = () => {
  const { theme } = useTheme()

  return (
    <div className="p-8">
      <div className="space-y-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold">Treasury</h2>
            <p className="text-sm opacity-70">Manage and monitor DAO funds</p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <Plus size={18} />
            Refill Treasury
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-sm font-medium opacity-70">Total Balance</h3>
              <Copy size={16} className="opacity-50 hover:opacity-100 cursor-pointer" />
            </div>
            <p className="text-2xl font-bold mb-2">1,234.56 ETH</p>
            <p className="text-sm opacity-70">≈ $2,469,120.00 USD</p>
          </div>

          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <h3 className="text-sm font-medium opacity-70 mb-4">Asset Allocation</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span>ETH</span>
                  <span>65%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-full w-[65%] bg-blue-500 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>USDC</span>
                  <span>35%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div className="h-full w-[35%] bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className={`p-6 rounded-xl ${
            theme === 'dark' ? 'bg-gray-800' : 'bg-white'
          } shadow-lg`}>
            <h3 className="text-sm font-medium opacity-70 mb-4">Treasury Health</h3>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-2">
              <div className="h-full w-[78%] bg-green-500 rounded-full"></div>
            </div>
            <p className="text-sm opacity-70">78% of yearly target</p>
          </div>
        </div>

        <div className={`mt-8 p-6 rounded-xl ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } shadow-lg`}>
          <h3 className="text-xl font-bold mb-4">Recent Treasury Activity</h3>
          <p className="text-sm opacity-70 mb-4">Latest transactions and treasury updates</p>
          
          <div className="space-y-4">
            {[
              { type: 'Deposit', date: '2024-03-20', amount: '+50 ETH' },
              { type: 'Withdrawal', date: '2024-03-18', amount: '-15 ETH' },
              { type: 'Deposit', date: '2024-03-15', amount: '+100 ETH' }
            ].map((activity, index) => (
              <div key={index} className={`p-4 rounded-lg flex items-center justify-between ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'Deposit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {activity.type === 'Deposit' ? <ArrowDown size={18} /> : <ArrowUp size={18} />}
                  </div>
                  <div>
                    <h4 className="font-semibold">{activity.type}</h4>
                    <p className="text-sm opacity-70">{activity.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={activity.type === 'Deposit' ? 'text-green-500' : 'text-red-500'}>
                    {activity.amount}
                  </span>
                  <span className="px-2 py-1 rounded-full text-xs bg-gray-200 dark:bg-gray-600">
                    Completed
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

export default Treasury