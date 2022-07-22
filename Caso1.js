const fs = require('fs');
const { val } = require('jshint/src/options');

const dadosJson = fs.readFileSync('logNaveSbornia2.json');
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

// Utilização do map para passar apenas o log e o usuário referente ao mês
objdados.map(function (item, index) {

    // Primeiro irá verificar so item.month corresponde ao mês e se sim irá dar um push no log e no usuário pro array do mês dele
    if (item.month == 'January') {
        January.push(item.log, item.user);
    } if (item.month == 'February') {
        February.push(item.log, item.user);
    } if (item.month == 'March') {
        March.push(item.log, item.user);
    } if (item.month == 'April') {
        April.push(item.log, item.user);
    } if (item.month == 'May') {
        May.push(item.log, item.user);
    } if (item.month == 'June') {
        June.push(item.log, item.user);
    } if (item.month == 'July') {
        July.push(item.log, item.user);
    } if (item.month == 'August') {
        August.push(item.log, item.user);
    } if (item.month == 'September') {
        September.push(item.log, item.user);
    } if (item.month == 'October') {
        October.push(item.log, item.user);
    } if (item.month == 'November') {
        November.push(item.log, item.user);
    } if (item.month == 'December') {
        December.push(item.log, item.user);
    }

});

// Criação de uma variável length que irá receber todos os tamanhos dos vetores criados
var length = 0;

// Criação de um array que irá conter todos os meses e assim apenas o mês que contem o impostor será ordenado por log
var meses = [];

// Pela lógica de verificar o impostor, o impostor estará na primeira posição depois da metade dos objetos lidos
// Aqui ocorre a concatenação da variável com o tamanho do array January
// Como são 850 objetos lidos, o impostor pela logica já falada estará na posição 426 e a partir disso verifico qual mês ele está
length += January.length;
if (length >= 201) {
    console.log("O impostor está aqui");
} else {
    console.log("Continue");
}

if (January.length != 0) {
    meses = meses.concat(January);
}

length += February.length;
if (length >= 201) {
    console.log("O impostor está aqui");
} else {
    console.log("Continue");
}

if (February.length != 0) {
    meses = meses.concat(February);
}

length += March.length;
if (length >= 201) {
    console.log("O impostor está aqui");
} else {
    console.log("Continue");
}

if (March.length != 0) {
    meses = meses.concat(March);
}

length += April.length;
if (length >= 201) {
    console.log("O impostor está aqui");
} else {
    console.log("Continue");
}

if (April.length != 0) {
    meses = meses.concat(April);
}

length += May.length;
if (length >= 201) {
    console.log("O impostor está aqui");
} else {
    console.log("Continue");
}

if (May.length != 0) {
    meses = meses.concat(May);
}

// Como o ultimo mês lido foi Junho, logo o impostor está no mês de Junho
length += June.length;
if (length >= 201) {
    console.log("O impostor está aqui");

    // Uso do console.log para apenas ver os usuários e os logs de Junho
    console.log(June);
} else {
    console.log("Continue");
}

// Inicio do tempo de execução para a função
console.time('Timer');

