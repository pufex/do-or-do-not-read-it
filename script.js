'use strict'

var statements = [
    [
        "Ja chcę powiedzieć jedną rzecz: ",
        "Trzeba powiedzieć jasno: ",
        "Jak powiedział wybitny krakowianin Stanisław Lem: ",
        "Proszę mnie dobrze zrozumieć: ",
        "Ja chciałem państwu przypomnieć, że ",
        "Niech państwo nie mają złudzeń: ",
        "Powiedzmy sobie wyraźnie: ",
    ],
    [
        "przedstawiciele czerwonej hołoty ",
        "ci wszyscy (tfu!) geje ",
        "funkcjonariusze reżymowej telewizji ",
        "tak zwani ekolodzy ",
        "ci wszyscy (tfu!) demokraci ",
        "agenci bezpieki ",
        "feminazistki ",
    ],
    [
        "zupełnie bezkarnie ",
        "całkowicie bezczelnie ",
        "o poglądach na lewo od komunizmu ",
        "celowo i świadomie ",
        "z premedytacją ",
        "od czasów Okrągłego Stołu ",
        "w ramach postępu ",
    ],
    [
        "nawołują do podniesienia podatków, ",
        "próbują wyrzucić kierowców z miast, ",
        "próbują skłócić Polskę z Rosją, ",
        "głoszą brednię o globalnym ociepleniu, ",
        "zakazują posiadania broni, ",
        "nie dopuszczają prawicy do władzy, ",
        "uczą dzieci homoseksualizmu, ",
    ],
    [
        "bo dzięki temu mogą kraść ",
        "bo dostają za to pieniądze ",
        "bo tak się uczy w państwowej szkole ",
        "bo bez tego (tfu!) demokracja nie może istnieć ",
        "bo głupich jest więcej niż mądrych ",
        "bo chcą tworzyć raj na ziemi ",
        "bo chcą zniszczyć cywilizację białego człowieka ",
    ],
    [
        "przez kolejne kadencje.",
        "o czym się nie mówi.",
        "i właśnie dlatego Europa umiera.",
        "ale przyjdą muzułmanie i zrobią porządek.",
        "- tak samo zresztą jak za Adolfa Hitlera.",
        "- proszę zobaczyć, co się dzieje na Zachodzie, jeśli mi państwo nie wierzą.",
        "co lat temu sto nikomu nie przyszłoby nawet do głowy. ",
    ],
];

alert("Program generuje dowolną wypowiedź Janusza Korwin-Mikke.");

do{
    var statement = "";
    for(var m = 0; m < statements.length; m++){
        var num = Math.floor(Math.random()*statements[m].length);
        statement = statement + statements[m][num];
    };
    alert(`Wygenerowano: ${statement}`);
}while(confirm("Czy chcesz kontynuować i wygenerować nową wypowiedź?") === true);