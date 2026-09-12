import { TaiwanLegalAiEntityBase } from '../TaiwanLegalAiEntityBase';
import type { TaiwanLegalAiSDK } from '../TaiwanLegalAiSDK';
import type { Control } from '../types';
import type { ContractService, ContractServiceCreateData } from '../TaiwanLegalAiTypes';
declare class ContractServiceEntity extends TaiwanLegalAiEntityBase<ContractService> {
    constructor(client: TaiwanLegalAiSDK, entopts: any);
    make(this: ContractServiceEntity): ContractServiceEntity;
    create(this: any, reqdata?: ContractServiceCreateData, ctrl?: Control): Promise<ContractServiceEntity>;
}
export { ContractServiceEntity };
