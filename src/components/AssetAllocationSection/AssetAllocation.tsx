import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
// import { assetAllocation } from '../../data/portfolioData'
import type { IAssetAllocation } from '../../models/user-data.interface';
import { formatCurrency } from '../../utils/formatCurrency';
import Card from '../Card/Card';
import { renderCustomizedLabel } from '../../utils/formatDOM';
import { CustomTooltip } from '../CustomTooltip/CustomTooltip';
import React from 'react';

interface AssetAllocationProps {
  assetAllocation: IAssetAllocation[];
}

const AssetAllocation = ({ assetAllocation }: AssetAllocationProps) => {

  return (
    <Card title='Asset Allocation'>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* Pie Chart */}
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart className='dark:border-transparent'>
              <Pie
                data={assetAllocation}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {assetAllocation.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="space-y-4">
          {assetAllocation.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-[var(--muted)]/50 rounded-lg">
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-medium">{item.name}</span>
              </div>
              <div className="text-right">
                <p className="font-semibold">{formatCurrency(item.value)}</p>
                <p className="text-sm text-[var(--muted-foreground)] dark:text-[var(----accent-foreground)]">{item.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

export default React.memo(AssetAllocation)