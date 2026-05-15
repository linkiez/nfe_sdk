import { TEventoEpecPlV101E110140V100Ie } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Ie';

import { TEventoEpecPlV101E110140V100Uf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Uf';

import { TEventoEpecPlV101E110140V100Vicms } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Vicms';

import { TEventoEpecPlV101E110140V100Vnf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Vnf';

import { TEventoEpecPlV101E110140V100Vst } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Vst';

/**
 * Identificador do destinatário, em caso de comprador estrangeiro
 */
export interface IEventoEpecPlV101E110140V100Dest {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property TEvento Epec Pl V101 E110140 V100 Uf.
   */
  TEventoEpecPlV101E110140V100Uf?: TEventoEpecPlV101E110140V100Uf;
  /**
   * Schema property TEvento Epec Pl V101 E110140 V100 Ie.
   */
  TEventoEpecPlV101E110140V100Ie?: TEventoEpecPlV101E110140V100Ie;
  /**
   * Schema property v NF.
   */
  vNF?: TEventoEpecPlV101E110140V100Vnf;
  /**
   * Schema property v ICMS.
   */
  vICMS?: TEventoEpecPlV101E110140V100Vicms;
  /**
   * Schema property v ST.
   */
  vST?: TEventoEpecPlV101E110140V100Vst;
}
