## Functions available

#### 2.1.0

- [genUUID](https://github.com/thainanluiz/JSSuper/blob/main/examples/genUUID.js)
  <br>
  Returns a random UUID.

#### 2.0.0

- [isNum](https://github.com/thainanluiz/JSSuper/blob/main/examples/isNum.js)( value )
  <br>
  Returns true if the value entered is a number and false if not.

- [isStr](https://github.com/thainanluiz/JSSuper/blob/main/examples/isStr.js)( value )
  <br>
  Returns true if the value entered is a string and false if not.
- [isBool](https://github.com/thainanluiz/JSSuper/blob/main/examples/isBool.js)( value )
  <br>
  Returns true if the value entered is a boolean and false if not.
- [isFunc](https://github.com/thainanluiz/JSSuper/blob/main/examples/isFunc.js)( value )
  <br>
  Returns true if the value entered is a function and false if not.
- [isObj](https://github.com/thainanluiz/JSSuper/blob/main/examples/isObj.js)( value )
  <br>
  Returns true if the value entered is a object and false if not.
- [isSymb](https://github.com/thainanluiz/JSSuper/blob/main/examples/isSymb.js)( value )
  <br>
  Returns true if the value entered is a symbol and false if not.
- [hasValue](https://github.com/thainanluiz/JSSuper/blob/main/examples/hasValue.js)( value )
  <br>
  Returns true if the value entered is not null or undefined.
- [randomInt](https://github.com/thainanluiz/JSSuper/blob/main/examples/randomInt.js)( min, max )
  <br>
  Will return a value between the maximum and minimum number
  <br>
  <br>
  _Default min and max values ​​(0, 10)_
- [fixedDelay](https://github.com/thainanluiz/JSSuper/blob/main/examples/fixedDelay.js)( ms )
  <br>
  Stops the function for a certain pre-defined period of time.
  <br>
  <br>
  _Default ms value ​​(1000 ms)_
- [dynamicDelay](https://github.com/thainanluiz/JSSuper/blob/main/examples/dynamicDelay.js)( max )
  <br>
  Stop the function for a certain period of time that will vary according to the maximum period defined in the parameters of the function.

  Note: This does not mean that the time will be defined, but that the function will stop for a random time less (or equal) to the defined maximum time.
  <br>
  <br>
  _Default max value ​​(60000 ms)_

- [fixedRepeater](https://github.com/thainanluiz/JSSuper/blob/main/examples/fixedRepeater.js)( function, times, delay )
  <br>
  Loop a predefined function by a predefined number with a time.
  <br>
  <br>
  _Default times and delay values ​​(1, 0)_

## Deprecated functions:

#### Everything will go away in version 3.0.0

- isANumber( value )
  <br>
  Return true or false

- randomINT( min, max )
  <br>
  Return random number between min and max args

- delay( ms )
  <br>
  Set an delay
  <br>
  <br>
  Default delay ms value is 1000ms or 1s

- randomDelay( max )
  <br>
  Set an random delay
  <br>
  <br>
  Default max delay ms value is 60000ms or 1min

- repeater( function, times, delay )
  <br>
  Repeat the function a set number of times
  <br>
  <br>
  Default delay ms value is 0ms

- isset( value )
  <br>
  Similar to php, isset checks if the value in the variable is assigned
