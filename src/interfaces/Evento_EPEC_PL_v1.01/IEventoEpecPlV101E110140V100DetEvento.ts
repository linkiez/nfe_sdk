import { CEventoEpecPlV101E110140V100Dest } from '../../classes/Evento_EPEC_PL_v1.01/CEventoEpecPlV101E110140V100Dest';

import { TEventoEpecPlV101E110140V100COrgaoAutor } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100COrgaoAutor';

import { TEventoEpecPlV101E110140V100DhEmi } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100DhEmi';

import { TEventoEpecPlV101E110140V100Ie } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100Ie';

import { TEventoEpecPlV101E110140V100VerAplic } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101E110140V100VerAplic';

/**
 * Identificador do destinatário, em caso de comprador estrangeiro
 */
export interface IEventoEpecPlV101E110140V100DetEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property desc Evento.
   */
  descEvento?: unknown;
  /**
   * Schema property c Orgao Autor.
   */
  cOrgaoAutor?: TEventoEpecPlV101E110140V100COrgaoAutor;
  /**
   * Schema property tp Autor.
   */
  tpAutor?: unknown;
  /**
   * Schema property ver Aplic.
   */
  verAplic?: TEventoEpecPlV101E110140V100VerAplic;
  /**
   * Schema property dh Emi.
   */
  dhEmi?: TEventoEpecPlV101E110140V100DhEmi;
  /**
   * Schema property tp NF.
   */
  tpNF?: unknown;
  /**
   * Schema property TEvento Epec Pl V101 E110140 V100 Ie.
   */
  TEventoEpecPlV101E110140V100Ie?: TEventoEpecPlV101E110140V100Ie;
  /**
   * Identificador do destinatário, em caso de comprador estrangeiro
   */
  dest?: CEventoEpecPlV101E110140V100Dest;
}
