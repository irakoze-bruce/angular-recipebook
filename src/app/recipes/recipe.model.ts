export class Recipe{
  public imagePath!:string
  public name!:string
  public description!:string


  constructor(imagePath:string,name:string,description:string){

    this.imagePath = imagePath
    this.name=name
    this.description = description
    
  }

}