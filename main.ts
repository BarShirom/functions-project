let animalTypes = ["dog", "cat", "mouse", "ant", "fish"]
let i = 1
let names = ["bar","dan", "mosh"]

class animal{
    id:number
    name:string
    age:number
    type:string

    constructor(){
        this.id = i++
        let random = Math.floor(Math.random() * (names.length - 1 + 1))
        this.name = names[random]
        random = Math.floor(Math.random() * (animalTypes.length - 1 + 1))
        this.type = animalTypes[random]
          
        switch(this.type) {
            case "fish":
                this.age = Math.floor(Math.random() * (5 - 2 + 1) + 2)
              break;
            case "dog":
              this.age = Math.floor(Math.random() * (16 - 8 + 1) + 8)
              break;
              case "ant":
                this.age = Math.floor(Math.random() * (2 - 1 + 1) + 1)
              break;
              case "mouse":
                this.age = Math.floor(Math.random() * (3 - 1 + 1) + 1)
              break;
              case "cat":
                this.age = Math.floor(Math.random() * (18 - 12 + 1) + 12)
              break;
            default:
              
          }

    }

    animalArray(sizeArray: number){
        //check input
        if(sizeArray<0){
            throw new Error("Error: invalid array size")
        }

        let array:animal[] = []
        for(let i = 0; i < sizeArray; i++){
            array[i] = new animal()
        }
        return array
    }

    animalArrayType(animalArray:animal[], text:string){

        //check input
            if(!animalTypes.includes(text)){
                throw new Error("Error: invalid animal type")
            }

        let newAnimalArray:animal[] = []
        for(let i = 0; i < animalArray.length; i++){
            if(animalArray[i].type == text){
                newAnimalArray.push(animalArray[i])
            }
        }
        return newAnimalArray
    }

    updateAnimalArray(animalArray:animal[], anl:animal){

         //check input
        if(typeof anl !== typeof animal){
            throw new Error("Error: not an animal")
        }
        animalArray.push(anl)
    }

    deleteAnimal(animalArray:animal[], id:number){

         //check input
        if(id <= 0){
            throw new Error("Error: invalid id number")
        }
            animalArray.filter(anl => {
                anl.id != id
            })

    }

    animalArrayTypeRemove(animalArray:animal[], text:string){

        //check input
        if(!animalTypes.includes(text)){
            throw new Error("Error: invalid animal type")
        }

    let newAnimalArray:animal[] = []
    for(let i = 0; i < animalArray.length; i++){
        if(animalArray[i].type != text){
            newAnimalArray.push(animalArray[i])
        }
    }
    return newAnimalArray
}
        
}




