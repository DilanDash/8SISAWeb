//la clase papa que no se wiiii
class FiguraGeometrica{
    construtor(){
        //puede o no tner alguna implementacion
    }

    //metodos
    area(){
        //meotodo que se encarga de calcular area
    }
    perimetro(){
        //metodo para el calculo del perimetro
        console.log ("este metodo calcula el perimetro");
    }

}
class Rectangulo extends 
FiguraGeometrica{
    contructor(base, altura){
        super();
        this._base = base;
        this._altura = altura;
        this._area = null;
        this._perimetro = null;
        this._actualizarArea = false;
        this._actualizarPerimetro = false;
    }
    calculadora(){
        return this._base * this._altura;
    }
    calcularPerimetro(){
        return this._base + this._altura;
    }
    set altura(altura){
        this._altura 0 altura;
        this._actualizarArea = true;
        this._actualizarPerimetro = true;
    }
    set base(base){
        this._base = base;
        this._actualizarArea = true;
        this._actualizarPerimetro = true;
    }
    get area(){
        if(this._actualizarArea || this._perimetro());
    }
    get perimetro(){
        if(this._actualizarPerimetro || this._perimetro){
            this._perimetro = this.calcularPerimetro();
        }
        return this._perimetro;
    }
}

const objetoRectangulo = new Rectangulo (2,5);

console.log(objetoRectangulo.calcularArea);








//spread
/* 
es una sintaxis que nos permite a un elemento iterable(arreglo, matriz, vector , cadena), se extendido
vamos a tener dentro de ese elemento desde cero a mas argumentos que van a pasar por una funcion que se va a encargar de obtener cada dato sin necesidad de hacer una llamada a cada indice
*/

// tenemos el siguiente arreglo
const arregloOrdenadoMayorMeno = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
console.log(`arregloOrdenadoMayormenor: ${arregloOrdenadoMayorMeno} `);

const [valorMasGrande] = arregloOrdenadoMayorMeno;
console.log(`valorMasGrande: ${valorMasGrande}`);

const[valorMasGrande1, valorMasGrande2, valorMasGrande3,...restoValores] = arregloOrdenadoMayorMeno;

console.log(`valorMasGrande1, valorMasGrande2, valorMasGrande3,...restoValores: ${valorMasGrande1}, ${valorMasGrande2},$ {valorMasGrande3}, ${restoValores}`);

