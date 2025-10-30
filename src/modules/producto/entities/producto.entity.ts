import { Pedido } from "src/modules/pedido/entities/pedido.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PedidoProducto } from "../../pedido/entities/pedidoproducto.entity";

@Entity('producto')
export class Producto {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    precio: number; 
    @Column()
    stock: number;
    @Column()
    imagen: string;
    @Column()
    descripcion: string;
    @Column()
    estado: boolean;
    @ManyToOne(()=>Categoria,(cat)=>cat.producto)
    categoria: Categoria;

    @OneToMany(()=>PedidoProducto,pedpro=>pedpro.producto)
    pedidoProducto: PedidoProducto[];
}
