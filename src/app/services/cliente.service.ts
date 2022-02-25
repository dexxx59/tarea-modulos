import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } 
from '@angular/fire/database';
import { AngularFirestore } from "@angular/fire/firestore";
import { Cliente as Coleccion } from '../model/cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private dbpath='clientes';
  //clientesRef:AngularFireList<clientes>;
  constructor(///private db: AngularFireDatabase,
        private dbb:AngularFirestore
    )
  { 
    //this.clientesRef=db.list(this.dbpath);
  }
  getAll()
  {
    return this.dbb.collection<Coleccion>(this.dbpath);
  }
  getItem(id:string){
    return this.dbb.collection<Coleccion>(this.dbpath).doc(id);
  }
 
  delete(id:string){
    return this.dbb.collection(this.dbpath).doc(id).delete();
  }
  search(query:String){
    //let q=query(ref,startAt(query))
    if(query==''){
      return this.dbb.collection(this.dbpath);
    }
    let searchTerm=query.toLocaleLowerCase();
    let strlength = searchTerm.length;
    let strFrontCode = searchTerm.slice(0, strlength-1);
    let strEndCode = searchTerm.slice(strlength-1, searchTerm.length);
      
    let endCode = strFrontCode + String.fromCharCode(strEndCode.charCodeAt(0) + 1);
      // like  'cosa%'
    return this.dbb.collection(this.dbpath,
      ref=>
      //ref.startAt('nombre',query));
      ref.where('nombre','>=',query).where('nombre','<',endCode)
      //startAt(query)
      );
  }

}