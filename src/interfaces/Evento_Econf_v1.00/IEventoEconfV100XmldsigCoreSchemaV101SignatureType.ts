import { CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType';

import { CEventoEconfV100XmldsigCoreSchemaV101SignatureValueType } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100XmldsigCoreSchemaV101SignatureValueType';

import { CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IEventoEconfV100XmldsigCoreSchemaV101SignatureType.
 */
export interface IEventoEconfV100XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CEventoEconfV100XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CEventoEconfV100XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CEventoEconfV100XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
