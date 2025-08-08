import { Badge } from '../Badge/Badge'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { MdOutlineCancel } from 'react-icons/md';
import type { IHoldings } from '../models/user-data.interface';

interface HoldingsTableProps {
	holdingsData: IHoldings[];
}

const HoldingsTable = ({ holdingsData }: HoldingsTableProps) => {

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat('en-IN', {
			style: 'currency',
			currency: 'INR',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(amount);
	};

	const getTypeColor = (type: string) => {
		switch (type) {
			case "Equity":
				return "bg-[var(--chart-1)]/10 text-[var(--chart-1)] border-[var(--chart-1)] dark:text-[var(----accent-foreground)]";
			case "Debt":
				return "bg-[var(--chart-2)]/10 text-[var(--chart-2)] border-[var(--chart-2)] dark:text-[var(----accent-foreground)]";
			case "Gold":
				return "bg-[var(--chart-3)]/10 text-[var(--chart-3)] border-[var(--chart-3)] dark:text-[var(----accent-foreground)]";
			default:
				return "bg-[var(--muted)] text-[var(--muted-foreground)]";
		}
	};

	const getReturnColor = (returnPercentage: number) => {
		return returnPercentage >= 0 ? "text-[var(--profit)]" : "text-[var(--loss)]";
	};

	return (
		<section className='w-full rounded-lg border border-[var(--bg-card)] shadow-sm'>
			<div className='flex flex-col space-y-1.5 p-6'>
				<h3 className='text-2xl font-semibold leading-none tracking-tight'>Holdings</h3>
			</div>
			<div className='p-6 pt-0'>
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
								{holdingsData.map((holding) => (
									<tr key={holding.id} className='border-b transition-colors hover:bg-[var(--muted)]/50 data-[state=selected]:bg-[var(--muted)]'>
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

			</div>

		</section>
	)
}

export default HoldingsTable