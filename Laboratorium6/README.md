# Laboratorium 6
Aplikacja wyświetlająca obrazy + detekcja łączności z siecią.

## Spis treści
- [Nawigacja](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium6#nawigacja)
- [Ładowanie obrazków](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium6#%C5%82adowanie-obrazk%C3%B3w)
- [Zmiana rozmiaru obrazka za pomocą Slidera](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium6#zmiana-rozmiaru-obrazka-za-pomoc%C4%85-slidera)
- [Leniwe ładowanie obrazka i ikony](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium6#leniwe-%C5%82adowanie-obrazka-i-ikony)
- [Detekcja łączności z siecią](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium6#detekcja-%C5%82%C4%85czno%C5%9Bci-z-sieci%C4%85)
- [Zapis danych za pomocą AsyncStorage](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium6#zapis-danych-za-pomoc%C4%85-asyncstorage)
- [Synchronizacja danych w zależności od połączenia z internetem](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium6#synchronizacja-danych-w-zale%C5%BCno%C5%9Bci-od-po%C5%82%C4%85czenia-z-internetem)

------------------------------------

## Nawigacja
Utworzyłam menu, które umożliwia przejście do wybranego ekranu. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/1.png?raw=true)

-----------------------------------

## Ładowanie obrazków
Na pierwszym ekranie umieściłam dwa obrazki. Pierwszy z nich jest ładowany z wykorzystaniem **'uri'**.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/2.png?raw=true)

A drugi za pomocą **require()**, który wymaga umieszczenie pliku z obrazkiem gdzieś w naszym projekcie. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/3.png?raw=true)

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/2.jpg?raw=true)

--------------------------------------

## Zmiana rozmiaru obrazka za pomocą Slidera
Zainstalowałam **Slider** (**@react-native-community/slider**) i go zaimportowałam. Wykorzystałam **hook stanu**, by móc zmieniać wartość skali. Utworzyłam też funkcje **changeSize**, która wykorzystuje metodę zdefiniowaną w hooku. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/4.png?raw=true)

Poniżej umieściłam **Slider**. Jego minimalną wartością jest 0.1, a maksymalną 1. Domyślnie ustawioną wartością jest 1. Gdy zaczniemy go przesuwać wywoływane jest **changeSize**. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/5.png?raw=true)

By zmieniać rozmiar zdjęcia wykorzystałam **transform** ze skalą równą zmiennej zdefiniowanej w hooku stanu.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/6.png?raw=true)

Gdy przesuwamy Slider w lewo obrazek zmniejsza się. Gdy przesuniemy w prawo, zwiększa on swój rozmiar.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/3.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/3a.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/3b.jpg?raw=true)

-----------------------------------

## Leniwe ładowanie obrazka i ikony
Do zrealizowania leniwego ładowania wykorzystałam komponent **Image z 'react-native-elements'**. Ma on opcję **PlaceholderContent**, która sprawia, że gdy obrazek ładuje się można wyświetlić np. animację ładowania. Ja wykorzystałam do tego komponent **ActivityIndicator**. Dodatkowo, by łatwiej uchwycić na screenie działanie aplikacji, zdefiniowałam opcję **transition**, która przyciemnia obrazek na czas ładowania, dodatkowo ustawiłam czas tego przyciemniania na 1200 (**transitionDuration**)

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/7.png?raw=true)

Poniżej wyświetliłam osiem rzędów w każdym po dziewięć ikon. Wykorzystałam do tego trzy grupy ikon: **AntDesign**, **Entypo**, **Feather**. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/8.png?raw=true)

Każde wyświetlenie ikony zapisuje się w ten sam sposób, dlatego pokażę tylko jeden z rzędów jakie utworzyłam.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/9.png?raw=true)

Jak włączymy ekran obrazek zaczyna się ładować i możemy zauważyć kręcący się ActivityIndicator. Po załadowaniu widać obrazek, a poniżej znajdują się ikony.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/4a.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/4.jpg?raw=true)

-----------------------------------

## Detekcja łączności z siecią
Do pobierania informacji dotyczących sieci wykorzystałam **NetInfo**. Na początku w stanie zdefiniowałam kilka zmiennych: **isConnected**, w której zapisywane jest, czy jesteśmy połączeni z siecią, **type** - typ naszego połączenia, **frequency** - częstotliwość połączenia, **ipAddress** - nasz adres IP, **strength** - moc, siła połączenia i **isWifiEnabled** - czy Wifi jest dostępne. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/10.png?raw=true)

W **componentDidMount** umieściłam **fetcha**, który umożliwia pobranie informacji dotyczących połączenia z wykorzystaniem NetInfo.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/11.png?raw=true)

W sekcji **render()** umieściłam napis **Połączenie z internetem** a poniżej ikonkę, która zmienia się w zależności, czy mamy połączenie z siecią lub nie. Wykorzystuje tutaj zmienną ze stanu **isConnected**

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/12.png?raw=true)

