const fs = require('fs');
const { val } = require('jshint/src/options');

const dadosJson = fs.readFileSync('logNaveSbornia1.json');
const objdados = JSON.parse(dadosJson);

// Criação dos 12 arrays referentes ao mês
var January = [];
var February = [];
var March = [];
var April = [];
var May = [];
var June = [];
var July = [];
var August = [];
var September = [];
var October = [];
var November = [];
var December = [];

// Utilização do map para passar o objeto completo referente ao mês
objdados.map(function (item, index) {

    // Primeiro irá verificar so item.month corresponde ao mês e se sim irá dar um push no objeto pro array do mês dele
    if (item.month == 'January') {
        January.push(item);
    } if (item.month == 'February') {
        February.push(item);
    } if (item.month == 'March') {
        March.push(item);
    } if (item.month == 'April') {
        April.push(item);
    } if (item.month == 'May') {
        May.push(item);
    } if (item.month == 'June') {
        June.push(item);
    } if (item.month == 'July') {
        July.push(item);
    } if (item.month == 'August') {
        August.push(item);
    } if (item.month == 'September') {
        September.push(item);
    } if (item.month == 'October') {
        October.push(item);
    } if (item.month == 'November') {
        November.push(item);
    } if (item.month == 'December') {
        December.push(item);
    }

});

// Criação de uma variável length que irá receber todos os tamanhos dos vetores criados
var length = 0;

// Pela lógica de verificar o impostor, o impostor estará na primeira posição depois da metade dos objetos lidos
// Aqui ocorre a concatenação da variável com o tamanho do array January
// Como são 850 objetos lidos, o impostor pela logica já falada estará na posição 426 e a partir disso verifico qual mês ele está
length += January.length
if (length >= 426) {
    console.log("O impostor está aqui");
} else {
    console.log("Continue");
}

length += February.length;
if (length >= 426) {
    console.log("O impostor está aqui");
} else {
    console.log("Continue");
}

length += March.length;
if (length >= 426) {
    console.log("O impostor está aqui");
} else {
    console.log("Continue");
}

length += April.length;
if (length >= 426) {
    console.log("O impostor está aqui");
} else {
    console.log("Continue");
}

length += May.length;
if (length >= 426) {
    console.log("O impostor está aqui");
} else {
    console.log("Continue");
}

// Como o ultimo mês lido foi Junho, logo o impostor está no mês de Junho
length += June.length
if (length >= 426) {
    console.log("O impostor está aqui");
} else {
    console.log("Continue");
}

// Criação de um array que contem todos os meses e assim todos serão ordenados por log
var total = [January, February, March, April, May, June, July, August, September, October, November, December];

// Criação de um map em que chamará a função countingSort
total.map((value) => {
    countingSort(value);
});

// Criação da função countingSort em que irá ordenar o total pelos logs dos meses
function countingSort(month, n = month.length) {
    let k = Math.max(...month.map(o => o.log));
    const freq = new Array(k + 1).fill(0);

    for (let i = 0; i < n; i++) {
        f = month[i];
        freq[f]++;
    }

    for (let i = 1; i <= k; i++) {
        freq[i] = freq[i] + freq[i - 1];
    }

    const resp = new Array(n).fill(0);

    for (let i = n - 1; i >= 0; i--) {

        f = month[i];
        resp[freq[f] - 1] = f;

        freq[f] = freq[f] - 1;
    }

    return month;
}

console.log(countingSort(total));

// Criação de uma variável Index, a qual conterá a posição do impostor
var index = 426;

// Chamada da função para mostrar o impostor
mostrarImpostor(total, index);

// Criação da função em que mostrará o Impostor
function mostrarImpostor(total, i) {
    console.log("Possivel(is) impostor(es): " + total[i]);
}

// Necessidade de arrumar algumas partes do código para ele funcionar
// Arquivo logNaveSbornia2.json contem 850 objetos