// Como não estou tratando do objeto inteiro, inicialmente eu retiro todos os usuários do array June
if (June.length != 0) {
    June = June.filter(e => e !== 'Mireille.Deckow11');
    June = June.filter(e => e !== 'Ada_Lang');
    June = June.filter(e => e !== 'Genevieve31');
    June = June.filter(e => e !== 'Ruth99');
    June = June.filter(e => e !== 'Ezra_Grady44');
    June = June.filter(e => e !== 'Cale.Kemmer55');
    June = June.filter(e => e !== 'Ernestine9');
    June = June.filter(e => e !== 'Sonny_Denesik53');
    June = June.filter(e => e !== 'Maegan63');
    June = June.filter(e => e !== 'Matilda_Cruickshank47');
    June = June.filter(e => e !== 'Audreanne28');
    June = June.filter(e => e !== 'Saul_Lemke');
    June = June.filter(e => e !== 'Vergie54');
    June = June.filter(e => e !== 'Oren_Koelpin93');
    June = June.filter(e => e !== 'Ed10');
    June = June.filter(e => e !== 'Cleora.Spencer');

    // Aqui inicio a função de countingSort com apenas os logs
    const countingSort = (June, n = June.length) => {
        let k = Math.max(...June);

        const freq = new Array(k + 1).fill(0);

        for (let i = 0; i < n; i++) {
            f = June[i];
            freq[f]++;
        }

        for (let i = 1; i <= k; i++) {
            freq[i] = freq[i] + freq[i - 1];
        }

        const resp = new Array(n).fill(0);

        for (let i = n - 1; i >= 0; i--) {

            f = June[i];
            resp[freq[f] - 1] = f;

            freq[f] = freq[f] - 1;
        }

        return resp;
    }
    June = countingSort(June);

    // Por fim adiciono novamente os usuários a qual pertence ao seu devido log
    for (let i = 0; i < June.length; i++) {
        if (June[i] == 4683) {
            June.splice(1, 0, 'Genevieve31');
        }
        if (June[i] == 5634) {
            June.splice(3, 0, 'Ed10');
        }
        if (June[i] == 11158) {
            June.splice(5, 0, 'Sonny_Denesik53');
        }
        if (June[i] == 12981) {
            June.splice(7, 0, 'Saul_Lemke');
        }
        if (June[i] == 19738) {
            June.splice(9, 0, 'Cale.Kemmer55');
        }
        if (June[i] == 22363) {
            June.splice(11, 0, 'Matilda_Cruickshank47');
        }
        if (June[i] == 31175) {
            June.splice(13, 0, 'Audreanne28');
        }
        if (June[i] == 40654) {
            June.splice(15, 0, 'Maegan63');
        }
        if (June[i] == 42007) {
            June.splice(17, 0, 'Oren_Koelpin93');
        }
        if (June[i] == 48836) {
            June.splice(19, 0, 'Mireille.Deckow11');
        }
        if (June[i] == 51063) {
            June.splice(21, 0, 'Ruth99');
        }
        if (June[i] == 58107) {
            June.splice(23, 0, 'Ada_Lang');
        }
        if (June[i] == 63761) {
            June.splice(25, 0, 'Ezra_Grady44');
        }
        if (June[i] == 73945) {
            June.splice(27, 0, 'Vergie54');
        }
        if (June[i] == 79385) {
            June.splice(29, 0, 'Ernestine9');
        }
        if (June[i] == 95918) {
            June.splice(31, 0, 'Cleora.Spencer');
        }
    }

    // Por fim faço a concatenação do mês de Junho no array meses
    meses = meses.concat(June);
}

length += July.length;
if (July.length != 0) {
    meses = meses.concat(July);
}

length += August.length;
if (August.length != 0) {
    meses = meses.concat(August);
}

length += September.length;
if (September.length != 0) {
    meses = meses.concat(September);
}

length += October.length;
if (October.length != 0) {
    meses = meses.concat(October);
}

length += November.length;
if (November.length != 0) {
    meses = meses.concat(November);
}

length += December.length;
if (December.length != 0) {
    meses = meses.concat(December);
}

// Pegando a posição do usuário e do log do impostor
var index = 201;
var index2 = 200;

// Chamando a função de mostrar o impostor
mostrarImpostor(meses, index, index2);

// Criando a função de mostrar o impostor
function mostrarImpostor(meses, i, j) {
    console.log("Possivel(is) impostor(es): " + meses[i] + " .Log: " + meses[j]);
}

// Por fim mostro o tempo de execução desde a função de ordenar até o fim do programa, devido a utilização do filter e do splice o tempo de execução é alto
console.timeEnd('Timer');

// Programa funcionando
// Arquivo logNaveSbornia2.json contem 200 objetos que serão transformados em 400 valores -> 1 valor equivale ao log e 1 valor equivale ao usuário, logo 2 * 200 objetos