declare module 'node-sped-pdf' {
  export function DANFe(data: {
    xml: string;
    consulta?: string;
    logo?: string;
  }): Promise<Uint8Array>;
}
