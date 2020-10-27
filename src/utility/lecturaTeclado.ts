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
    if(matricula.length!=7 || !matricula.charAt(0).match(/[0-9]/) || !matricula.charAt(1).match(/[0-9]/) || !matricula.charAt(2).match(/[0-9]/)
    || !matricula.charAt(3).match(/[0-9]/) || !matricula.charAt(4).match(/[A-Z]/)|| !matricula.charAt(5).match(/[A-Z]/)|| !matricula.charAt(6).match(/[A-Z]/)){
        throw 'ERROR la matrícula no tiene el formato correcto NNNNXXX'
    } else {
        return matricula
    }
}
