import { TaiwanLegalAiEntityBase } from '../TaiwanLegalAiEntityBase';
import type { TaiwanLegalAiSDK } from '../TaiwanLegalAiSDK';
import type { Control } from '../types';
import type { LegalQuery, LegalQueryCreateData } from '../TaiwanLegalAiTypes';
declare class LegalQueryEntity extends TaiwanLegalAiEntityBase<LegalQuery> {
    constructor(client: TaiwanLegalAiSDK, entopts: any);
    make(this: LegalQueryEntity): LegalQueryEntity;
    create(this: any, reqdata?: LegalQueryCreateData, ctrl?: Control): Promise<LegalQueryEntity>;
}
export { LegalQueryEntity };
