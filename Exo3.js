class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get perimeter() {
        // Le périmètre d'un rectangle est 2 fois la somme de la largeur et de la hauteur
        return 2 * (this.width + this.height);
    }

    get isValid() {
        // Un rectangle est valide si sa largeur et sa hauteur sont toutes deux positives
        return this.width > 0 && this.height > 0;
    }

    isBiggerThan(other) {
        // Cette méthode compare la surface de ce rectangle avec un autre et renvoie true si elle est plus grande, false sinon.
        return (this.width * this.height) > (other.width * other.height);
    }
}

class Square extends Rectangle {
    constructor(side) {
        // Un carré est en fait un rectangle avec une largeur égale à la hauteur, donc on appelle le constructeur de Rectangle avec la même valeur pour les deux.
        super(side, side);
    }
}

// Votre code fonctionnel:
const rectangle1 = new Rectangle(10, 20);
console.log(rectangle1.perimeter); // 60
console.log(rectangle1.isValid); // true

const rectangle2 = new Rectangle(-10, 20);
console.log(rectangle2.isValid); // false

const carre1 = new Square(10);
console.log(carre1.perimeter); // 40
console.log(rectangle1.isBiggerThan(carre1)); // true