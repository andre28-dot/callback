import PromptSync from "prompt-sync";
const prompt = PromptSync();

function generarSaludo(
    nombre1: string,
    nombre2: string,
    universidad: string = "UNIVO"): string{
        if(nombre2!== undefined)
        {
            return `¡Bienvenido, ${nombre1} ${nombre2}, Bienvenido a la ${universidad}`;

    }
    return `Bienvenido, ${nombre1}`

    }