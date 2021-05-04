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

## Nawigacja
Utworzyłam ekran główny, który umożliwia przejście do wybranego ekranu. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/1.png?raw=true)

## Ładowanie obrazków
Na pierwszym ekranie umieściłam dwa obrazki. Pierwszy z nich jest ładowany z wykorzystaniem **'uri'**.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/2.png?raw=true)

A drugi za pomocą **require()**, który wymaga umieszczenie pliku z obrazkiem gdzieś w naszym projekcie. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/3.png?raw=true)

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/1.jpg?raw=true)

## Zmiana rozmiaru obrazka za pomocą Slidera
Zainstalowałam Slider (@react-native-community/slider) i go zaimportowałam. Wykorzystałam **hook stanu**, by móc zmieniać wartość skali. Utworzyłam też funkcje **changeSize**, która wykorzystuje metodę zdefiniowaną w hooku. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/4.png?raw=true)

Poniżej umieściłam **Slider**. Jego minimalną wartością jest 0.1, a maksymalną 1. Domyślnie ustawioną wartością jest 1. Gdy zaczniemy go przesuwać wywoływane jest **changeSize**. 

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/5.png?raw=true)

By zmieniać rozmiar zdjęcia wykorzystałam **transform** ze skalą równą zmiennej zdefiniowanej w hooku stanu.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/6.png?raw=true)

Gdy przesuwamy Slider w lewo obrazek zmniejsza się. Gdy przesuniemy w prawo, zwiększa on swój rozmiar.

![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/3.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/3a.jpg?raw=true)
![1](https://github.com/kamilanagorska/aplikacje-mobilne-nagorska-185ic/blob/main/Laboratorium6/screenshots/3b.jpg?raw=true)

## Leniwe ładowanie obrazka i ikony
## Detekcja łączności z siecią
## Zapis danych za pomocą AsyncStorage
## Synchronizacja danych w zależności od połączenia z internetem
