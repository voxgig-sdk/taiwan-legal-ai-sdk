import { CaseAnalysiEntity } from './entity/CaseAnalysiEntity';
import { ContractServiceEntity } from './entity/ContractServiceEntity';
import { LegalQueryEntity } from './entity/LegalQueryEntity';
export type * from './TaiwanLegalAiTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { TaiwanLegalAiEntityBase } from './TaiwanLegalAiEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class TaiwanLegalAiSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    CaseAnalysi(entopts?: Record<string, any>): CaseAnalysiEntity;
    ContractService(entopts?: Record<string, any>): ContractServiceEntity;
    LegalQuery(entopts?: Record<string, any>): LegalQueryEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): TaiwanLegalAiSDK;
    tester(testopts?: any, sdkopts?: any): TaiwanLegalAiSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof TaiwanLegalAiSDK;
export { stdutil, config, BaseFeature, TaiwanLegalAiEntityBase, TaiwanLegalAiSDK, SDK, };
