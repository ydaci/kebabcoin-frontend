import { motion } from 'framer-motion'
import { Send, MessageCircle, Twitter, Wallet, Network, Zap, Shield, TrendingUp, CheckCircle2 } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit'
import KebabMeter from './KebabMeter'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-amber-50 to-green-50">
      {/* Hero Section */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Polygon Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
            <span className="text-purple-800 font-medium text-sm">Built on Polygon</span>
          </motion.div>

          {/* Title */}
          <motion.h1 
            className="text-8xl mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <motion.span
              animate={{ 
                rotate: [0, 8, -8, 8, 0],
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 4
              }}
              className="inline-block"
            >
              🥙
            </motion.span>{' '}
            <span className="bg-gradient-to-r from-green-600 via-amber-600 to-green-600 bg-clip-text text-transparent font-bold">
              KebabCoin
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-2xl text-slate-700 mb-12 tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Turning kebabs into capital on Polygon
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex gap-5 justify-center items-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <motion.button 
              className="px-12 py-5 bg-gradient-to-r from-green-500 via-emerald-500 to-green-600 text-white rounded-2xl text-lg font-semibold shadow-xl shadow-green-300/40"
              whileHover={{ 
                scale: 1.03, 
                boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)",
                y: -3
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => window.open(
    "https://dapp.quickswap.exchange/swap/best/ETH/0xE4f43BE7353cA2b698344625e3f3153F406F7370?chainId=137",
    "_blank"
  )}
            >
              Buy KebabCoin
            </motion.button>
            
             <motion.div
        whileHover={{ scale: 1.03, y: -3 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <ConnectButton.Custom>
          {({ account, chain, openConnectModal }) => {
            return (
              <button
                onClick={openConnectModal}
                className="px-12 py-5 bg-white border-2 border-slate-300 text-slate-800 rounded-2xl text-lg font-semibold shadow-lg"
              >
                {account ? `Connected: ${account.displayName}` : 'Connect Wallet'}
              </button>
            )
          }}
        </ConnectButton.Custom>
      </motion.div>
          </motion.div>
        </div>
      </section>

      <KebabMeter />

      {/* Token Credibility Section */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Card 1 */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Network className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Blockchain</h3>
            <p className="text-slate-600">Polygon Network</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Token Type</h3>
            <p className="text-slate-600">ERC-20</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Fair Launch</h3>
            <p className="text-slate-600">No VC / No Presale</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all"
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Performance</h3>
            <p className="text-slate-600">Low fees & fast TX</p>
          </motion.div>
        </motion.div>
      </section>

      {/* How to Buy Section */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-700 to-amber-700 bg-clip-text text-transparent">
            How to Buy
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">Get started in three simple steps</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              className="relative bg-gradient-to-br from-white to-green-50/50 rounded-3xl p-10 border border-green-200 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(34, 197, 94, 0.2)" }}
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                1
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Wallet className="w-8 h-8 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3 text-center">Connect Your Wallet</h3>
              <p className="text-slate-600 text-center">Use MetaMask or WalletConnect to get started</p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="relative bg-gradient-to-br from-white to-purple-50/50 rounded-3xl p-10 border border-purple-200 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(168, 85, 247, 0.2)" }}
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                2
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <Network className="w-8 h-8 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3 text-center">Switch to Polygon</h3>
              <p className="text-slate-600 text-center">Select Polygon network in your wallet settings</p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="relative bg-gradient-to-br from-white to-amber-50/50 rounded-3xl p-10 border border-amber-200 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(251, 191, 36, 0.2)" }}
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                3
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <CheckCircle2 className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3 text-center">Buy KebabCoin</h3>
              <p className="text-slate-600 text-center">Swap your tokens and join the community</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-100/80 via-amber-100/80 to-green-100/80 backdrop-blur-sm border-t border-green-200/60 mt-20">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-10">
              Join the KebabCoin community
            </h3>
            
            <div className="flex gap-6 justify-center items-center flex-wrap mb-12">
              <motion.a
                href="https://t.me/+seMLZeTMRb0xMDVk"
                className="flex items-center gap-3 px-8 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5 text-blue-500" />
                <span className="text-slate-700 font-semibold">Telegram</span>
              </motion.a>
              
              <motion.a
                href="https://discord.gg/QHwBnfKz"
                className="flex items-center gap-3 px-8 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5 text-indigo-500" />
                <span className="text-slate-700 font-semibold">Discord</span>
              </motion.a>
              
              <motion.a
                href="https://x.com/kebabcoinY"
                className="flex items-center gap-3 px-8 py-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow border border-slate-200"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter className="w-5 h-5 text-slate-700" />
                <span className="text-slate-700 font-semibold">Twitter</span>
              </motion.a>
            </div>

            {/* Disclaimer */}
            <div className="max-w-3xl mx-auto pt-8 border-t border-slate-300">
              <p className="text-sm text-slate-500 leading-relaxed">
                Cryptocurrency investments carry significant risk. KebabCoin is a memecoin created for entertainment purposes. 
                Please do your own research and only invest what you can afford to lose. Not financial advice.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
