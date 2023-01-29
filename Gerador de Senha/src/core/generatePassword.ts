const generateSpecialCharAndSimbols = () => {
    const part1 = [...Array(15).keys()].map(i => String.fromCharCode(i + 33));
    const part2 = [...Array(7).keys()].map(i => String.fromCharCode(i + 58));
    const part3 = [...Array(5).keys()].map(i => String.fromCharCode(i + 91));
    const part4 = [...Array(4).keys()].map(i => String.fromCharCode(i + 123));

    const result = [...part1, ...part2, ...part3, ...part4];

    return result;
}

type generatorConfigType = {
    upperCase: string[]
    lowerCase: string[]
    numbers: string[]
    specialCharAndSymbols: string[]
}

const passwordGeneratorConfig: generatorConfigType = {
    upperCase: [...Array(26).keys()].map(i => String.fromCharCode(i + 65)),
    lowerCase: [...Array(26).keys()].map(i => String.fromCharCode(i + 97)),
    numbers: [...Array(10).keys()].map(i => String.fromCharCode(i + 48)),
    specialCharAndSymbols: generateSpecialCharAndSimbols()
}

const generateNumber = (max: number) => 
{
    return Math.floor(Math.random() * max);
}

const verifyTypeOfChar = (typeChar: string) =>
{
    if(typeChar === 'upperCase' || typeChar === 'lowerCase') return 26;
    if(typeChar === 'numbers') return 10;
    if(typeChar === 'specialCharAndSymbols') return 21;
}

export const generatePassword = (passwordLength: string, inputs: string[]) =>
{
    const passwordLengthNumber = parseInt(passwordLength)
    let result = '';
    let i = 0;

    while(i < passwordLengthNumber)
    {
        const actualTypeCharToGenerate = inputs[generateNumber(inputs.length)];
        const maxLength = verifyTypeOfChar(actualTypeCharToGenerate) || 0;

        const selectedTheAlphabet = passwordGeneratorConfig[actualTypeCharToGenerate as keyof generatorConfigType];
        const generatedChar = selectedTheAlphabet[generateNumber(maxLength)];

        result+= generatedChar;
        i++;
    }
    return result;
}