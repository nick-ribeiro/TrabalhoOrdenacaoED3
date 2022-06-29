const dados = [
    {
        "month": "July",
        "log": 269,
        "msg": "Try to reboot the AGP transmitter, maybe it will program the 1080p capacitor!",
        "user": "Carol.Hamill42"
    },
    {
        "month": "September",
        "log": 295,
        "msg": "The SQL pixel is down, connect the mobile bus so we can connect the XML program!",
        "user": "Morgan45"
    },
    {
        "month": "February",
        "log": 366,
        "msg": "connecting the interface won't do anything, we need to reboot the 1080p EXE bandwidth!",
        "user": "Dejuan_Crona90"
    },
    {
        "month": "March",
        "log": 14,
        "msg": "If we synthesize the microchip, we can get to the CSS driver through the bluetooth HDD interface!",
        "user": "Johanna.Treutel98"
    },
    {
        "month": "April",
        "log": 522,
        "msg": "We need to quantify the optical SMTP monitor!",
        "user": "Alverta.Herman"
    },
    {
        "month": "September",
        "log": 742,
        "msg": "Use the redundant GB matrix, then you can navigate the cross-platform program!",
        "user": "Reina10"
    },
    {
        "month": "August",
        "log": 372,
        "msg": "I'll input the back-end IB program, that should array the CSS alarm!",
        "user": "Vance71"
    },
    {
        "month": "October",
        "log": 77,
        "msg": "I'll quantify the optical SQL bus, that should circuit the CSS sensor!",
        "user": "Elmo71"
    },
    {
        "month": "December",
        "log": 613,
        "msg": "transmitting the card won't do anything, we need to transmit the online COM system!",
        "user": "Terry.Buckridge"
    },
    {
        "month": "December",
        "log": 754,
        "msg": "We need to program the optical ADP port!",
        "user": "Maurine.Block9"
    },
    {
        "month": "September",
        "log": 41,
        "msg": "Try to bypass the COM feed, maybe it will parse the solid state bandwidth!",
        "user": "Alivia_Osinski"
    },
    {
        "month": "January",
        "log": 738,
        "msg": "The SQL pixel is down, connect the mobile bus so we can connect the XML program!",
        "user": "Morgan45"
    },
    {
        "month": "March",
        "log": 626,
        "msg": "connecting the interface won't do anything, we need to reboot the 1080p EXE bandwidth!",
        "user": "Dejuan_Crona90"
    },
    {
        "month": "November",
        "log": 763,
        "msg": "If we synthesize the microchip, we can get to the CSS driver through the bluetooth HDD interface!",
        "user": "Johanna.Treutel98"
    },
    {
        "month": "July",
        "log": 536,
        "msg": "We need to quantify the optical SMTP monitor!",
        "user": "Alverta.Herman"
    },
    {
        "month": "March",
        "log": 251,
        "msg": "Use the redundant GB matrix, then you can navigate the cross-platform program!",
        "user": "Reina10"
    },
    {
        "month": "September",
        "log": 299,
        "msg": "I'll input the back-end IB program, that should array the CSS alarm!",
        "user": "Vance71"
    },
    {
        "month": "December",
        "log": 10,
        "msg": "I'll quantify the optical SQL bus, that should circuit the CSS sensor!",
        "user": "Elmo71"
    },
    {
        "month": "October",
        "log": 31,
        "msg": "transmitting the card won't do anything, we need to transmit the online COM system!",
        "user": "Terry.Buckridge"
    },
    {
        "month": "August",
        "log": 671,
        "msg": "We need to program the optical ADP port!",
        "user": "Maurine.Block9"
    },
    {
        "month": "November",
        "log": 491,
        "msg": "Try to bypass the COM feed, maybe it will parse the solid state bandwidth!",
        "user": "Alivia_Osinski"
    },
    {
        "month": "January",
        "log": 673,
        "msg": "The SQL pixel is down, connect the mobile bus so we can connect the XML program!",
        "user": "Morgan45"
    },
    {
        "month": "May",
        "log": 410,
        "msg": "connecting the interface won't do anything, we need to reboot the 1080p EXE bandwidth!",
        "user": "Dejuan_Crona90"
    },
    {
        "month": "January",
        "log": 562,
        "msg": "If we synthesize the microchip, we can get to the CSS driver through the bluetooth HDD interface!",
        "user": "Johanna.Treutel98"
    },
    {
        "month": "August",
        "log": 302,
        "msg": "We need to quantify the optical SMTP monitor!",
        "user": "Alverta.Herman"
    },
    {
        "month": "May",
        "log": 605,
        "msg": "Use the redundant GB matrix, then you can navigate the cross-platform program!",
        "user": "Reina10"
    },
    {
        "month": "October",
        "log": 670,
        "msg": "I'll input the back-end IB program, that should array the CSS alarm!",
        "user": "Vance71"
    },
    {
        "month": "December",
        "log": 769,
        "msg": "I'll quantify the optical SQL bus, that should circuit the CSS sensor!",
        "user": "Elmo71"
    },
    {
        "month": "October",
        "log": 104,
        "msg": "transmitting the card won't do anything, we need to transmit the online COM system!",
        "user": "Terry.Buckridge"
    },
    {
        "month": "January",
        "log": 517,
        "msg": "We need to program the optical ADP port!",
        "user": "Maurine.Block9"
    },
    {
        "month": "February",
        "log": 80,
        "msg": "Try to bypass the COM feed, maybe it will parse the solid state bandwidth!",
        "user": "Alivia_Osinski"
    }
];

