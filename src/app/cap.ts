const names:string | number ="";

const sum=(a:number,b:number):number=>{
  return a+b
}

class Persona{
 private name:string;
 private edad:number;
  constructor(name:string,edad:number){
    this.name=name;
    this.edad=edad;
  }
  getName():string{
    return this.name
  }
  setName(name:string):void{
    this.name=name
  }

}

const nico = new Persona("nico",21);
