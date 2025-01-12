import { useTheme } from '../ThemeContext'
import { BarChart3, TrendingUp, History, ArrowUpRight, ArrowDownRight, Info } from 'lucide-react'

const VotingPower = () => {
  const { theme } = useTheme()

  const votingStats = {
    currentPower: 156.8,
    totalDelegated: 42.5,
    delegators: 12,
    historyData: [
      { date: 'Mar 15', power: 156.8 },
      { date: 'Mar 08', power: 142.3 },
      { date: 'Mar 01', power: 128.5 },
      { date: 'Feb 23', power: 115.2 },
    ],
    delegations: [
      { address: '0x1234...5678', amount: 15.5, since: '2024-02-15' },
      { address: '0x8765...4321', amount: 12.8, since: '2024-02-20' },
      { address: '0x9876...1234', amount: 14.2, since: '2024-03-01' },
    ]
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Voting Power</h2>
        <p className="text-sm opacity-70">Manage and track your governance influence</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className={`p-6 rounded-xl ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } shadow-lg`}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm opacity-70">Total Voting Power</p>
              <h3 className="text-3xl font-bold text-blue-500">{votingStats.currentPower} DDAO</h3>
            </div>
            <div className={`p-2 rounded-lg ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <BarChart3 size={20} />
            </div>
          </div>
          <div className="flex items-center text-green-500 text-sm">
            <ArrowUpRight size={16} />
            <span>+10.2% from last month</span>
          </div>
        </div>

        <div className={`p-6 rounded-xl ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } shadow-lg`}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-sm opacity-70">Delegated to You</p>
              <h3 className="text-3xl font-bold text-blue-500">{votingStats.totalDelegated} DDAO</h3>
            </div>
            <div className={`p-2 rounded-lg ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <TrendingUp size={20} />
            </div>
          </div>
          <div className="text-sm opacity-70">
            From {votingStats.delegators} delegators
          </div>
        </div>

        <div className={`p-6 rounded-xl ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } shadow-lg`}>
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm opacity-70">Governance Participation</p>
              <h3 className="text-3xl font-bold text-blue-500">92%</h3>
            </div>
            <div className={`p-2 rounded-lg ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              <History size={20} />
            </div>
          </div>
          <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div className="h-full bg-blue-500 rounded-full" style={{ width: '92%' }} />
          </div>
        </div>
      </div>

      {/* Delegation Management */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className={`p-6 rounded-xl ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } shadow-lg`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Voting Power History</h3>
            <button className={`px-3 py-1 rounded-lg text-sm ${
              theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
            }`}>
              Last 30 Days
            </button>
          </div>
          <div className="space-y-4">
            {votingStats.historyData.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="opacity-70">{item.date}</span>
                <span className="font-semibold">{item.power} DDAO</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`p-6 rounded-xl ${
          theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } shadow-lg`}>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Active Delegations</h3>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Delegate Votes
            </button>
          </div>
          <div className="space-y-4">
            {votingStats.delegations.map((delegation, index) => (
              <div key={index} className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{delegation.address}</p>
                    <p className="text-sm opacity-70">Since {delegation.since}</p>
                  </div>
                  <p className="font-semibold">{delegation.amount} DDAO</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VotingPower 