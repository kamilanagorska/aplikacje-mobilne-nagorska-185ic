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
Komponent funkcyjny. Wykorzystałam w nim komponent Swipeable z 'react-native-swipeable'. Zdefiniowałam dwie zmienne notHere i change, które będą wyświetlane, gdy przesuniemy Swipeable w lewo. Następnie użyłam hooka stanu by móc zmieniać wartości zmiennych symbol i symbol2. Poniżej zdefiniowałam funkcje swipe i swiped2, które zmieniają wartości wymienionych przed chwilą zmiennych. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/24.png?raw=true)

Następnie utworzyłam rightButtons, rightButtonsv2 i rightButtons3 przechowuje w nich to, co chcę wyświetlać, gdy przesuniemy Swipeable w prawo. Są to obrazki kwiatów.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/25.png?raw=true)

W return() umieściłam 3 komponenty Swipeable. Pierwszy z nich umożliwia nam przesuwanie w lewo i w prawo. Gdy przesuniemy w lewo wyświetlany jest napis "Odznaczono" (leftContent={change}) i zmieniany jest symbol przy nazwie kwiata na krzyżyk (onLeftActionRelease={() => swiped2('×')}). Gdy przesuniemy w prawo wyświetlane są zdjęcia słoneczników (rightButtons={rightButtons}) i symbol zmieniany jest na ptaszka (onRightActionRelease={() => swiped2('✓')}). Dodatkowo, by symbol ustawić na krzyżyk wystarczy lekko przesunąć w lewo, nie trzeba przesuwać do końca, aż wyświeli się napis (leftActionActivationDistance={20}). 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/26.png?raw=true)

Drugi element Swipeable też umożliwia nam przesuwanie w prawo i lewo. Podobnie jak poprzednio, gdy przesuniemy w prawo wyświetlane są zdjęcia kwiatów. Gdy przesyniemy w lewo ukazuje nam się napis "Nie tutaj!".

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/27.png?raw=true)


Trzeci Swipeable nie pozwala nam na przesunięcie go w lewo. Możemy przesuwać tylko w prawo. Po przesunięciu wyświetlane są zdjęcia kwiatów, a symbol przy nazwie kwiata zmieniany jest na krzyżyk (onRightActionRelease={swiped}). Działa to tylko za pierwszym przesunięciem. Z każdym kolejnym nic się nie zmienia.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/28.png?raw=true)

#### Pressable
Komponent funkcyjny. Wykorzystałam w nim komponent Pressable. Użyłam hook stanu by móc zmieniać wartość wyświetlanego powiadomienia. Poniżej utworzyłam metodę pressed, do której na wejście przyjmowane jest powiadomienie i za pomocą setNotification zmieniana jest wartość zmiennej notification. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/29.png?raw=true)

W return() umieściłam tekst, a pod nim element Pressable. Gdy go wciśniemy (onPressIn) wyświetlane jest powiadomienie "Wciskasz guzik", gdy guzik puścimy (onPressOut) wyświetlane jest "Puszczono guzik". Jeśli przytrzymamy guzik trochę dłużej (500ms i więcej) (onLongPress) to wyświetlane jest "Wciskasz guzik przez ponad 500ms". 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium5/screenshots/30.png?raw=true)

### Działanie na telefonie