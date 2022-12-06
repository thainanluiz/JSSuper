## Functions available

#### 2.1.1

- [extractor](https://github.com/thainanluiz/JSSuper/blob/main/examples/extractor.js)( min, max )
  Removes a specific word from an entire text.

#### 2.1.0

- [genUUID](https://github.com/thainanluiz/JSSuper/blob/main/examples/genUUID.js)
  Returns a random UUID.

#### 2.0.0

- [isNum](https://github.com/thainanluiz/JSSuper/blob/main/examples/isNum.js)( value )
  Returns true if the value entered is a number and false if not.

  <br>

- [isStr](https://github.com/thainanluiz/JSSuper/blob/main/examples/isStr.js)( value )
  Returns true if the value entered is a string and false if not.

  <br>

- [isBool](https://github.com/thainanluiz/JSSuper/blob/main/examples/isBool.js)( value )
  Returns true if the value entered is a boolean and false if not.

  <br>

- [isFunc](https://github.com/thainanluiz/JSSuper/blob/main/examples/isFunc.js)( value )
  Returns true if the value entered is a function and false if not.

  <br>

- [isObj](https://github.com/thainanluiz/JSSuper/blob/main/examples/isObj.js)( value )
  Returns true if the value entered is a object and false if not.

  <br>

- [isSymb](https://github.com/thainanluiz/JSSuper/blob/main/examples/isSymb.js)( value )
  Returns true if the value entered is a symbol and false if not.

  <br>

- [hasValue](https://github.com/thainanluiz/JSSuper/blob/main/examples/hasValue.js)( value )
  Returns true if the value entered is not null or undefined.

  <br>

- [randomInt](https://github.com/thainanluiz/JSSuper/blob/main/examples/randomInt.js)( min, max )
  Will return a value between the maximum and minimum number.

  <br>

  _Default min and max values ​​(0, 10)_

  <br>

- [fixedDelay](https://github.com/thainanluiz/JSSuper/blob/main/examples/fixedDelay.js)( ms )
  Stops the function for a certain pre-defined period of time.

  <br>

  _Default ms value ​​(1000 ms)_

  <br>

- [dynamicDelay](https://github.com/thainanluiz/JSSuper/blob/main/examples/dynamicDelay.js)( max )
  Stop the function for a certain period of time that will vary according to the maximum period defined in the parameters of the function.
  Note: This does not mean that the time will be defined, but that the function will stop for a random time less (or equal) to the defined maximum time.

  <br>

  _Default max value ​​(60000 ms)_

  <br>

- [fixedRepeater](https://github.com/thainanluiz/JSSuper/blob/main/examples/fixedRepeater.js)( function, times, delay )
  Loop a predefined function by a predefined number with a time.
  _Default times and delay values ​​(1, 0)_

## Deprecated functions:

#### Everything will go away in version 3.0.0

- isANumber( value )
  Return true or false

  <br>

- randomINT( min, max )
  Return random number between min and max args

  <br>

- delay( ms )
  Set an delay
  Default delay ms value is 1000ms or 1s

  <br>

- randomDelay( max )
  Set an random delay
  Default max delay ms value is 60000ms or 1min

  <br>

- repeater( function, times, delay )
  Repeat the function a set number of times
  Default delay ms value is 0ms

  <br>

- isset( value )
  Similar to php, isset checks if the value in the variable is assigned
