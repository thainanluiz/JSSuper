# JSSUPER CORE

How to install

```shell
npm i jssuper
```

<br>

How to use

```js
const jssuper = require("jssuper");
```

<br>
<br>

Available functions:

- isANumber( value ) :
  <br>
  Return true or false

```js
if(_.isANumber(5)){
    Your code...
} else {
    More code...
}
```

<br>

- randomINT( min, max ) :
  <br>
  Return random number between min and max args

```js
console.log(_.randomINT(0, 10));
```

<br>

- delay( ms ) :
  <br>
  Set an delay

```js
await _.delay(5000);
console.log("It works");
```

Default delay ms value is 1000ms or 1s

<br>

- randomDelay( max ) :
  <br>
  Set an random delay

```js
await _.randomDelay(120000);
console.log("It works");
```

Default max delay ms value is 60000ms or 1min

<br>

- repeater( function, times, delay ) :
  <br>
  Repeat the function a set number of times

```js
_.repeater(() => console.log("Hi"), 10, 1000);
```

Default delay ms value is 0ms
