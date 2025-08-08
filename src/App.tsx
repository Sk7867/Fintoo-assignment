
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import UserSummaryCard from './components/UserSummaryCard/UserSummaryCard'
import AssetAllocation from './components/AssetAllocationSection/AssetAllocation'
import HoldingsTable from './components/HoldingsTableSection/HoldingsTable'
import InsightsSection from './components/InsightsSection/InsightsSection'
import { snapshots } from './data/portfolioData'
import type { IAssetAllocation, IHoldings, IInsightsData, IUserData } from './components/models/user-data.interface'
const availableDates = Object.keys(snapshots)

function App() {
  const [selectedDate, setSelectedDate] = useState(availableDates[0])
  const [userData, setUserData] = useState<IUserData>({} as IUserData)
  const [assetAllocation, setAssetAllocation] = useState([] as IAssetAllocation[])
  const [insightsData, setInsightsData] = useState({} as IInsightsData)
  const currentSnapshot = snapshots[selectedDate as keyof typeof snapshots]
  const [holdingsData, setHoldingsData] = useState([] as IHoldings[])
  useEffect(() => {
    if (currentSnapshot) {
      const user = currentSnapshot.user as IUserData
      const assetAllocations = currentSnapshot.assetAllocation as IAssetAllocation[]
      const holdingsData = currentSnapshot.holdings as IHoldings[]
      const insights = currentSnapshot.insights as IInsightsData
      console.log('Current Snapshot:', currentSnapshot)
      setUserData(user)
      setAssetAllocation(assetAllocations)
      setHoldingsData(holdingsData)
      setInsightsData(insights)
    }
  }, [selectedDate, currentSnapshot])

  // useEffect(() => {
  //   const currentSnapshot = snapshots[selectedDate]
  //   if (currentSnapshot) {
  //     setUserData(currentSnapshot.user)
  //   }
  //   return () => { }
  // }, [selectedDate])


  return (
    <div className="App bg-[var(--header-bg-light)] text-[var(--text-light)] transition-colors duration-[var(--transition-speed)] ease-in-out dark:bg-[var(--header-bg-dark)] dark:text-[var(--text-dark)]">
      <Header selectedDate={selectedDate} setSelectedDate={setSelectedDate} datesArray={availableDates} />

      <div className='container mx-auto px-4 py-6 space-y-6'>
        <UserSummaryCard userData={userData} />
        <AssetAllocation assetAllocation={assetAllocation} />
        <HoldingsTable holdingsData={holdingsData} />
        <InsightsSection insights={insightsData} />
      </div>

    </div>
  )
}

export default App
