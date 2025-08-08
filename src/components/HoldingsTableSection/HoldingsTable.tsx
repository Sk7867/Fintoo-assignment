import { Badge } from '../Badge/Badge'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { MdOutlineCancel } from 'react-icons/md';
import type { IHoldings } from '../../models/user-data.interface';
import { formatCurrency } from '../../utils/formatCurrency';
import Card from '../Card/Card';
import { getReturnColor, getTypeColor } from '../../utils/formatColor';
import React from 'react';

interface HoldingsTableProps {
	holdingsData: IHoldings[];
}

const HoldingsTable = ({ holdingsData }: HoldingsTableProps) => {
	return (
		<Card title='Holdings Table' className='overflow-hidden'>
			<div className="overflow-x-auto">
				<div className='relative w-full overflow-auto'>
					<table className='w-full caption-bottom text-sm'>
						<thead className='[&_tr]:border-b'>
							<tr className='border-b transition-colors hover:bg-[var(--muted)]/50 data-[state=selected]:bg-[var(--muted)]'>
								<th className='h-12 px-4 text-left align-middle font-medium text-[var(--muted-foreground)] [&:has([role=checkbox])]:pr-0 min-w-[200px]'>Scheme Name</th>
								<th className='h-12 px-4 text-left align-middle font-medium text-[var(--muted-foreground)] [&:has([role=checkbox])]:pr-0'>Type</th>
								<th className='h-12 px-4 text-right align-middle font-medium text-[var(--muted-foreground)] [&:has([role=checkbox])]:pr-0'>Invested Amt</th>
								<th className='h-12 px-4 text-right align-middle font-medium text-[var(--muted-foreground)] [&:has([role=checkbox])]:pr-0'>Current Value</th>
								<th className='h-12 px-4 text-right align-middle font-medium text-[var(--muted-foreground)] [&:has([role=checkbox])]:pr-0'>Return %</th>
								<th className='h-12 px-4 text-center align-middle font-medium text-[var(--muted-foreground)] [&:has([role=checkbox])]:pr-0'>SIP Active</th>
							</tr>
						</thead>

						<tbody className='[&_tr:last-child]:border-0'>
							{holdingsData.map((holding, index) => (
								<tr key={holding.id} className={`border-b transition-colors hover:bg-[var(--muted)]/50 data-[state=selected]:bg-[var(--muted)] ${index % 2 === 0 ? 'bg-[var(--background)]' : 'bg-[var(--header-bg-dark)]/10 dark:bg-[var(--muted)]/10'}`}>
									<td className='p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium'>{holding.schemeName}</td>
									<td className='p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium'>
										<Badge
											variant="outline"
											className={getTypeColor(holding.type)}
										>
											{holding.type}
										</Badge>
									</td>
									<td className='p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium text-right'>{formatCurrency(holding.investedAmount)}</td>
									<td className='p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium text-right'>{formatCurrency(holding.currentValue)}</td>
									<td className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right font-semibold ${getReturnColor(holding.returnPercentage)}`}>{holding.returnPercentage > 0 ? '+' : ''}{holding.returnPercentage.toFixed(2)}%</td>
									<td className='p-4 align-middle [&:has([role=checkbox])]:pr-0 font-medium text-center'>{holding.sipActive ? (
										<IoIosCheckmarkCircleOutline className="h-5 w-5 text-[var(--profit)] mx-auto" />
									) : (
										<MdOutlineCancel className="h-5 w-5 text-[var(--loss)] mx-auto" />
									)}</td>

								</tr>
							))}
						</tbody>

					</table>
				</div>
			</div>
		</Card>
	)
}

export default React.memo(HoldingsTable)