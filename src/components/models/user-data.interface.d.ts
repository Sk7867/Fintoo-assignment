export interface IUserData {
  userName: string;
  panNumber: string;
  riskProfile: string;
  portFolioValue: number;
  totalInvested: number;
  overallReturn: number;
  overallReturnPercentage: number;
  xirr: number;
}

export interface IAssetAllocation {
  name: string;
  percentage: number;
  value: number;
  color: string;
}

export interface IHoldings {
  id: number;
  schemeName: string;
  type: string;
  investedAmount: number;
  currentValue: number;
  returnPercentage: number;
  sipActive: boolean;
}

export interface IInsightsData {
  topPerforming: {
    name: string;
    returnPercentage: number;
  };
  poorPerforming: {
    name: string;
    returnPercentage: number;
  };
  rebalancingAlert: string;
}
