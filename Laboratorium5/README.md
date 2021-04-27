### Laboratorium 5
Aplikacja obsługująca gesty użytkownika: klikanie, przesuwanie itp.

#### Spis treści:
- [opisanie kodu](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium5#opisanie-kodu)
- [działanie na telefonie](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium5#dzia%C5%82anie-na-telefonie)

### Opisanie kodu
#### App.js
Wykorzystałam react-navigation do utworzenia 6 ekranów:
- [Strona główna](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium5#strona-g%C5%82%C3%B3wna)

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/1.png?raw=true)

- [ScrollView 1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium5#scrollview-1)

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/2.png?raw=true)

- [ScrollView 2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium5#scrollview-2)

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/3.png?raw=true)

- [Touchable](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium5#touchable)

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/4.png?raw=true)

- [Swipeable](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium5#swipeable)

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/5.png?raw=true)

- [Pressable](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium5#pressable)

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/6.png?raw=true)

#### Strona główna
Umieściłam tutaj 5 elementów TouchableOpacity, każdy z nich umożliwia przejście do innego ekranu.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/7.png?raw=true)

#### ScrollView 1
Komponent funkcyjny. Łącznie umieściłam w nim 3 komponenty ScrollView. Zdefiniowałam zmienną animals, którą później będę wyświetlać.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/8.png?raw=true)

W return() poniżej tekstu z informacją, co umieściłam na ekranie znajduje się pierwszy ScrollView z opcją persistentScrollbar={true}, która sprawia, że Scrollbar jest zawsze widoczny.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/9.png?raw=true)

W tym ScrollView wykorzystałam Flexboxa do ułożenia różnych elementów. Jego zawartość podzieliłam na trzy główne komponenty View. W pierwszym wyświetlam jedynie zdjęcie.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/10.png?raw=true)

Drugi podzieliłam dwoma elementami View, w jednym znajduje się kolejny ScrollView też z zawsze widocznym Scrollbar'em, a w drugim zdjęcie.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/11.png?raw=true)

W ostanim View umieściłam tekst, a pod nim trzeci ScrollView ze zdjęciami.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/12.png?raw=true)

#### ScrollView 2
Komponent funkcyjny. Tutaj też łącznie umieściłam 3 komponenty ScrollView. Na górze umieściłam tekst z wyjaśnieniem co znajduje się na ekranie, a poniżej ScrollView, który podzieliłam,
podobnie jak ostatnio, na 3 główne komponenty View. ScrollView, jak każdy inny, ma widoczny Scrollbar zawsze, a nie tylko przy przesuwaniu. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/13.png?raw=true)

W pierwszym elemencie View umieściłam tekst i obrazek.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/14.png?raw=true)

W kolejnym umieściłam ScrollView z opcją horizontal={true}, oznacza to, że przesuwamy go w poziomie a nie pionie, jak do tej pory. Znajdują się w nim zdjęcia różnych kwiatów.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/15.png?raw=true)

W ostatnim komponencie View umieściłam tekst, a pod nim ScrollView z elementami View, w każdym z nich znajduje sie tekst.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/16.png?raw=true)

#### Touchable
Komponent klasowy. W konstruktorze zdefiniowałam stan, a w nim zmienne:
- count: 0 - do liczenia ilości kliknięć
- showT: false - do wyświetlania lub chowania napisu po kliknięciu
- search: '' - do przechowywania frazy, jaką użytkownik chce wyszukać w przeglądarce Google
- showBrowser: false - do wyświetlania lub zamykania przeglądarki.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/17.png?raw=true)

Utworzyłam metodę countClicking, która zwiększa wartość count ze stanu o jeden. Utworzyłam też metodę clicked, która w zależności od wartości zmiennej showT zmienia jej wartość na przeciwną. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/18.png?raw=true)

Ostatnią utworzoną przeze mnie metodą jest showBrows, która wyświetla Modal, a w nim Text, który po naciśnięciu powoduje zamknięcie Modala. Poniżej znajduje się WebView, który umożliwia wyszukiwanie w przeglądarce. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/19.png?raw=true)

W render() umieściłam wywołanie metody showBrows pod warunkiem, że showBrowser będzie równe true. Poniżej umieściłam tekst, a jeszcze niżej ScrollView.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/20.png?raw=true)

W ScrollView umieściłam TouchableOpacity. Gdy go wciśniemy wywoływana jest metoda countClicking, a poniżej wyświetlany jest tekst z ilością wykonanych kliknięć.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/21.png?raw=true)

Poniżej znajduje się TouchableHighlight, który po wciśnięciu powoduje wywołanie funkcji clicked, która zmienia wartość zmiennej showT i w zależności od jej wartości wyświetlany jest lub chowany napis "Miłego dnia!".

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/22.png?raw=true)

Umieściłam też TextInput, w którym można wpisać frazę, jaką chcemy wyszukać w przeglądarce. Po wciśnięciu OK (onSubmitEditing()) zmieniana jest wartość search i showBrowser, co powoduje wywołanie metody showBrows.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/23.png?raw=true)

#### Swipeable
#### Pressable
### Działanie na telefonie