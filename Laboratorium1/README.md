### Laboratorium 1
Prosty kalkulator stworzony za pomocą React Native z wykorzystaniem Expo.

![1](https://github.com/kamilanagorska/aplikacje-internetowe-nagorska-185ic/blob/main/Laboratorium1/screenshots/1.png?raw=true)

Zdefiniowałam w stanie dwa elementy: toCalculate i result. W pierwszym z nich przechowywane będzie działanie, jakie wpisze użytkownik, a w drugim wynik. 
```
export default class App extends Component{
  state = {
    toCalculate: '',
    result: '',
  }
```
Następnie utworzyłam 3 metody:
- letsCalculate(text) - wykorzystuje funkcję eval(), do której przekazywane jest działanie w postaci stringa, które następnie jest wykonywana i zwracany jest wynik
```
letsCalculate(text){
    const toCalculate = text
    //eval wylicza wynik z obliczenia zapisanego za pomocą stringa
    //czyli jak mamy '2+4' to eval z tego da nam 6
    let res = eval(toCalculate)
    this.setState({result: res})
  }
```
- checkIfOk() - odpowiada za sprawdzenie, czy wpisane przez użytkownika działanie nie kończy się znakiem, którejś z dostepnym operacji (+,-,*,/,.)
```
//sprawdzenie, czy wpisane przez uzytkownika dzialanie nie konczy się znakiem operacji lub kropką, co powoduje error
  checkIfOk(){
    const text = this.state.toCalculate
    if(text.slice(-1)=="+" || text.slice(-1)=="-" || text.slice(-1)=="/" || text.slice(-1)=="*" || text.slice(-1)=="."){
      return false
    }
    return true
  }
```
- onPressed(nr) - wykonywane, gdy wciśniemy "guzik" w kalkulatorze, sprawdzane jest, czy wciśnięty klawisz nie jest C, jeśli tak to czyszczony jest stan, a dokładniej podstawiamy do niego puste stringi, jeśli wciśnięty klawisz był symbolem usuwania, to następuje rozdzielenie stringa z działaniem na poszczególne symbole (tworzona jest tablica symboli), usuwany zostaje ostatni symbol za pomocą pop, a następnie tablica jest łączona i zapisywana w stanie, jeśli wciśnięty klawisz to znak równa się, wykonywane jest letCalculate(), w innym przypadku zmieniamy stan i pod toCalculate podstawiamy obecny stan + wybrany symbol przez użytkownika.
```
//gdy wcisniemy ktorys z guzików 
  onPressed(nr){
    //jeśli wcisniemy C wszystkie zapisane wartosci się usuwają
    if(nr == 'C'){
      return this.setState({
        toCalculate: '',
        result: ''
      })
    }
    //jeśli wcisniemy symbol usuwania, usunie nam się ostatni wpisany znak
    if(nr == '⌫'){
      //rozdzielenie wpisanego tekstu na poszczegolne symbole, utworzenie tablicy z symbolami
      let text = this.state.toCalculate.split('')
      //usunięcie ostatniego elementu z tablicy text
      text.pop()
      return this.setState({
        //polaczenie tablicy text w jeden lancuch znakow
        toCalculate: text.join('')
      })
    }
    if(nr == '='){
      //zabezpieczenie, by uzytkownik nie wcisnal = gdy ostatni wybrany znak to np +, co powoduje error
      //jesli checkIfOk zwroci false to wykonanie obliczenia się nie odbędze
      return this.checkIfOk() && this.letsCalculate(this.state.toCalculate)
    }

    //gdy zaden z ifów nie mial miejsca nastepuje nadpisanie stanu dodając do niego symbol z przed chwilą wciśniętego guzika
    this.setState({toCalculate: this.state.toCalculate+nr})
  }

```

W render znajduje się wszystko to, co wyświetlane w aplikacji.