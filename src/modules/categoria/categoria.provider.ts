import { Categoria } from "./entities/categoria.entity";
import { DataSource } from "typeorm";
import { Inject } from "@nestjs/common";

export const categoriaProvider=[
    {
    provide: 'CATEGORIA_REPOSITORY',
    useFactory: (dataSource:DataSource)=>dataSource.getRepository(Categoria),
    inject:['DATA_CONNECTION']
    }
]   