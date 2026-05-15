import { TEventoEpecPlV101LeiauteEpecV100Ie } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Ie';

import { TEventoEpecPlV101LeiauteEpecV100Uf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Uf';

import { TEventoEpecPlV101LeiauteEpecV100Vicms } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Vicms';

import { TEventoEpecPlV101LeiauteEpecV100Vnf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Vnf';

import { TEventoEpecPlV101LeiauteEpecV100Vst } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Vst';

/**
 * Identificador do destinatário, em caso de comprador estrangeiro
 */
export interface IEventoEpecPlV101LeiauteEpecV100Dest {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property TEvento Epec Pl V101 Leiaute Epec V100 Uf.
   */
  TEventoEpecPlV101LeiauteEpecV100Uf?: TEventoEpecPlV101LeiauteEpecV100Uf;
  /**
   * Schema property TEvento Epec Pl V101 Leiaute Epec V100 Ie.
   */
  TEventoEpecPlV101LeiauteEpecV100Ie?: TEventoEpecPlV101LeiauteEpecV100Ie;
  /**
   * Schema property v NF.
   */
  vNF?: TEventoEpecPlV101LeiauteEpecV100Vnf;
  /**
   * Schema property v ICMS.
   */
  vICMS?: TEventoEpecPlV101LeiauteEpecV100Vicms;
  /**
   * Schema property v ST.
   */
  vST?: TEventoEpecPlV101LeiauteEpecV100Vst;
}
