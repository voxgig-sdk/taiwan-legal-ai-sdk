import { TaiwanLegalAiEntityBase } from '../TaiwanLegalAiEntityBase';
import type { TaiwanLegalAiSDK } from '../TaiwanLegalAiSDK';
import type { Control } from '../types';
import type { CaseAnalysi, CaseAnalysiCreateData } from '../TaiwanLegalAiTypes';
declare class CaseAnalysiEntity extends TaiwanLegalAiEntityBase<CaseAnalysi> {
    constructor(client: TaiwanLegalAiSDK, entopts: any);
    make(this: CaseAnalysiEntity): CaseAnalysiEntity;
    create(this: any, reqdata?: CaseAnalysiCreateData, ctrl?: Control): Promise<CaseAnalysiEntity>;
}
export { CaseAnalysiEntity };