const dadosJson = JSON.stringify(dados);

const objdados = JSON.parse(dadosJson);

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

objdados.map(function (item, index) {

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

var length = 0;
var meses = [];

length += January.length;

if (length >= 31) {
    console.log("Ordena aqui");
} else {
    console.log("Continue");
}

if (January.length != 0) {
    meses = meses.concat(January);
}

length += February.length;
if (length >= 31) {
    console.log("Ordena aqui");
} else {
    console.log("Continue");
}

if (February.length != 0) {
    meses = meses.concat(February);
}

length += March.length;
if (length >= 31) {
    console.log("Ordena aqui");
} else {
    console.log("Continue");
}

if (March.length != 0) {
    meses = meses.concat(March);
}

length += April.length;
if (length >= 31) {
    console.log("Ordena aqui");
} else {
    console.log("Continue");
}

if (April.length != 0) {
    meses = meses.concat(April);
}

length += May.length;
if (length >= 31) {
    console.log("Ordena aqui");
} else {
    console.log("Continue");
}

if (May.length != 0) {
    meses = meses.concat(May);
}

length += June.length;
if (length >= 31) {
    console.log("Ordena aqui");
} else {
    console.log("Continue");
}

if (June.length != 0) {
    meses = meses.concat(June);
}

length += July.length;
if (length >= 31) {
    console.log("Ordena aqui");
} else {
    console.log("Continue");
}

if (July.length != 0) {
    meses = meses.concat(July);
}

length += August.length;
if (length >= 31) {
    August = August.filter(e => e !== 'Vance71');
    August = August.filter(e => e !== 'Maurine.Block9');
    August = August.filter(e => e !== 'Alverta.Herman');

    const countingSort = (August, n = August.length) => {
        let k = Math.max(...August);
        let t;

        const freq = new Array(k + 1).fill(0);

        for (let i = 0; i < n; i++) {
            f = August[i];
            freq[f]++;
        }

        for (let i = 1; i <= k; i++) {
            freq[i] = freq[i] + freq[i - 1];
        }

        const resp = new Array(n).fill(0);

        for (let i = n - 1; i >= 0; i--) {

            f = August[i];
            resp[freq[f] - 1] = f;

            freq[f] = freq[f] - 1;
        }

        return resp;
    }
    August = countingSort(August);
    for (let i = 0; i < August.length; i++) {
        if (August[i] == 302) {
            August.splice(1, 0, 'Alverna.Herman');
        }
        if (August[i] == 372) {
            August.splice(3, 0, 'Vance71');
        }
        if (August[i] == 671) {
            August.splice(5, 0, 'Maurine.Block9');
        }
    }
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

var index = 31;
var index2 = 32;
mostrarImpostor(meses, index, index2);

function mostrarImpostor(meses, i, j) {
    console.log("Possivel(is) impostor(es): " + meses[i] + " .Log: " + meses[j]);
}

//! Caso com Resultado Errado!!