Następnie wyświetlam wszystkie pobrane wcześniej informacje dotyczące połączenia.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/13.png?raw=true)

Po lewej umieściłam to, co wyświetlane jest, gdy mamy dostęp do internetu, a po prawej to, co zostaje wyświetlone, gdy nie mamy dostępu do internetu.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/5.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/5a.jpg?raw=true)

-----------------------------------

## Zapis danych za pomocą AsyncStorage
Zainstalowałam i zaimportowałam **AsyncStorage** z **@react-native-async-storage/async-storage**. W stanie umieściłam jedną zmienną **key**, w której będę przechowywać wartość klucza zapisywanych danych. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/14.png?raw=true)

Utworzyłam funkcję **save**, która umożliwia zapisywanie danych za pomocą AsyncStorage. Użytkownik podaje wartość do zapisania, a klucz generowany jest sam, zaczynając od 0, każdy kolejny klucz jest zwiększany o 1, pamiętając, że klucz jest stringiem.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/15.png?raw=true)

Kolejna utworzona przeze mnie metoda to **read**, która odczytuje wartość o podanym kluczu. Jeśli wartość dla podanego klucza jest pusta to zwraca informację, że nie ma żadnych danych z takim kluczem.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/16.png?raw=true)

Ostatnia metoda **clear** usuwa wartość o podanym kluczu. Sprawdzane jest najpierw czy pod podanym kluczem znajduje się jakaś dana, jeśli nie to dostajemy komunikat, że nie ma danej o takim kluczu.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/17.png?raw=true)

Poniżej w sekcji **render()** umieściłam trzy komponenty **TextInput**. Po zatwierdzeniu wpisania tekstu (**onSubmitEditing**) wywoływane są odpowiednie funkcje.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/18.png?raw=true)

### Zapisywanie danych
Wprowadzamy dane. Po wciśnięciu guzika **OK** na klawiaturze, wyświetla się komunikat o powodzeniu zapisywania danych. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/6a.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/6b.jpg?raw=true)

### Odczytywanie danych
By odczytać dane, wpisujemy wartość klucza i wciskamy **OK** na klawiaturze. Wyświetlany zostaje komunikat z tekstem zapisanym pod podanym kluczem.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/6c.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/6d.jpg?raw=true)

### Usuwanie danych
Do usuwania danych musimy podać klucz. Po wciśnięciu **OK** na klawiaturze, wyświetla się komunikat, że usuwanie powiodło się.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/6e.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/6f.jpg?raw=true)

Dla sprawdzenia, gdy teraz będziemy chcieli odczytać wartość z kluczem 0, wyświetlony zostanie komunikat, że nie ma takiego klucza.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/6c.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/6g.jpg?raw=true)

-----------------------------------

## Synchronizacja danych w zależności od połączenia z internetem
Wykorzystałam tutaj **Slider** i **NetInfo**. W stanie zdefiniowałam trzy zmienne **localValue** - przechowuje dane lokalne, **isConnected** - informacja o połączeniu z siecią, **onlineValue** - dane synchronizowane po połączeniu z internetem.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/19.png?raw=true)

Utworzyłam funkcję **checkConnection**, która sprawdza za pomocą **NetInfo** czy mamy połączenie z internetem. Jeśli tak i wartość zapisana lokalnie różni się od tej 'online' to następuje synchronizacja danych.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/20.png?raw=true)

Drugą utworzoną funkcją przeze mnie jest **saveData**. Przyjmuje ona na wejściu wartość, która w zależności czy mamy połączenie z internetem zapisywana jest pod zmiennymi **localValue** i **onlineValue** lub tylko pod **localValue**.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/21.png?raw=true)

W **componentDidMount** użyłam **setInterval** do wywoływania metody **checkConnection** co sekunde, w celu sprawdzania połączenia i synchronizacji danych. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/22.png?raw=true)

W **render()** umieściłam napis 'Połączenie z internetem' i odpowiednią ikonkę w zależności od stanu połączenia z siecią.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/23.png?raw=true)

Poniżej umieściłam **Slider**, gdy przesuwamy go wywoływana jest metoda **saveData**. Domyślnie ustawioną wartością dla Slidera jest 1.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/24.png?raw=true)

Na dole wyświetlam wartości **localValue** i **onlineValue**.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/25.png?raw=true)

Po włączeniu tego ekranu wyświetla nam się informacja, że mamy połączenie z internetem. Po przesunięciu Slidera wartość lokalna i online zmieniają się jednocześnie.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/7.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/7a.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/7b.jpg?raw=true)

Po wyłączeniu internetu pokazuje się informacja, że nie mamy połączenia. Gdy przesuwamy Slider zmienia się jedynie wartość lokalna.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/7c.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/7d.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/7e.jpg?raw=true)

Gdy teraz włączymy internet dane automatycznie się synchronizują. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/7f.jpg?raw=true)