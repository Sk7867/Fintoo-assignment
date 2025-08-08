
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import UserSummaryCard from './components/UserSummaryCard/UserSummaryCard'
import AssetAllocation from './components/AssetAllocationSection/AssetAllocation'
import HoldingsTable from './components/HoldingsTableSection/HoldingsTable'
import InsightsSection from './components/InsightsSection/InsightsSection'
import { snapshots } from './data/portfolioData'
import { ThemeProvider } from './contexts/ThemeContext'
import { usePortfolioData } from './hooks/usePortfolioData'
const availableDates = Object.keys(snapshots)

function App() {
  const [selectedDate, setSelectedDate] = useState(availableDates[0])
  const { data } = usePortfolioData(selectedDate)

  if (!data) {
    return <div className="container mx-auto px-4 py-6">No Portfolio Data Available</div>
  }

  return (
    <ThemeProvider>
      <div className="App bg-[var(--header-bg-light)] text-[var(--text-light)] transition-colors duration-[var(--transition-speed)] ease-in-out dark:bg-[var(--header-bg-dark)] dark:text-[var(--text-dark)]">
        <Header selectedDate={selectedDate} setSelectedDate={setSelectedDate} datesArray={availableDates} />

        <div className='container mx-auto px-4 py-6 space-y-6'>
          <UserSummaryCard userData={data.userData} />
          <AssetAllocation assetAllocation={data.assetAllocation} />
          <HoldingsTable holdingsData={data.holdingsData} />
          <InsightsSection insights={data.insightsData} />
        </div>

      </div>
    </ThemeProvider>
  )
}

export default App
