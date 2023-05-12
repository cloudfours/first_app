import { Component } from '@angular/core';
import {Producto} from './models'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_app';
  nombre:string="angel"
  img="https://source.unsplash.com/random"
  disabledButton=false;
  valor = 25
  objeto={
    name:'angel',
    age:28,

  }
   box={
    width:100,
    height:100,
    background:'red'
   }
    products:Producto[] = [
      {
        name: 'EL mejor juguete',
        price: 565,
        image: './assets/img/1.jpg',

      },
      {
        name: 'Bicicleta casi nueva',
        price: 356,
        image: './assets/img/2.jpg'
      },
      {
        name: 'Colleción de albumnes',
        price: 34,
        image: './assets/img/3.jpg'
      },
      {
        name: 'Mis libros',
        price: 23,
        image: './assets/img/4.jpg'
      },
      {
        name: 'Casa para perro',
        price: 34,
        image: './assets/img/5.jpg'
      },
      {
        name: 'Gafas',
        price: 3434,
        image: './assets/img/6.png'
      }
    ]
register={
  name:'',
  email:'',
  password:'',
}
  newname=""
  nombres:string[]=['angel','jose','juan']
  toggle(){
    this.disabledButton=!this.disabledButton

  }
  auEdad(){
    this.objeto.age++
  }
  onscroll(event:Event){
     const element=event.target as HTMLElement
    console.log(element.scrollTop)
  }
  data(event:Event){
   const element = event.target as HTMLInputElement;
   this.objeto.name = element.value
  }
  guardar(){
this.nombres.push(this.newname)
this.newname=""
  }

  delete_add(index:number){
this.nombres.splice(index,1)
  }
  registers(){
console.log(this.register)
  }


}
