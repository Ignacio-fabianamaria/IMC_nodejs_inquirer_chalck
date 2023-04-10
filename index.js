import inquirer from'inquirer';
import chalk from 'chalk'

inquirer.prompt([
    {name: 'nome', message: 'Digite seu nome:'},
    {name: 'peso', message: 'Digite seu peso:'},
    {name: 'altura', message: 'Digite sua altura:'},
]).then((answers) => {
    const magreza = chalk.bgRedBright('MAGREZA');
    const normal = chalk.bgGreen('NORMALIDADE');
    const sobrepeso = chalk.bgYellow('SOBREPESO');
    const obesidade = chalk.bgRed('OBESIDADE');
    const imc = (answers.peso / ( answers.altura * answers.altura)).toFixed(2)
    const response = `${answers.nome} seu índice de massa corporea é : ${imc}`
    if(imc <18.5){
    console.log(`${response}. Você está em situação de ${magreza}`);
    }else if(imc >=18.5 && imc <=24.9){
        console.log(`${response}. Você está em situação de ${normal}`);
    }else if(imc >=25 && imc <=29.9){
        console.log(`${response}. Você está em situação de ${sobrepeso}`);
    }else {
        console.log(`${response}. Você está em situação de ${obesidade}`);
    }
    console.log('\n');
    console.log(`Abaixo de 18,5: ${magreza} - Entre 18,5 e 24,9${normal} - Entre 25,0 e 29,9 ${sobrepeso} - Acima de 30 ${obesidade}`);
    console.log('\n');
}).catch((err) => console.log(err))