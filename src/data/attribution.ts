// Sankey attribution data — simulated revenue flow from spend to closed deals

export interface SankeyNode {
  id: string;
  label: string;
  value: number;
  color: string;
}

export interface SankeyLink {
  source: string;
  target: string;
  value: number;
}

export interface SankeyData {
  nodes: SankeyNode[];
  links: SankeyLink[];
}

// Channel-level spend → pipeline → revenue attribution
export const attributionData: SankeyData = {
  nodes: [
    // Sources (left)
    { id: "google", label: "Google Ads", value: 180000, color: "#22c55e" },
    { id: "linkedin", label: "LinkedIn", value: 145000, color: "#22c55e" },
    { id: "meta", label: "Meta", value: 92000, color: "#22c55e" },
    { id: "reddit", label: "Reddit", value: 48000, color: "#22c55e" },
    { id: "content", label: "Content Syndication", value: 47000, color: "#22c55e" },
    // Stage 2: Lead types
    { id: "mql", label: "MQLs", value: 847, color: "#4ade80" },
    { id: "sql", label: "SQLs", value: 312, color: "#4ade80" },
    // Stage 3: Pipeline
    { id: "meetings", label: "Meetings Booked", value: 198, color: "#16a34a" },
    { id: "proposals", label: "Proposals Sent", value: 89, color: "#16a34a" },
    // Stage 4: Revenue
    { id: "closed", label: "Closed Won", value: 34, color: "#22c55e" },
    { id: "revenue", label: "Revenue", value: 2400000, color: "#22c55e" },
  ],
  links: [
    // Spend → MQLs
    { source: "google", target: "mql", value: 320 },
    { source: "linkedin", target: "mql", value: 245 },
    { source: "meta", target: "mql", value: 142 },
    { source: "reddit", target: "mql", value: 78 },
    { source: "content", target: "mql", value: 62 },
    // MQLs → SQLs
    { source: "mql", target: "sql", value: 312 },
    // SQLs → Meetings
    { source: "sql", target: "meetings", value: 198 },
    // Meetings → Proposals
    { source: "meetings", target: "proposals", value: 89 },
    // Proposals → Closed
    { source: "proposals", target: "closed", value: 34 },
    // Closed → Revenue
    { source: "closed", target: "revenue", value: 2400000 },
  ],
};

// Channel breakdown stats for the table view
export interface ChannelStat {
  channel: string;
  spend: number;
  leads: number;
  sqls: number;
  deals: number;
  revenue: number;
  roas: number;
  cpl: number;
  cac: number;
}

export const channelStats: ChannelStat[] = [
  { channel: "Google Ads", spend: 180000, leads: 320, sqls: 128, deals: 14, revenue: 1008000, roas: 5.6, cpl: 563, cac: 12857 },
  { channel: "LinkedIn", spend: 145000, leads: 245, sqls: 89, deals: 10, revenue: 720000, roas: 4.97, cpl: 592, cac: 14500 },
  { channel: "Meta", spend: 92000, leads: 142, sqls: 52, deals: 5, revenue: 360000, roas: 3.91, cpl: 648, cac: 18400 },
  { channel: "Reddit", spend: 48000, leads: 78, sqls: 28, deals: 3, revenue: 216000, roas: 4.5, cpl: 615, cac: 16000 },
  { channel: "Content Synd.", spend: 47000, leads: 62, sqls: 15, deals: 2, revenue: 96000, roas: 2.04, cpl: 758, cac: 23500 },
];
