import { Strategy } from "passport-jwt";
declare const JwtSrategy_base: new (...args: [opt: import("passport-jwt").StrategyOptionsWithRequest] | [opt: import("passport-jwt").StrategyOptionsWithoutRequest]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class JwtSrategy extends JwtSrategy_base {
    constructor();
    validate(payload: any): Promise<{
        email: any;
        id: any;
    }>;
}
export {};
