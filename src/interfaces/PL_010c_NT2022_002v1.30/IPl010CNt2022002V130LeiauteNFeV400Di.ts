import { CPl010CNt2022002V130LeiauteNFeV400Adi } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Adi';

/**
 * Declaração de Importação (NT 2011/004)
 */
export interface IPl010CNt2022002V130LeiauteNFeV400Di {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Data de registro da DI/DSI/DA (AAAA-MM-DD)
   */
  dDI?: unknown;
  /**
   * UF onde ocorreu o desembaraço aduaneiro
   */
  UFDesemb?: unknown;
  /**
   * Data do desembaraço aduaneiro (AAAA-MM-DD)
   */
  dDesemb?: unknown;
  /**
   * Valor Adicional ao frete para renovação de marinha mercante
   */
  vAFRMM?: unknown;
  /**
   * Sigla da UF do adquirente ou do encomendante
   */
  UFTerceiro?: unknown;
  /**
   * Adições (NT 2011/004)
   */
  adi?: CPl010CNt2022002V130LeiauteNFeV400Adi;
}
