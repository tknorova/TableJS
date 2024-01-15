let randomSlova = ["Jedna", "Dva", "Tři", "Čtyři", "Pět", "Šest", "Sedm", "Osm", "Devět", "Deset"];

function ZiskejRandomHodnotu() {
    return randomSlova[Math.floor(Math.random() * randomSlova.length)];
}


function PridatRadek() {
    let tabulka = document.getElementById("tabulka");
    let radek = tabulka.insertRow(-1);

    for (let i = 0; i < 3; i++) {
        let cell = radek.insertCell(i);
        cell.innerHTML = ZiskejRandomHodnotu();
    }
}

function SmazatRadek(){
    let tabulka = document.getElementById("tabulka");
    if (tabulka.rows.length > 1){
        tabulka.deleteRow(-1);
    }

}

function PrehoditTabulku() {
    let tabulka = document.getElementById("tabulka");
    let radky = tabulka.rows;

    for (let i = 0; i < Math.floor(radky.length / 2); i++) {
        let obsahPrvnihoRadku = radky[i].innerHTML;
        let obsahPoslednihoRadku = radky[radky.length - 1 - i].innerHTML;

        radky[i].innerHTML = obsahPoslednihoRadku;
        radky[radky.length - 1 - i].innerHTML = obsahPrvnihoRadku;
    }
}

