import { BsGraphDownArrow, BsGraphUpArrow } from 'react-icons/bs'
import { Badge } from '../Badge/Badge'
import { FiAlertTriangle } from 'react-icons/fi'
import type { IInsightsData } from '../../models/user-data.interface'
import React from 'react'

interface InsightsSectionProps {
  insights: IInsightsData
}

const InsightsSection = ({ insights }: InsightsSectionProps) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className='rounded-lg bg-[var(--card)] text-[var(--card-foreground)] shadow-sm p-6 pt-0 border-l-4 border-l-[var(--profit)] dark:bg-[var(--muted)]/50'>
        <div className='flex flex-col space-y-1.5 p-6 pb-3'>
          <div className="flex items-center gap-2">
            <BsGraphUpArrow className="h-5 w-5 text-[var(--success)]" />
            <h4 className='text-2xl font-semibold leading-none tracking-tight'>Top Performing Asset</h4>
          </div>
        </div>
        <div className='p-6 pt-0'>
          <p className='font-medium text-foreground mb-2'>{insights?.topPerforming?.name}</p>
          <Badge variant="outline" className="bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/20">
            +{insights?.topPerforming?.returnPercentage}% Returns
          </Badge>
        </div>
      </div>

      <div className='rounded-lg bg-[var(--card)] text-[var(--card-foreground)] shadow-sm p-6 pt-0 border-l-4 border-l-[var(--warning)] dark:bg-[var(--muted)]/50'>
        <div className='flex flex-col space-y-1.5 p-6 pb-3'>
          <div className="flex items-center gap-2">
            <BsGraphDownArrow className="h-5 w-5 text-[var(--warning)]" />
            <h4 className='text-2xl font-semibold leading-none tracking-tight'>Poor Performing Fund</h4>
          </div>
        </div>
        <div className='p-6 pt-0'>
          <p className="font-medium text-foreground mb-2">{insights?.poorPerforming?.name}</p>
          <Badge variant="outline" className="bg-[var(--warning)]/10 text-[var(--warning)] border-[var(--warning)]/20">
            {insights?.poorPerforming?.returnPercentage}% Returns
          </Badge>
        </div>
      </div>

      <div className='rounded-lg bg-[var(--card)] text-[var(--card-foreground)] shadow-sm p-6 pt-0 border-l-4 border-l-[var(--primary)] dark:bg-[var(--muted)]/50'>
        <div className='flex flex-col space-y-1.5 p-6 pb-3'>
          <div className="flex items-center gap-2">
            <FiAlertTriangle className="h-5 w-5 text-[var(--primary)]" />
            <h4 className='text-2xl font-semibold leading-none tracking-tight'>Rebalancing Alert</h4>
          </div>
        </div>
        <div className='p-6 pt-0'>
          <p className="text-sm text-[var(--muted-foreground)] dark:text-[var(----accent-foreground)]">
            {insights.rebalancingAlert}
          </p>
        </div>
      </div>

    </section>
  )
}

export default React.memo(InsightsSection)