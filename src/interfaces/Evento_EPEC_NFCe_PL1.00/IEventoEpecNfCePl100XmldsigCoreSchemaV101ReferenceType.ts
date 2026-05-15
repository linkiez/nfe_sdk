import { CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType } from '../../classes/Evento_EPEC_NFCe_PL1.00/CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType';

import { TEventoEpecNfCePl100XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_EPEC_NFCe_PL1.00/TEventoEpecNfCePl100XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType.
 */
export interface IEventoEpecNfCePl100XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CEventoEpecNfCePl100XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TEventoEpecNfCePl100XmldsigCoreSchemaV101DigestValueType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
  /**
   * Schema attribute uri.
   */
  $URI?: any;
  /**
   * Schema attribute type.
   */
  $Type?: string;
}
