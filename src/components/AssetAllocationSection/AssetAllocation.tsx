import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
// import { assetAllocation } from '../../data/portfolioData'
import type { IAssetAllocation } from '../models/user-data.interface';

interface AssetAllocationProps {
  assetAllocation: IAssetAllocation[];
}

const AssetAllocation = ({ assetAllocation }: AssetAllocationProps) => {
  const renderCustomizedLabel = ({ percentage }: any) => {
    return `${percentage}%`;
  };
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-[var(--card)] p-3 border border-[var(--border)] rounded-lg shadow-lg">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm text-[var(--muted-foreground)]">
            {formatCurrency(data.value)} <span className='text-[var(--profit)]'>({data.percentage}%)</span>
          </p>
        </div>
      );
    }
    return null;
  };
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  return (
    <section className='w-full rounded-lg border border-[var(--bg-card)] shadow-sm'>
      <div className='flex flex-col space-y-1.5 p-6'>
        <h3 className='text-2xl font-semibold leading-none tracking-tight'>Asset Allocation</h3>
      </div>
      <div className='p-6 pt-0'>
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
      </div>
    </section>
  )
}

export default AssetAllocation