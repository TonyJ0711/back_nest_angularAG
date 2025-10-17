import { ConfigService } from "src/config/config.service";
import { DataSource } from "typeorm";
export declare const databaseProviders: {
    provide: string;
    inject: (typeof ConfigService)[];
    useFactory: (config: ConfigService) => Promise<DataSource>;
}[];
