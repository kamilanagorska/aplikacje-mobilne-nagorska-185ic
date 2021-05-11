# Laboratorium 7
Wykorzystanie bazy danych w aplikacji mobilnej. Expo nie wspiera bazy Realm, więc skorzystałam z SQLite.

------------------------------------

W ramach zajęć utworzyłam prostą aplikację inspirowaną grą Animal Crossing. Przy pierwszym otwarciu tworzona jest baza danych. Aplikacja umożliwia nam:
- dodawanie nowych zwierząt (Villagers), które chcemy zobaczyć/posiadać w grze
- zmienianie statusu zwierzęcia z 'Owned' na 'Wanted' i na odwrót
- usuwanie zwierząt z listy w dowolnym momencie.

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

Utworzyłam funkcję **useForceUpdate**, która zmienia wartość **value**, wykorzystywanej przy zmianie danych w bazie. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/4.png?raw=true)

------------------------------------

Zdefiniowałam funkcję **Animals**, w której z wykorzystaniem **hooka efektów**, pobierane są z bazy zwierzęta **select * from animals where seen = ?;**. W zależności od wartości **seen** ustawiany jest odpowiedni nagłówek: 
- 'Owned' Villagers:
- 'Wanted' Villagers:

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/5.png?raw=true)

Sprawdzane jest, czy pobrana tablica z bazy nie jest pusta, jeśli nie ma w niej żadnych zwierząt wyświetlany jest pusty widok jedynie z odpowiednim nagłówkiem.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/6.png?raw=true)

Jeśli mamy zapisane jakieś zwierzęta w bazie, są one wyświetlane z użyciem **map()**, a nad nimi znajduje się odpowiedni nagłówek.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/7.png?raw=true)

------------------------------------

W głównym komponencie **NewDataBase** wykorzystałam hook stanu. Pierwszy umożliwia nam zapisywanie tekstu z imieniem zwierzęcia, które chcemy dodać. Drugi wykorzystywany jest gdy chcemy zaktualizować dane w bazie. Pozostałe odpowiadają za wyświetlanie lub ukrywanie Modali. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/8.png?raw=true)

------------------------------------

Wykorzystałam **hook efektów**, a w nim umieściłam kod, który tworzy tabelę animals w bazie, o ile jeszcze ona nie istnieje.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/9.png?raw=true)

------------------------------------

Utworzyłam metodę **add**, która na wejściu przyjmuje tekst. Na początku sprawdzane jest, czy tekst nie jest pusty. Jeśli jest zwracany zostaje **Alert** z informacją, że imię zwierzęcia nie może być puste. Jeśli podany tekst nie jest pusty, do bazy danych dodawane jest nowe zwierzątko o podanym imieniu i wartości seen = 0 (**an.executeSql("insert into animals (seen, value) values (0, ?)", [text]);**). 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/10.png?raw=true)

Na ekranie wyświetlane jest logo gry i guzik **New Villager**. Po jego wciśnięciu wyświetlany zostaje **Modal** a w nim znajduje się **TextInput**, do którego możemy wpisać imię zwierzęcia, jakie chcemy dodać. Po wciśnięciu **OK** na klawiaturze zwierzątko zostaje dodane. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/11.png?raw=true)

------------------------------------

Umieściłam w aplikacji guzik **Show 'owned' Villagers**, po jego wciśnięciu wyświetla się inny **Modal** z listą posiadanych zwierzaków.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/12.png?raw=true)

Gdy wciśniemy na któreś ze zwierzaków, wyświetlany zostaje **Aler** z pytaniem **What do you want to do?** i trzema opcjami:
- **Cancel** - anulowanie akcji

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/13.png?raw=true)

- **Delete** - spowoduje usunięcie zwierzaka

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/14.png?raw=true)

- **Change to 'Wanted'** - zmienia status zwierzaka na 'wanted', co powoduje przeniesienie do innej listy.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/15.png?raw=true)

------------------------------------
Ostatni guzik **Show 'wanted' Villagers** wyświetla **Modal** z listą zwierzaków, które byśmy chcieli.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/16.png?raw=true)

Widok ten działa na takiej samej zasadzie co ten z 'Owned' Villagers. Po wciśnięciu zwierzaka wyświetlany jest **Alert** z trzema opcjami do wyboru.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium7/screenshots/17.png?raw=true)


## Działanie aplikacji na telefonie



