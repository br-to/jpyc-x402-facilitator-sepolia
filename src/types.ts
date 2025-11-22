export interface Authorization {
  from: string;
  to: string;
  value: string;
  validAfter: string | number;
  validBefore: string | number;
  nonce: string;
  v: number;
  r: string;
  s: string;
}

export interface VerifyResponse {
  ok: boolean;
  error?: string;
}

export interface SettleResponse {
  ok: boolean;
  txHash?: string;
  error?: string;
}
