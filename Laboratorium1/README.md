### Laboratorium 1
Prosty kalkulator stworzony za pomocą React Native z wykorzystaniem Expo.

Spis treści:
- opisanie kodu
- działanie na telefonie

#### Opisanie kodu
Zdefiniowałam w stanie dwa elementy: toCalculate i result. W pierwszym z nich przechowywane będzie działanie, jakie wpisze użytkownik, a w drugim wynik. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/1.png?raw=true)

Następnie utworzyłam 3 metody:
- letsCalculate(text) - wykorzystuje funkcję eval(), do której przekazywane jest działanie w postaci stringa, które następnie jest wykonywane i zwracany jest wynik

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/2.png?raw=true)

- checkIfOk() - odpowiada za sprawdzenie, czy wpisane przez użytkownika działanie nie kończy się znakiem, którejś z dostepnym operacji ('+', '-', '*', '/', '.').wykorzystuję tutaj metodę slice() z indeksem -1, czyli pobierany jest ostatni element toCalculate

![3](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/3.png?raw=true)

- onPressed(nr) - wykonywane, gdy wciśniemy "guzik" w kalkulatorze, sprawdzane jest, czy wciśnięty klawisz nie jest C, jeśli tak to czyszczony jest stan, a dokładniej podstawiamy do niego puste stringi, jeśli wciśnięty klawisz był symbolem usuwania, to następuje rozdzielenie stringa z działaniem na poszczególne symbole (tworzona jest tablica symboli), usuwany zostaje ostatni symbol za pomocą pop, a następnie tablica jest łączona i zapisywana w stanie, jeśli wciśnięty klawisz to =, wykonywane jest letCalculate(), w innym przypadku zmieniamy stan i pod toCalculate podstawiamy obecny stan + wybrany symbol przez użytkownika.

![4](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/4.png?raw=true)

W render() najpierw zdefiniowałam tablicę dwuwymiarową z cyframi i dwoma znakami: kropka i równa się. Chcę utworzyć 4 wiersze "guzików" (zamiast Button użyłam TouchableOpacity) zapisane w 3 kolumnach, dlatego utoworzyłam 2 pętle for, jedna znajduje się w drugiej. Pierwsza odpowiada za wiersze, druga za kolumny. Zdefiniowałam puste tablice rows i row, do których z każdą kolejną iteracją odpowiedniej pętli dodawany jest nowy element za pomocą push().

![5](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/5.png?raw=true)

Na podobnej zasadzie stworzyłam kolumnę z guzikami operacji. Najpierw utworzyłam tablicę z symbolami. Następnie w pętli for z każdą kolejną iteracją do początkowo pustej tablicy opers dodawany jest nowy guzik przedstawiający inną operację.

![6](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/6.png?raw=true)

W return() umieściłam kilka komponentów View, które umożliwiły mi podzielenie aplikacji na mniejsze sektory, którymi łatwiej sterować. Mam osobny komponent dla obliczeń, wyniku, guzików, a w nim jeden dla cyfr, a drugi dla operacji. 

![7](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/7.png?raw=true)

Na końcu zdefiniowałam StyleSheet, w którym umieściłam style dla wybranych elementów.

![8](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/8.png?raw=true)

![9](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/9.png?raw=true)


#### Działanie na telefonie
Tak prezentuje się gotowa aplikacja:

![10](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/10.jpg?raw=true)

Wykonanie prostego działania: 

![11](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/11.jpg?raw=true)

Jak widać obliczenia pojawiają się na górze, a na dole wynik. Trochę trudniejsze działanie:

![12](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/12.jpg?raw=true)

Gdy wciśniemy symbol ⌫ usunięty zostaje ostatni wpisany znak, czyli 2:

![13](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/13.jpg?raw=true)

Natomiast, gdy wciśniemy C usunięte zostaje wszystko:

![14](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/14.jpg?raw=true)

Działanie z wykorzystaniem kropki:

![15](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/15.jpg?raw=true)

Gdy użytkownik wciśnie znak równia się, a ostatnim elementem wpisanym jest np. +, to nic się nie dzieje, nie jest zwracany błąd, walidacja za pomocą metody checkIfOk() działa.

![16](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium1/screenshots/16.jpg?raw=true)

