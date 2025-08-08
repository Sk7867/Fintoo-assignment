import { formatCurrency } from '../../utils/formatCurrency';
import { Badge } from '../Badge/Badge'
import type { IUserData } from '../../models/user-data.interface';
import Card from '../Card/Card';
import React from 'react';

interface UserSummaryCardProps {
  userData: IUserData;
}

const UserSummaryCard = ({ userData }: UserSummaryCardProps) => {
  return (
    <Card title='Investment Overview' >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="text-sm text-[var(--muted-foreground)]">Name</label>
            <p className="text-lg font-medium text-foreground">{userData.userName}</p>
          </div>
          <div>
            <label className="text-sm text-[var(--muted-foreground)]">PAN</label>
            <p className="text-lg font-medium text-foreground">{userData.panNumber}</p>
          </div>
          <div>
            <label className="text-sm text-[var(--muted-foreground)]">Risk Profile</label>
            <div className="mt-1">
              <Badge variant='secondary' className='text-sm'>{userData.riskProfile}</Badge>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-sm text-[var(--muted-foreground)]">Portfolio Value</label>
            <p className="text-xl font-bold text-foreground">
              {formatCurrency(userData.portFolioValue)}
            </p>
          </div>

          <div>
            <label className="text-sm text-[var(--muted-foreground)]">Total Invested</label>
            <p className="text-lg font-semibold text-foreground">
              {formatCurrency(userData.totalInvested)}
            </p>
          </div>

          <div>
            <label className="text-sm text-[var(--muted-foreground)]">Overall Return</label>
            <p className="text-lg font-semibold text-[var(--profit)]">
              {formatCurrency(userData.overallReturn)}
            </p>
            <p className="text-sm text-[var(--profit)]">({userData.overallReturnPercentage}%)</p>
          </div>

          <div>
            <label className="text-sm text-[var(--muted-foreground)]">XIRR</label>
            <p className="text-lg font-semibold text-[var(--profit)]">{userData.xirr}%</p>
          </div>


        </div>


      </div>
    </Card>
  )
}

export default React.memo(UserSummaryCard)