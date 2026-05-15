import { CPl010CNt2022002V130LeiauteNFeV400Endereco } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Endereco';

/**
 * Identificação do Destinatário
 */
export interface IPl010CNt2022002V130LeiauteNFeV400Dest {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Dados do endereço
   */
  enderDest?: CPl010CNt2022002V130LeiauteNFeV400Endereco;
  /**
   * Inscrição Estadual (obrigatório nas operações com contribuintes do ICMS)
   */
  IE?: unknown;
}
