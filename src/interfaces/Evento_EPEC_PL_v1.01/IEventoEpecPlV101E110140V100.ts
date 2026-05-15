import { CEventoEpecPlV101E110140V100DetEvento } from '../../classes/Evento_EPEC_PL_v1.01/CEventoEpecPlV101E110140V100DetEvento';

import { TEventoEpecPlV101E110140V100COrgaoAutor } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100COrgaoAutor';

import { TEventoEpecPlV101E110140V100DhEmi } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100DhEmi';

import { TEventoEpecPlV101E110140V100Ie } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Ie';

import { TEventoEpecPlV101E110140V100Uf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Uf';

import { TEventoEpecPlV101E110140V100VerAplic } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100VerAplic';

import { TEventoEpecPlV101E110140V100Vicms } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Vicms';

import { TEventoEpecPlV101E110140V100Vnf } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Vnf';

import { TEventoEpecPlV101E110140V100Vst } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Vst';

/**
 * Type contract for IEventoEpecPlV101E110140V100.
 */
export interface IEventoEpecPlV101E110140V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property ver Aplic.
   */
  verAplic?: TEventoEpecPlV101E110140V100VerAplic;
  /**
   * Schema property dh Emi.
   */
  dhEmi?: TEventoEpecPlV101E110140V100DhEmi;
  /**
   * Schema property c Orgao Autor.
   */
  cOrgaoAutor?: TEventoEpecPlV101E110140V100COrgaoAutor;
  /**
   * Schema property i E.
   */
  iE?: TEventoEpecPlV101E110140V100Ie;
  /**
   * Schema property u F.
   */
  uF?: TEventoEpecPlV101E110140V100Uf;
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
  /**
   * Identificador do destinatário, em caso de comprador estrangeiro
   */
  detEvento?: CEventoEpecPlV101E110140V100DetEvento;
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
