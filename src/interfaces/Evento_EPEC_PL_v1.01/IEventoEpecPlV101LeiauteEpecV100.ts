import { TEventoEpecPlV101LeiauteEpecV100COrgaoAutor } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100COrgaoAutor';

import { TEventoEpecPlV101LeiauteEpecV100DhEmi } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100DhEmi';

import { TEventoEpecPlV101LeiauteEpecV100Ie } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Ie';

import { TEventoEpecPlV101LeiauteEpecV100Uf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Uf';

import { TEventoEpecPlV101LeiauteEpecV100VerAplic } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100VerAplic';

import { TEventoEpecPlV101LeiauteEpecV100Vicms } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Vicms';

import { TEventoEpecPlV101LeiauteEpecV100Vnf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Vnf';

import { TEventoEpecPlV101LeiauteEpecV100Vst } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Vst';

/**
 * Type contract for IEventoEpecPlV101LeiauteEpecV100.
 */
export interface IEventoEpecPlV101LeiauteEpecV100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property ver Aplic.
   */
  verAplic?: TEventoEpecPlV101LeiauteEpecV100VerAplic;
  /**
   * Schema property dh Emi.
   */
  dhEmi?: TEventoEpecPlV101LeiauteEpecV100DhEmi;
  /**
   * Schema property c Orgao Autor.
   */
  cOrgaoAutor?: TEventoEpecPlV101LeiauteEpecV100COrgaoAutor;
  /**
   * Schema property i E.
   */
  iE?: TEventoEpecPlV101LeiauteEpecV100Ie;
  /**
   * Schema property u F.
   */
  uF?: TEventoEpecPlV101LeiauteEpecV100Uf;
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
  /**
   * Schema property desc Evento.
   */
  descEvento?: unknown;
  /**
   * Schema property tp Autor.
   */
  tpAutor?: unknown;
  /**
   * Schema property tp NF.
   */
  tpNF?: unknown;
}
