import { useTheme } from '../ThemeContext'
import { useState } from 'react'
import { client } from './client'
import { ConnectButton } from 'thirdweb/react'

const Home = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-blue-50 text-gray-900'
    }`}>
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold">DecentDAO</h1>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 rounded-full">
            {theme === 'dark' ? '🌞' : '🌙'}
          </button>
          {/*<button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Connect Wallet
          </button> */}
          <ConnectButton client={client} />
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Decentralized Governance for the Future
          </h1>
          <p className="text-lg mb-8 opacity-80">
            Join our community-driven ecosystem where decisions are made collectively, transparently, and efficiently through blockchain technology.
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
              Get Started →
            </button>
            <button className={`border ${theme === 'dark' ? 'border-white' : 'border-gray-300'} px-6 py-3 rounded-lg hover:bg-opacity-10 hover:bg-blue-500 transition-colors`}>
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-bold mb-2">Community Driven</h3>
            <p className="opacity-80">Every member has a voice in the decision making process through our transparent voting system.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-bold mb-2">Token Economics</h3>
            <p className="opacity-80">Sustainable tokenomics designed to reward long-term participants and ensure project stability.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-2">Global Impact</h3>
            <p className="opacity-80">Building a decentralized future that transcends borders and empowers communities worldwide.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h4 className="text-3xl font-bold text-blue-500 mb-2">$10M+</h4>
            <p>Total Value Locked</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-blue-500 mb-2">15K+</h4>
            <p>Community Members</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-blue-500 mb-2">1000+</h4>
            <p>Proposals Created</p>
          </div>
          <div>
            <h4 className="text-3xl font-bold text-blue-500 mb-2">50+</h4>
            <p>Partner DAOs</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
