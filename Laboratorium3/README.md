### Laboratorium 3
Aplikacja z renderowaniem listy danych i obsługą postępu.

#### Spis treści:
- [opisanie kodu](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium3#opisanie-kodu)
- [działanie na telefonie](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium3#dzia%C5%82anie-na-telefonie)

### Opisanie kodu
#### App.js
W pliku tym wykorzystałam react-navigation do utworzenia 4 ekranów:
- [strona główna](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium3#opisanie-kodu)

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/1.png?raw=true)

- [sortowanie](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium3#opisanie-kodu)

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/2.png?raw=true)

- [lazy loading](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium3#opisanie-kodu)

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/3.png?raw=true)

- [step progress](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium3#opisanie-kodu)

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/4.png?raw=true)

#### Strona główna
Umieściłam tutaj 3 guziki umożliwiające przejście do wybranego ekranu: sortowanie, lazy loading, step progress.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/5.png?raw=true)

#### Sortowanie
Komponent klasowy odpowiadający za sortowanie i generacje 100 pseudolosowych liczb z przedziału (0,1000). W konstruktorze umieściłam pętle, która za pomocą Math.random generuje pseudolosowe liczby i umieszcza je w tablicy. Tablica ta zapisywana jest w stanie wraz z sortedUp (definiuje, czy tablica została posortowana w górę) i sortedDown (definiuje, czy tablica została posortowana w dół). Poniżej związałam metody z instancją komponentu.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/6.png?raw=true)

Utworzone metody:
- writeNumbers(numbers) - wypisuje wygenerowane liczby jedna pod drugą

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/7.png?raw=true)

- generate() - generuje nową tablicę, po wciśnięciu guzika Wygeneruj, podstawia ją do stanu wraz z sortedUp = 0 i sortedDown = 0

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/8.png?raw=true)

- sortDown() - sortuje tablicę liczb w dół, sprawdzane jest czy tablica nie jest już przypadkiem posortowana, jeśli tak to nic się nie dzieje, jeśli nie zmieniany jest stan, pod numbers podstawiana jest posortowana tablica, sortedDown zmienia wartość na 1. Sortowanie odbywa się za pomocą wbudowanej funkcji sort().

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/9.png?raw=true)

- sortUp() - działa tak samo jak powyższa funkcja, jedyną różnicą jest sortowanie w górę, nie w dół

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/10.png?raw=true)

W render() umieściłam 3 "guziki" (TouchableOpacity) umożliwiające wygenerowanie nowych liczb, posortowanie w góre lub w dół. Wywołuje tam też funkcję writeNumbers, by wygenerowane liczby wyświetlały się w aplikacji. 

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/11.png?raw=true)

#### Lazy loading
Za pomocą React.lazy() importowany dynamicznie zostaje inny komponent. W czasie jego ładowania na stronie wyświetla się napis "Ładowanie...", po załadowaniu wyświetlane zostaje 50000 pseudolosowych liter. 

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/12.png?raw=true)

Importowanym komponentem jest Generate.js, w którym w pętli for generowane są pseudolosowe litery, których zakres zdefiniowałam w zmiennej letters.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/13.png?raw=true)

#### Step progress
Wykorzystałam tutaj react-native-progress-steps. Umieściłam trzy elementy ProgressStep, czyli 3 ekrany/kroki. 

![3](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/14.png?raw=true)

Na pierwszym z nich umieściłam element ActivityIndicator w kolorze białym i rozmiarze large.

![3](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/15.png?raw=true)

Na drugim "ekranie" umieściłam element ten w kolorze ciemnoniebieskim i rozmiarze small.

![3](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/16.png?raw=true)

Na ostanim "ekranie" znajduje się ActivityIndicator w kolorze jasnoniebieskim i rozmiarze large, ale uzyłam transform by powiększyć ten element jeszcze bardziej (scale:3).

![3](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/17.png?raw=true)


### Działanie na telefonie
Po włączeniu aplikacji pokazuje nam się ekran z 3 guzikami:

![3](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/1.jpg?raw=true)

Wybierając Sortuj wyświetlane zostaje 100 pseudolosowych liczb:
 
![3](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/2.jpg?raw=true)

Po wciśnięciu Sortuj ↓ wyświetlone liczby sortują się od największej do najmniejszej:

![3](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/3.jpg?raw=true)

Analogicznie po wciśnięciu Sortuj ↑ liczby sortowane są od najmniejszej do największej:

![3](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/4.jpg?raw=true)

W każdym momencie można wcisnąć guzik Wygeneruj i na ekranie pojawi się zestaw nowych 100 pseudolosowych liczb:

![3](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/5.jpg?raw=true)

Gdy wybierzemy ekran Lazy loading ukazuje się napis "Ładowanie...":

![3](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/6.jpg?raw=true)

Po chwili napis ten znika, a pojawia się ciąg 50 tysięcy pseudolosowych liter:

![3](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/7.jpg?raw=true)

Jeśli wybierzemy ekran Step progress wyświetla nam się ekran podzielony na trzy kroki, na każdym z nich kręci się kółeczko (ActivityIndicator) w innym kolorze i rozmiarze. 

![3](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/8.jpg?raw=true)
![3](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/9.jpg?raw=true)
![3](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium3/screenshots/10.jpg?raw=true)

Przechodząc do kroku drugiego mamy opcję cofnięcia się do poprzedniego kroku lub przejścia do kolejnego. Na ostatnim kroku możemy cofnąć się do drugiego lub przejść do Strony głównej. 


