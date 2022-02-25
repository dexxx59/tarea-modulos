import { Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { ProductoComponent } from "src/app/components/producto/producto.component";
import {  RouterModule } from '@angular/router';
import { ProductonuevoComponent } from "src/app/components/producto/productonuevo/productonuevo.component";
import { ClientesComponent } from "src/app/components/clientes/clientes.component";
import { MotosComponent } from "src/app/components/motos/motos.component";
import { MotosnuevoComponent } from "src/app/components/motos/motosnuevo/motosnuevo.component";
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
    
    

]
@NgModule({
    imports: [RouterModule.forChild(AdminLayoutRoutes)],
    exports: [RouterModule]
})
export class AdminLayoutRoutesR{}