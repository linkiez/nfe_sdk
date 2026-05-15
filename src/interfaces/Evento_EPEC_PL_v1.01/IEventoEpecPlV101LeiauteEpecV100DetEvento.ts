import { CEventoEpecPlV101LeiauteEpecV100Dest } from '../../classes/Evento_EPEC_PL_v1.01/CEventoEpecPlV101LeiauteEpecV100Dest';

import { TEventoEpecPlV101LeiauteEpecV100COrgaoAutor } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100COrgaoAutor';

import { TEventoEpecPlV101LeiauteEpecV100DhEmi } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100DhEmi';

import { TEventoEpecPlV101LeiauteEpecV100Ie } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100Ie';

import { TEventoEpecPlV101LeiauteEpecV100VerAplic } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100VerAplic';

/**
 * Schema XML de validação do evento de emissão prévia em contingência - 110140
 */
export interface IEventoEpecPlV101LeiauteEpecV100DetEvento {
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
  cOrgaoAutor?: TEventoEpecPlV101LeiauteEpecV100COrgaoAutor;
  /**
   * Schema property tp Autor.
   */
  tpAutor?: unknown;
  /**
   * Schema property ver Aplic.
   */
  verAplic?: TEventoEpecPlV101LeiauteEpecV100VerAplic;
  /**
   * Schema property dh Emi.
   */
  dhEmi?: TEventoEpecPlV101LeiauteEpecV100DhEmi;
  /**
   * Schema property tp NF.
   */
  tpNF?: unknown;
  /**
   * Schema property TEvento Epec Pl V101 Leiaute Epec V100 Ie.
   */
  TEventoEpecPlV101LeiauteEpecV100Ie?: TEventoEpecPlV101LeiauteEpecV100Ie;
  /**
   * Identificador do destinatário, em caso de comprador estrangeiro
   */
  dest?: CEventoEpecPlV101LeiauteEpecV100Dest;
}
