import Crypto from 'crypto-js';

export const getAuthorizationHeader = (
  host: string,
  uri: string,
  method: string,
  apiKey: string,
  apiSecret: string
) => {
  const ts = Math.floor(new Date().getTime() / 1000);
  const nonce = Math.floor(Math.random() * 1e20);
  const signature = [ts, nonce, method, uri, host, 443];
  const macString = `${signature.join(`\n`)}\n\n`;
  const macHash = Crypto.HmacSHA256(macString, apiSecret);
  const macBase64 = Crypto.enc.Base64.stringify(macHash);

  return `MAC id="${apiKey}", ts="${ts}", nonce="${nonce}", mac="${macBase64}"`;
};
