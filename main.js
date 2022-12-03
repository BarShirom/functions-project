var animalTypes = ["dog", "cat", "mouse", "ant", "fish"];
var i = 1;
var names = ["bar", "dan", "mosh"];
var animal = /** @class */ (function () {
    function animal() {
        this.id = i++;
        var random = Math.floor(Math.random() * (names.length - 1 + 1));
        this.name = names[random];
        random = Math.floor(Math.random() * (animalTypes.length - 1 + 1));
        this.type = animalTypes[random];
        switch (this.type) {
            case "fish":
                this.age = Math.floor(Math.random() * (5 - 2 + 1) + 2);
                break;
            case "dog":
                this.age = Math.floor(Math.random() * (16 - 8 + 1) + 8);
                break;
            case "ant":
                this.age = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                break;
            case "mouse":
                this.age = Math.floor(Math.random() * (3 - 1 + 1) + 1);
                break;
            case "cat":
                this.age = Math.floor(Math.random() * (18 - 12 + 1) + 12);
                break;
            default:
        }
    }
    animal.prototype.animalArray = function (sizeArray) {
        //check input
        if (sizeArray < 0) {
            throw new Error("Error: invalid array size");
        }
        var array = [];
        for (var i_1 = 0; i_1 < sizeArray; i_1++) {
            array[i_1] = new animal();
        }
        return array;
    };
    animal.prototype.animalArrayType = function (animalArray, text) {
        //check input
        if (!animalTypes.includes(text)) {
            throw new Error("Error: invalid animal type");
        }
        var newAnimalArray = [];
        for (var i_2 = 0; i_2 < animalArray.length; i_2++) {
            if (animalArray[i_2].type == text) {
                newAnimalArray.push(animalArray[i_2]);
            }
        }
        return newAnimalArray;
    };
    animal.prototype.updateAnimalArray = function (animalArray, anl) {
        //check input
        if (typeof anl !== typeof animal) {
            throw new Error("Error: not an animal");
        }
        animalArray.push(anl);
    };
    animal.prototype.deleteAnimal = function (animalArray, id) {
        //check input
        if (id <= 0) {
            throw new Error("Error: invalid id number");
        }
        animalArray.filter(function (anl) {
            anl.id != id;
        });
    };
    animal.prototype.animalArrayTypeRemove = function (animalArray, text) {
        //check input
        if (!animalTypes.includes(text)) {
            throw new Error("Error: invalid animal type");
        }
        var newAnimalArray = [];
        for (var i_3 = 0; i_3 < animalArray.length; i_3++) {
            if (animalArray[i_3].type != text) {
                newAnimalArray.push(animalArray[i_3]);
            }
        }
        return newAnimalArray;
    };
    return animal;
}());
