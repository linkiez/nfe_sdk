import { CPlMdFe300BNt012025105MdfeTiposBasicoV300AutXml } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300AutXml';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Emit } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300Emit';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Ide } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300Ide';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfAdic } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfAdic';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfDoc } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfDoc';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfModal } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfModal';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPaa } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPaa';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSolicNff } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSolicNff';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Lacres } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300Lacres';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300ProdPred } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300ProdPred';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300RespTec } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300RespTec';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Seg } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300Seg';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Tot } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300Tot';

/**
 * Informações do MDF-e
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Identificação do MDF-e
   */
  public ide?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Ide;
  /**
   * Identificação do Emitente do Manifesto
   */
  public emit?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Emit;
  /**
   * Informações do modal
   */
  public infModal?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfModal;
  /**
   * Informações dos Documentos fiscais vinculados ao manifesto
   */
  public infDoc?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfDoc;
  /**
   * Informações de Seguro da Carga
   */
  public seg?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Seg;
  /**
   * Produto predominante Informar a descrição do produto predominante, conforme o item de maior valor financeiro conforme Resolução ANTT n° 5.867 de 2020).
   */
  public prodPred?: CPlMdFe300BNt012025105MdfeTiposBasicoV300ProdPred;
  /**
   * Totalizadores da carga transportada e seus documentos fiscais
   */
  public tot?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Tot;
  /**
   * Lacres do MDF-e Preechimento opcional para os modais Rodoviário e Ferroviário
   */
  public lacres?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Lacres;
  /**
   * Autorizados para download do XML do DF-e Informar CNPJ ou CPF. Preencher os zeros não significativos.
   */
  public autXML?: CPlMdFe300BNt012025105MdfeTiposBasicoV300AutXml;
  /**
   * Informações Adicionais
   */
  public infAdic?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfAdic;
  /**
   * Informações do Responsável Técnico pela emissão do DF-e
   */
  public infRespTec?: CPlMdFe300BNt012025105MdfeTiposBasicoV300RespTec;
  /**
   * Grupo de informações do pedido de emissão da Nota Fiscal Fácil
   */
  public infSolicNFF?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSolicNff;
  /**
   * Grupo de Informação do Provedor de Assinatura e Autorização
   */
  public infPAA?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPaa;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFe instance.
   * Schema context: Informações do MDF-e
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFe) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFe';

    if (props) {
      this.ide = props.ide
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300Ide(props.ide)
        : undefined;
      this.emit = props.emit
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300Emit(props.emit)
        : undefined;
      this.infModal = props.infModal
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfModal(props.infModal)
        : undefined;
      this.infDoc = props.infDoc
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfDoc(props.infDoc)
        : undefined;
      this.seg = props.seg
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300Seg(props.seg)
        : undefined;
      this.prodPred = props.prodPred
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300ProdPred(props.prodPred)
        : undefined;
      this.tot = props.tot
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300Tot(props.tot)
        : undefined;
      this.lacres = props.lacres
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300Lacres(props.lacres)
        : undefined;
      this.autXML = props.autXML
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300AutXml(props.autXML)
        : undefined;
      this.infAdic = props.infAdic
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfAdic(props.infAdic)
        : undefined;
      this.infRespTec = props.infRespTec
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300RespTec(props.infRespTec)
        : undefined;
      this.infSolicNFF = props.infSolicNFF
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSolicNff(
            props.infSolicNFF,
          )
        : undefined;
      this.infPAA = props.infPAA
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPaa(props.infPAA)
        : undefined;
    }
  }
}
