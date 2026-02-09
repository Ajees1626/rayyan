import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />

      {/* Main content - pt-16 matches navbar height (h-16) to prevent overlap */}
      <main className="flex-1 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex justify-center gap-8 mb-6">
              <a href="https://vite.dev" target="_blank" rel="noreferrer" className="will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]">
                <img src={viteLogo} className="h-24 p-4" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer" className="will-change-[filter] transition-[filter] duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] [&_img]:animate-[spin_20s_linear_infinite]">
                <img src={reactLogo} className="h-24 p-4" alt="React logo" />
              </a>
            </div>
            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6">
              Vite ct
            </h1>
            <div className="card p-8 mb-6">
              <button
                onClick={() => setCount((count) => count + 1)}
                className="rounded-lg border border-transparent px-5 py-2.5 text-sm font-medium bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-200 transition-colors cursor-pointer"
              >
                count is {count}
              </button>
              <p className="mt-4 text-slate-600 dark:text-slate-400">
                Edit <code>src/App.jsx</code> and save to test HMR
              </p>
            </div>
            <p className="text-slate-500">
              Click on the Vite and React logos to learn more
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
