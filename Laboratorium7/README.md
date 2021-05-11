# Laboratorium 7
Wykorzystanie bazy danych w aplikacji mobilnej. Expo nie wspiera bazy Realm, więc skorzystałam z SQLite.

------------------------------------

W ramach zajęć utworzyłam prostą aplikację inspirowaną grą Animal Crossing. Przy pierwszym otwarciu tworzona jest baza danych. Aplikacja umożliwia nam:
- dodawanie nowych zwierząt (Villagers), które chcemy zobaczyć/posiadać w grze
- zmienianie statusu zwierzęcia z 'Owned' na 'Wanted' i na odwrót
- usuwanie zwierząt z listy w dowolnym momencie.

------------------------------------

## Spis treści
- [Opisanie kodu](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium7#opisanie-kodu)
    - [Tworzenie/otwieranie bazy danych](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium7#tworzenieotwieranie-bazy-danych)
    - [useForceUpdate](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium7#useforceupdate)
    - [Animals](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium7#animals)
    - [NewDataBase](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium7#newdatabase)
    - [Dodawanie Villagers](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium7#dodawanie-villagers)
    - [Wyświetlanie posiadanych Villagers](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium7#wy%C5%9Bwietlanie-posiadanych-villagers)
    - [Wyświetlanie chcianych Villagers](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium7#wy%C5%9Bwietlanie-chcianych-villagers)
- [Działanie aplikacji na telefonie](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/tree/main/Laboratorium7#dzia%C5%82anie-aplikacji-na-telefonie)

------------------------------------

## Opisanie kodu

### Tworzenie/otwieranie bazy danych

By móc korzystać z bazy musiałam zainstalować **expo-sqlite** i umieścić odpowiedni import w kodzie.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/1.png?raw=true)

Utworzyłam funkcję **openDB**, która przy pierwszym otwarciu aplikacji, tworzy nową bazę danych. Gdy otwieramy aplikację ponownie, funkcja ta otwiera istniejącą bazę.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/2.png?raw=true)

Następnie wywołuje funkcję **openDB** i podstawiam zwracaną przez nią bazę pod zmienną **db**.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/3.png?raw=true)

------------------------------------

### useForceUpdate

Utworzyłam funkcję **useForceUpdate**, która zmienia wartość **value**, wykorzystywanej przy zmianie danych w bazie. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/4.png?raw=true)

------------------------------------

### Animals

Zdefiniowałam funkcję **Animals**, w której z wykorzystaniem **hooka efektów**, pobierane są z bazy zwierzęta **select * from animals where seen = ?;**. W zależności od wartości **seen** ustawiany jest odpowiedni nagłówek: 
- 'Owned' Villagers:
- 'Wanted' Villagers:

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/5.png?raw=true)

Sprawdzane jest, czy pobrana tablica z bazy nie jest pusta, jeśli nie ma w niej żadnych zwierząt wyświetlany jest pusty widok jedynie z odpowiednim nagłówkiem.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/6.png?raw=true)

Jeśli mamy zapisane jakieś zwierzęta w bazie, są one wyświetlane z użyciem **map()**, a nad nimi znajduje się odpowiedni nagłówek.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/7.png?raw=true)

------------------------------------

### NewDataBase

W głównym komponencie **NewDataBase** wykorzystałam hook stanu. Pierwszy umożliwia nam zapisywanie tekstu z imieniem zwierzęcia, które chcemy dodać. Drugi wykorzystywany jest gdy chcemy zaktualizować dane w bazie. Pozostałe odpowiadają za wyświetlanie lub ukrywanie Modali. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/8.png?raw=true)

Wykorzystałam **hook efektów**, a w nim umieściłam kod, który tworzy tabelę animals w bazie, o ile jeszcze ona nie istnieje.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/9.png?raw=true)

------------------------------------

### Dodawanie Villagers

Utworzyłam metodę **add**, która na wejściu przyjmuje tekst. Na początku sprawdzane jest, czy tekst nie jest pusty. Jeśli jest zwracany zostaje **Alert** z informacją, że imię zwierzęcia nie może być puste. Jeśli podany tekst nie jest pusty, do bazy danych dodawane jest nowe zwierzątko o podanym imieniu i wartości seen = 0 (**an.executeSql("insert into animals (seen, value) values (0, ?)", [text]);**). 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/10.png?raw=true)

Na ekranie wyświetlane jest logo gry i guzik **New Villager**. Po jego wciśnięciu wyświetlany zostaje **Modal** a w nim znajduje się **TextInput**, do którego możemy wpisać imię zwierzęcia, jakie chcemy dodać. Po wciśnięciu **OK** na klawiaturze zwierzątko zostaje dodane. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/11.png?raw=true)

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/18.png?raw=true)

------------------------------------

### Wyświetlanie posiadanych Villagers

Umieściłam w aplikacji guzik **Show 'owned' Villagers**, po jego wciśnięciu wyświetla się inny **Modal** z listą posiadanych zwierzaków.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/12.png?raw=true)

Gdy wciśniemy na któreś ze zwierzaków, wyświetlany zostaje **Alert** z pytaniem **What do you want to do?** i trzema opcjami:
- **Cancel** - anulowanie akcji

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/13.png?raw=true)

- **Delete** - spowoduje usunięcie zwierzaka

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/14.png?raw=true)

- **Change to 'Wanted'** - zmienia status zwierzaka na 'wanted', co powoduje przeniesienie do innej listy.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/15.png?raw=true)

------------------------------------

### Wyświetlanie chcianych Villagers

Ostatni guzik **Show 'wanted' Villagers** wyświetla **Modal** z listą zwierzaków, które byśmy chcieli.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/16.png?raw=true)

Widok ten działa na takiej samej zasadzie co ten z 'Owned' Villagers. Po wciśnięciu zwierzaka wyświetlany jest **Alert** z trzema opcjami do wyboru.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/17.png?raw=true)

------------------------------------

## Działanie aplikacji na telefonie

Po włączeniu aplikacji **pierwszy raz** tworzona jest nowa baza, w której nie ma żadnych danych, więc aplikacja nie ma co wyświetlać prócz podstawowych widoków.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/all.png?raw=true)

By **dodać nowe zwierzątko**, wciskamy **New Villager** i wpisujemy imię. Po wciśnięciu **OK** na klawiaturze, **Modal** zamyka się. Gdy wejdziemy teraz w **Show 'wanted' Villagers** wyświetla się dodana przed chwilą Molly.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/add.png?raw=true)

Gdybyśmy nie wpisali żadnego imienia w **TextInput**, wyświetla się **Alert** z informacją, że imię nie może być puste.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/15.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/16.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/17.jpg?raw=true)

Gdy wciśniemy Molly wyświetla się **Alert** z opcjami do wyboru. Po wciśnięciu **Cancel**, **Alert** zamyka się.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/8.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/9.jpg?raw=true)

Gdy wciśniemy **Change to 'owned'**, Molly znika z listy i pojawia się na liście **'Owned' Villagers**.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/8.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/10.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/11.jpg?raw=true)

Teraz, gdy wciśniemy Molly, znajdującą się na liście **'Owned' Villagers**, wyświetla się nam **Alert** z tymi samymi opcjami co na poprzedniej liście. Wypróbujmy teraz działanie opcji **Delete**. Po jej wciśnięciu Molly znika i nie ma jej na żadnej liście.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/12.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/13.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/14.jpg?raw=true)