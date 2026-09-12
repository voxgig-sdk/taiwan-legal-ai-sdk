import { Context } from './Context';
declare class TaiwanLegalAiError extends Error {
    isTaiwanLegalAiError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { TaiwanLegalAiError };
