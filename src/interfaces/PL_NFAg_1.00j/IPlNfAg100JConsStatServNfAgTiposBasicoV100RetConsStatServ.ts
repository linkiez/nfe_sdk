import { TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat } from '../../types/PL_NFAg_1.00j/TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat';

/**
 * Tipo Resultado da Consulta do Status do Serviço NFAg
 */
export interface IPlNfAg100JConsStatServNfAgTiposBasicoV100RetConsStatServ {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Código do status da mensagem enviada.
   */
  cStat?: unknown;
  /**
   * Descrição literal do status do serviço solicitado.
   */
  xMotivo?: unknown;
  /**
   * Código da UF responsável pelo serviço
   */
  cUF?: unknown;
  /**
   * AAAA-MM-DDTHH:MM:SS TZD
   */
  dhRecbto?: unknown;
  /**
   * AAAA-MM-DDTHH:MM:SS TZD. Deve ser preenchida com data e hora previstas para o retorno dos serviços prestados.
   */
  dhRetorno?: unknown;
  /**
   * Tipo Versão do Consulta do Status do Serviço NFAg
   */
  $versao?: TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat;
}
