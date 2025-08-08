export const getTypeColor = (type: string) => {
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

export const getReturnColor = (returnPercentage: number) => {
  return returnPercentage >= 0 ? "text-[var(--profit)]" : "text-[var(--loss)]";
};
