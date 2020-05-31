# Afternoon Challenge 20200529

## JSON

When we send data across the web, it can only be text.

JSON (JavaScript Object Notation) is a format that uses human-readable text to transmit data objects consisting of key–value pairs and arrays.

JSON is text. We can convert any JavaScript object into JSON.

We can also convert JSON into a JavaScript object.

Try it for yourself. Turn a JS object into JSON:

```javascript
lunch = { food: 'Pork Bun Roll', price: 10 };
lunchJson = JSON.stringify(lunch);
```

Turn JSON into a JS object:

```javascript
lunchJson = '{"food":"Pork Bun Roll","price":10}';
lunch = JSON.parse(lunchJson);
```

## Resources
[JSON.parse and JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)


## Challenge

[Here's some JSON](https://coderacademyedu.github.io/resources/weather.json) from Yahoo!'s weather API (2018-03-28)

- Copy the JSON into your code and parse it using JSON.parse
- Log the sunrise and sunset dates
- Log the forecast for the week, make it look nice
- Temperatures are in fahrenheit, fix this with a fahrenheitToCelcius method.

### My Solution

<!-- #TODO 20200529 Morning Core -->
```javascript

```

## Beast Mode

The sunrise time is missing a zero. Create a method to fix this. E.g:

```
Input: 7:5 AM, output: 7:50AM
Input: 7:50 AM, output: 7:50AM
```

### My 'Beast Mode' Solution
<!-- #TODO 20200529 Morning BeastMode -->
```javascript

```

## Beast Mode++
Figure out a way to get the current weather from Yahoo! weather in your browser.

- Hint 1: Get a brief understanding of CORS (a common interview question)
- Hint 2: Get a brief understanding of JSONP (a common interview question)
- Hint 3: Yahoo! Weather API & Demo

Got it? now use HTML elements to make it look nice!

### My 'Beast Mode ++' Solution
<!-- #TODO 20200529 Morning BeastMode++ -->
```javascript

```