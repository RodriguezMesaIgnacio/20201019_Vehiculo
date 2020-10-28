export class Coche {
    private _matricula : string
    private _consumo : number 
    private _arrancado : boolean
    private _velocidad : number

    constructor (matricula:string, consumo:number){
        this._matricula = matricula
        this._consumo = consumo
        this._arrancado = false 
        this._velocidad = 0
    }

    get matricula(){
        return this._matricula
    }

    get consumo(){
        return this._consumo
    }

    get arrancado(){
        return this._arrancado
    }

    botonArrancado(){
        if(this._arrancado==false){
            this._arrancado=true
        }else{
            if (this._velocidad!=0){
                throw 'ERROR no puede apagar el coche si no está parado'
            } else {
                this._arrancado=false
            }
        }
    }

    get velocidad(){
        return this._velocidad
    }

    set velocidad(n:number){
        if(this._arrancado==false){
            throw 'ERROR, no puedes cambiar la velocidad a un coche que no está arrancado'
        } else {
            this._velocidad=n
        }
    }

    consumido(t:number){ 
        if(!this._arrancado || this._velocidad==0){
            throw 'ERROR, no puedes calcular el consumo de un coche parado o no arrancado'
        } else {
            return (this._velocidad/t)*(this._consumo/100)
        }
    }

    imprimirCoche(){
        return `El coche con matricula ${this.matricula} va a ${this._velocidad} km/h y consume ${this._consumo} L cada 100 km`
    }

}