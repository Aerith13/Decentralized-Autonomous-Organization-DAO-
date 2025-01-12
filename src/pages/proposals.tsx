import { useTheme } from '../ThemeContext'
import { Clock, Check } from 'lucide-react'

const Proposals = () => {
  const { theme } = useTheme()

  const activeProposals = [
    {
      id: 1,
      title: 'Increase Treasury Allocation for Development',
      description: 'Proposal to increase the development fund by 500 ETH',
      timeLeft: '2 days left',
      votesFor: 85,
      votesAgainst: 15,
      totalVoters: 156
    },
    {
      id: 2,
      title: 'Add New Governance Token Utility',
      description: 'Implement staking rewards for governance token holders',
      timeLeft: '5 days left',
      votesFor: 82,
      votesAgainst: 18,
      totalVoters: 234
    }
  ]

  const pastProposals = [
    {
      id: 3,
      title: 'Implement Multi-Sig Treasury',
      description: 'Add 5 of 7 multi-signature requirement for treasury transactions',
      status: 'Passed',
      votesFor: 92,
      votesAgainst: 8,
      executedDate: '2024-03-15',
      totalVoters: 189
    }
  ]

  const ProposalCard = ({ proposal, isPast = false }) => (
    <div className={`p-6 rounded-xl mb-4 ${
      theme === 'dark' ? 'bg-gray-800' : 'bg-white'
    } shadow-lg`}>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-1">{proposal.title}</h3>
        <p className="text-sm opacity-70">{proposal.description}</p>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span>For ({proposal.votesFor}%)</span>
          <span>Against ({proposal.votesAgainst}%)</span>
        </div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500" 
            style={{ width: `${proposal.votesFor}%` }}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm opacity-70">
          {isPast ? (
            <div className="flex items-center gap-1">
              <Check size={16} className="text-green-500" />
              <span>Executed on {proposal.executedDate}</span>
            </div>
          ) : (
            <div className="flex items-center gap-1">
              <Clock size={16} />
              <span>{proposal.timeLeft}</span>
            </div>
          )}
        </div>
        {!isPast && (
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600">
              Vote For
            </button>
            <button className={`px-4 py-2 rounded-lg border ${
              theme === 'dark' ? 'border-gray-600' : 'border-gray-300'
            } hover:bg-gray-100 dark:hover:bg-gray-700`}>
              Vote Against
            </button>
          </div>
        )}
        <div className="text-sm opacity-70">
          {proposal.totalVoters} voters
        </div>
      </div>
    </div>
  )

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">Proposals</h2>
          <p className="text-sm opacity-70">Vote on important decisions for the DAO</p>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Create Proposal
        </button>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Active Proposals</h3>
        {activeProposals.map(proposal => (
          <ProposalCard key={proposal.id} proposal={proposal} />
        ))}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Past Proposals</h3>
        {pastProposals.map(proposal => (
          <ProposalCard key={proposal.id} proposal={proposal} isPast={true} />
        ))}
      </div>
    </div>
  )
}

export default Proposals 