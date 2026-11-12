import { CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300InfDoc } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300InfDoc';

/**
 * Schema XML de validação do evento de inclusão de DFe 110115
 */
export interface IPlMdFe300BNt012025105EvInclusaoDFeMdFeV300EvIncDFeMdFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Número do Protocolo de Status do MDF-e. 1 posição tipo de autorizador (9 - SEFAZ Nacional ); 2 posições ano; 10 seqüencial no ano.
   */
  nProt?: unknown;
  /**
   * Schema property c Mun Carrega.
   */
  cMunCarrega?: unknown;
  /**
   * Informações dos Documentos fiscais vinculados ao manifesto
   */
  infDoc?: CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300InfDoc;
}
