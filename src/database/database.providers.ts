import { DataSource } from "typeorm";

export const databaseProviders = [
    {
        provide: 'DATA_CONNECTION',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '12345',
                database: 'backend_AG',
            });
            return dataSource.initialize();
        } 
    
    }]