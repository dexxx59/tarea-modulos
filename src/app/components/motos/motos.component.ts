import { Component, OnInit } from '@angular/core';
import { Moto } from 'src/app/model/moto';
import { MotoService } from 'src/app/services/moto.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
@Component({
  selector: 'app-motos',
  templateUrl: './motos.component.html',
  styleUrls: ['./motos.component.css']
})
export class MotosComponent implements OnInit {
  lista:Moto[] = [];
  constructor(private Motos:MotoService ) { }
  search:String='';
  ngOnInit(): void {
    console.log("iniciado consulta");
    this.Motos.getAll().snapshotChanges().subscribe(
      serve=>{
        this.lista=
        serve.map(item=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              modelo:item.payload.doc.data().modelo,
              marca:item.payload.doc.data().marca,
              matricula:item.payload.doc.data().matricula,
            }
          );

        })
        console.log("Datos del servidor firebase",this.lista);
      }
    )
  }
  borrar($event:any,prod:Moto){
    $event.preventDefault();
    Swal.fire({
      title: 'Esta seguro de Borrar?',
      text: "Se perdera definitivamente",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.Motos.delete((String)(prod.key));
        Swal.fire(
          'Borrado!',
          'Su item fue borrardo.',
          'success'
        )
      }
    })
  }
  buscar(){
    this.Motos.search(this.search).snapshotChanges()
      .subscribe(serve=>{
        this.lista=
        serve.map((item:any)=>{
           return Object.assign(
            { 
              key:item.payload.doc.id,
              modelo:item.payload.doc.data().modelo,
              marca:item.payload.doc.data().marca,
              matricula:item.payload.doc.data().matricula,
            }
          );

        })
      });
  }

}
