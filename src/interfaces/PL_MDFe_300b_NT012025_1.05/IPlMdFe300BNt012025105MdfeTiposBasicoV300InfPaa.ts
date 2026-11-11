import { CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature';

/**
 * Grupo de Informação do Provedor de Assinatura e Autorização
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300InfPaa {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * CNPJ do Provedor de Assinatura e Autorização
   */
  CNPJPAA?: unknown;
  /**
   * Assinatura RSA do Emitente para DFe gerados por PAA
   */
  CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature?: CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature;
}
