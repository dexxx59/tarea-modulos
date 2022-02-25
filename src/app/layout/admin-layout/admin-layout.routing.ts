import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProductoComponent } from "src/app/components/producto/producto.component";
import {  RouterModule } from '@angular/router';
import { ProductonuevoComponent } from "src/app/components/producto/productonuevo/productonuevo.component";
import { ClientesComponent } from "src/app/components/clientes/clientes.component";
import { MotosComponent } from "src/app/components/motos/motos.component";
import { MotosnuevoComponent } from "src/app/components/motos/motosnuevo/motosnuevo.component";
import { UsuarioComponent } from "src/app/components/usuario/usuario.component";
import { UsuarionuevoComponent } from "src/app/components/usuario/usuarionuevo/usuarionuevo.component";
import { PedidoComponent } from "src/app/components/pedido/pedido.component";
//export 
const AdminLayoutRoutes:Routes=[
    {
        path:'producto',
        component:ProductoComponent //listar
    },
    {
        path:'productoform',
        component:ProductonuevoComponent //crear nuevo
    },
    {
        path:'productoform/:id',
        component:ProductonuevoComponent //editar
    },
    
    {
        path:'clientes',
        component:ClientesComponent //listar
    },

    {
        path:'motos',
        component:MotosComponent //listar
    },
    {
        path:'motosform',
        component:MotosnuevoComponent //crear nuevo
    },
    {
        path:'motosform/:id',
        component:MotosnuevoComponent //editar
    },
    {
        path:'usuario',
        component:UsuarioComponent //listar
    },
    {
        path:'usuarioform',
        component:UsuarionuevoComponent //crear nuevo
    },
    {
        path:'usuarioform/:id',
        component:UsuarionuevoComponent //editar
    },
   
    {
        path:'pedido',
        component:PedidoComponent //listar
    },
    
    
    

]
@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutesR{}