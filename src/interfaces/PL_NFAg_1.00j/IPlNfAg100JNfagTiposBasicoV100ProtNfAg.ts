import { CPlNfAg100JNfagTiposBasicoV100InfFisco } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100InfFisco';

import { CPlNfAg100JNfagTiposBasicoV100InfProt } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100InfProt';

import { TPlNfAg100JNfagTiposBasicoV100VerNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100VerNfAg';

/**
 * Reposta ao processamento da NFAg
 */
export interface IPlNfAg100JNfagTiposBasicoV100ProtNfAg {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Dados do protocolo de status
   */
  infProt?: CPlNfAg100JNfagTiposBasicoV100InfProt;
  /**
   * Mensagem do Fisco
   */
  infFisco?: CPlNfAg100JNfagTiposBasicoV100InfFisco;
  /**
   * Tipo Versão da NFAg
   */
  $versao?: TPlNfAg100JNfagTiposBasicoV100VerNfAg;
}
