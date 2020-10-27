import readline from 'readline'
let readlineI: readline.Interface

let leeLinea = (prompt: string) =>  {
    readlineI = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise<string>( (resuelta: any, rechazada: any) => {
        readlineI.question(`${prompt}: `, (cadenaEntrada: string) => {
                resuelta (cadenaEntrada)
            }
        )
    })
}
export let leerTeclado = async (prompt: string) => {
    let valor: string
    valor = await leeLinea(prompt)
    readlineI.close()
    return valor
}

export let leeMatricula = async (prompt: string) => {
    let matricula: string
    matricula = await leeLinea(prompt)
    readlineI.close()
    let letras:RegExp=/B|C|D|F|G|H|J|K|L|M|N|P|Q|R|S|T|V|W|X|Y|Z/
    if(matricula.length!=7 || !matricula.charAt(0).match(/[0-9]/) || !matricula.charAt(1).match(/[0-9]/) || !matricula.charAt(2).match(/[0-9]/)
    || !matricula.charAt(3).match(/[0-9]/) || !matricula.charAt(4).match(letras) || !matricula.charAt(5).match(letras)|| !matricula.charAt(6).match(letras)){
        throw 'ERROR la matrícula no tiene el formato correcto NNNNXXX sin vocales y en mayúsculas'
    } else {
        return matricula
    }
}
