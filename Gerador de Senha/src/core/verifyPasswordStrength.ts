export const verifyPasswordStrength = (passwordLength: number, qtdInputsChecked: number) => {


    if(passwordLength >= 8 && qtdInputsChecked === 4)
    {
        return 'strong';
    }

    if(passwordLength >= 7 && qtdInputsChecked >= 3 || 
       passwordLength >= 6 && qtdInputsChecked >= 3)
    {
        return 'medium';
    }

    if(passwordLength >= 6 && qtdInputsChecked >= 2 ||
       passwordLength >= 1 && qtdInputsChecked >= 3)
    {
        return 'weak';
    }

    if(passwordLength >= 1 && qtdInputsChecked === 1 || 
       passwordLength >= 1 && passwordLength <= 5 && qtdInputsChecked === 2)
    {
        return 'veryWeak';
    }
    
    return 'empty'
};
