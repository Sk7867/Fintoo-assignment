// hooks/usePortfolioData.ts
import { useEffect, useState } from "react";
import { snapshots } from "../data/portfolioData";
import type {
  IAssetAllocation,
  IHoldings,
  IInsightsData,
  IUserData,
} from "../models/user-data.interface";

export const usePortfolioData = (selectedDate: string) => {
  const [data, setData] = useState<{
    userData: IUserData;
    assetAllocation: IAssetAllocation[];
    holdingsData: IHoldings[];
    insightsData: IInsightsData;
  } | null>(null);

  useEffect(() => {
    try {
      const currentSnapshot = snapshots[selectedDate as keyof typeof snapshots];

      if (currentSnapshot) {
        setData({
          userData: currentSnapshot.user as IUserData,
          assetAllocation:
            currentSnapshot.assetAllocation as IAssetAllocation[],
          holdingsData: currentSnapshot.holdings as IHoldings[],
          insightsData: currentSnapshot.insights as IInsightsData,
        });
      }
    } catch (err: any) {
      console.error("Error fetching portfolio data:", err);
      setData(null);
    }
  }, [selectedDate]);

  return { data };
};
