### Laboratorium 4
Aplikacja obsługująca dane wprowadzane przez użytkownika + wykorzystanie modali.

#### Spis treści:
- [opisanie kodu](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium4#opisanie-kodu)
- [działanie na telefonie](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium4#dzia%C5%82anie-na-telefonie)

### Opisanie kodu
#### App.js
W pliku tym wykorzystałam react-navigation do utworzenia 4 ekranów:
- [strona główna](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium4#strona-g%C5%82%C3%B3wna)

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/1.png?raw=true)

- [TextInput](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium4#textinput)

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/2.png?raw=true)

- [Select](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium4#select)

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/3.png?raw=true)

- [Switch](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium4#switch)

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/4.png?raw=true)

- [Data i czas](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium4#data-i-czas)

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/5.png?raw=true)

- [ToastAndroind](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium4#toastandroid)

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/6.png?raw=true)

#### Strona główna
Umieściłam tutaj 5 guzików, każdy z nich umożliwia przejście do innego ekranu: TextInput, Select, Switch, Data i czas, ToastAndroid.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/7.png?raw=true)


#### TextInput
Komponent funkcyjny. Umieściłam w nim 6 elementów TextInput. Dla 5 z nich użyłam "State Hook", by móc przechowywać, a następnie wyświetlać tekst wprowadzony przez użytkownika.  

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/8.png?raw=true)

Pierwszy TextInput ma ograniczoną maksymalną długość do 40 znaków (maxLength=40)

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/9.png?raw=true)

Drugi ma włączoną opcję automatycznej zmiany wszystkich liter na duże (autoCapitalize="characters")

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/10.png?raw=true)

Dla trzeciego ustawiłam typ klawiatury jako "email-adress" (keyboardType="email-adress"), czyli gdy chcemy wprowadzić jakiś tekst na klawiaturze wyświetla nam się @ i klawisz .com, co ułatwia wpisywanie adresu email.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/11.png?raw=true)

Czwarty TextInput ma możliwość tworzenia linii (multiline={true}), dodatkowo ustawiłam 2 linijki jako widoczne, rozmiar TextInputa nie zmienia się po wpisaniu 2 linii, jak dodamy kolejne dopiero wtedy zmienia się jego rozmiar (numbersOfLines={2}).

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/12.png?raw=true)

W piątym nie da się wprowadzić żadnej wartości (editable={false}).

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/13.png?raw=true)

Dla ostatniego TextInputa ustawiłam returnKeyType na "send", czyli zamiast OK do zatwierdzenia wpisanego tekstu wyświetla nam się "Wyślij".

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/14.png?raw=true)

#### Select
Komponent klasowy. Wykorzystałam z nim 3 elementy Picker. W konstruktorze zdefiniowałam stan, a w nim dwie wartości: value = "Opcja jeden" i countries = []. Pierwsza z nich pozwala mi przechowywać wybraną opcję przez użytkownika. "Opcja jeden" jest domyślnie wybraną opcją. Countries służy do przechowywania pobranych danych dla jednego z elementów Picker. 

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/15.png?raw=true)

Użyłam componentDidMount(), jest to metoda, która wykonywana jest bezpośrednio po zamontowaniu komponentu. Umieściłam w niej fetch'a za pomocą którego pobieram dane dotyczące [państw](https://restcountries.eu/rest/v2/all). Zapisuje je pod zmienną countries.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/16.png?raw=true)

Stworzyłam metodę showOptions(options), która zwraca tyle elementów Picker.Item ile elementów w countries.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/17.png?raw=true)

Mój pierwszy Picker ma dwie opcje do wyboru, domyślnie wybraną jest Opcja jeden, dodatkowo wybrana opcja wyświetla się pod spodem. 

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/18.png?raw=true)

Drugi Picker ma zablokowaną opcję wyboru (enabled={false}).

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/19.png?raw=true)

Opcje ostatniego Pickera to pobrane asynchronicznie nazwy państw.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/20.png?raw=true)

#### Switch
Komponent funkcyjnym. Użyłam hooka stanu, by przechowywać informację o przesunięciu Switcha. Utworzyłam też metodę toggleSwitch która zmienia wartość zmiennej switchedOn.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/21.png?raw=true)

W return() umieściłam Switch, gdy przesuniemy go wyświetla się Modal (visible={switchedOn}). 

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/22.png?raw=true)

W Modalu pokazuje nam się pseudolosowa liczba, za każdym razem inna. Umieściłam w nim też guzik (TouchableOpacity), po którego wciśnięciu Modal znika.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/23.png?raw=true)

#### Data i czas
Do pobierania daty i czasu użyłam DateTimePicker z @react-native-community/datetimepicker. Niestety tryb "datetime" jest niedostępny na Androidzie, więc musiałam użyć dwóch osobnych DateTimePicker. Jeden do pobierania daty, drugi do pobierania czasu. 

Najpierw za pomocą hooka stanu zdefiniowałam to, co będzie mi potrzebne do zapisywania daty, czasu, zmiany wyświetlanego Pickera i zmiany jego trybu.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/24.png?raw=true)

Stworzyłam metodę, która w zależności od aktualnego trybu DateTimePickera zmienia wartość showD lub showT na true.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/25.png?raw=true)

Stworzyłam też metody showDate i showTime które zmieiają tryb DateTimePickera.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/26.png?raw=true)

showTerm pobiera ze zmiennej date dzień, miesiąc i rok, a ze zmiennej time godzinę i minuty, a następnie wyświetla Alert z pobranymi elementami.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/27.png?raw=true)

onChangeDate zapisuje wybraną datę przez użytkownika i zmienia wartość showD na false. onChangeTime robi to samo ale z czasem i zmienna showT.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/28.png?raw=true)


W return() umieściłam 3 guziki, pierwszy wyświetla DateTimePicker z wyborem daty, drugi z wyborem godziny, a ostatni powoduje wyświetlenie Alert z wybranych terminem. Znajdują się tu też dwa DateTimePickery wyświetlane w zależności od zmiennych showD i showT.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/29.png?raw=true)

#### ToastAndroid
Ekran z aktywnym modalem i pasywnym powiadomieniem z wykorzystaniem ToastAndroid. Za pomoca hooka stanu zdefiniowałam to, co będzie mi potrzebne do przechowywania i zmieniania czasu trwania obietnicy i włączania/wyłączania Modala. 

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/30.png?raw=true)

Utworzyłam metodę makeNewPromise, w której pod zmienną timeNew podstawiam pseudolosową liczbę. Tworzę obietnicę, która po czasie timeNew (jest to czas w milisekundach) zostaje rozwiązana i wywoływana jest metoda showToast(), czyli wyświetlane jest nasze pasywne powiadomienie.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/31.png?raw=true)

W return() umieściłam guzik, po którego wciśnięciu wywoływana jest makeNewPromise() i toggleSwitch(), dodatkowo Modal, który zostaje wyświetlony znika, jeśli obietnica zostanie rozwiązana.

![2](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium4/screenshots/32.png?raw=true)


### Działanie na telefonie