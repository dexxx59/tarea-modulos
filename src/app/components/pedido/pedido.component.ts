import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/pedido';
import { PedidoService } from 'src/app/services/pedido.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  lista:Pedido[] = [];
  constructor(private Clientes:PedidoService ) { }
  search:String='';
  ngOnInit(): void {
    console.log("iniciado consulta");
    this.Clientes.getAll().snapshotChanges().subscribe(
      serve=>{
        this.lista=
        serve.map(item=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              producto:item.payload.doc.data().producto,
              fecha:item.payload.doc.data().fecha,
              total:item.payload.doc.data().total,
            }
          );

        })
        console.log("Datos del servidor firebase",this.lista);
      }
    )
  }
  buscar(){
    this.Clientes.search(this.search).snapshotChanges()
      .subscribe(serve=>{
        this.lista=
        serve.map((item:any)=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              producto:item.payload.doc.data().producto,
              fecha:item.payload.doc.data().fecha,
              total:item.payload.doc.data().total,
            }
          );

        })
      });
  }

}