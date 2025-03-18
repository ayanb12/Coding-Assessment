export interface Transaction {
  accountUuid: string;
  accountId: string;
  transEnrichmentState: string;
  transactionId: string;
  transactionIdH: string;
  thriveBankTransactionID: number;
  transactionType: string;
  date: string;
  transactionTitle: string;
  status: string;
  bkStatus: string;
  description: string;
  bankDescription: string;
  referenceClean: string;
  cashflow: "inflow" | "outflow";
  amount: string;
  balanceAmount: number | null;
  postedDate: string;
  transactiondate: string;
  logoUrl: string;
  receiptName: string;
  receiptUrl: string;
  receiptID: number;
  attachedFileName: string | null;
  attachmentId: string | null;
  gst: string;
  merchantPresence: string | null;
  category: string;
  shortCategory: string;
  categoryId: string;
  merchantName: string | null;
  merchantNameAlias: string | null;
  addressShort: string | null;
  addressLong: string | null;
  suburb: string;
  longitude: number | null;
  latitude: number | null;
  phone: string | null;
  email: string | null;
  webSite: string | null;
  acn: string | null;
  abn: string | null;
  originalCofACode: number;
  currentCofACode: number;
  chartOfAccount: string | null;
  salesTaxSource: string;
  notes: string | null;
  invoiceTotalAmount: string | null;
  coaName: string;
  businessUsePercentage: number;
  tags: string[];
  attachment: string[];
  orderPriority: number;
  id: string;
}
