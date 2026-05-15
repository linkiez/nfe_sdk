import { CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento } from './CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento';

import { TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEvento } from './TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEvento';

export interface IEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEvento {
  "@class"?: string;
  unknown?: unknown;
  infEvento?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento;
  $versao?: TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEvento;
}

export class CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEvento {
    public "@class"?: string;

    public unknown?: unknown;
    public infEvento?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento;
    public $versao?: TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEvento;

    public constructor(props?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEvento) {
        this["@class"] = ".CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEvento";


        if (props) {

        	this.unknown = props.unknown;
        	this.infEvento = (props.infEvento) ? new CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento(props.infEvento): undefined;
        	this.$versao = props.$versao;
        }
    }
}
