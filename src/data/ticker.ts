// Bloomberg-style data ticker items — simulated real-time metrics
export interface TickerItem {
  label: string;
  value: string;
  delta: string;
  positive: boolean;
}

export const tickerItems: TickerItem[] = [
  { label: "PIPELINE", value: "$2.4M", delta: "+18.3%", positive: true },
  { label: "CAC", value: "$142", delta: "-12.1%", positive: true },
  { label: "ROAS", value: "4.7x", delta: "+0.8x", positive: true },
  { label: "CVR", value: "3.2%", delta: "+0.4%", positive: true },
  { label: "MQLs", value: "847", delta: "+124", positive: true },
  { label: "SQLs", value: "312", delta: "+47", positive: true },
  { label: "SPEND", value: "$512K", delta: "+8.2%", positive: false },
  { label: "CPL", value: "$89", delta: "-15.7%", positive: true },
  { label: "LTV:CAC", value: "6.2x", delta: "+1.1x", positive: true },
  { label: "DEALS", value: "34", delta: "+9", positive: true },
  { label: "ACV", value: "$72K", delta: "+$8K", positive: true },
  { label: "WIN%", value: "28%", delta: "+3.2%", positive: true },
  { label: "T2CLOSE", value: "42d", delta: "-6d", positive: true },
  { label: "INTENT", value: "1,247", delta: "+312", positive: true },
  { label: "ENRICHED", value: "94.2%", delta: "+2.1%", positive: true },
  { label: "AUDIENCES", value: "23", delta: "+4", positive: true },
];
