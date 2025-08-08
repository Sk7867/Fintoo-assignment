import { Badge } from '../Badge/Badge'
import type { IUserData } from '../models/user-data.interface';

interface UserSummaryCardProps {
  userData: IUserData;
}

const UserSummaryCard = ({ userData }: UserSummaryCardProps) => {

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
        <h3 className='text-2xl font-semibold leading-none tracking-tight'>Investment Overview</h3>
      </div>
      <div className='p-6 pt-0'>
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

            <div className="grid grid-cols-2 gap-4">
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


        </div>
      </div>
    </section>
  )
}

export default UserSummaryCard