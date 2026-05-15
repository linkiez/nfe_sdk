import { CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType } from '../../classes/Evento_EPEC_NFCe_PL1.00/CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType';

import { CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureValueType } from '../../classes/Evento_EPEC_NFCe_PL1.00/CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureValueType';

import { CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType } from '../../classes/Evento_EPEC_NFCe_PL1.00/CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureType.
 */
export interface IEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CEventoEpecNfCePl100XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CEventoEpecNfCePl100XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CEventoEpecNfCePl100XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
