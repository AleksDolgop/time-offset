# TimeOffset Library

The `TimeOffset` library is a simple utility for managing time in seconds. It allows you to accumulate time through various methods, including adding seconds, minutes, hours, and days. The library is designed to work in an accumulative mode, essentially functioning as a calculator for time offsets.

## Installation

To use the `TimeOffset` library, you can install it via npm:

```bash
npm install time-offset
```

For yarn:

```bash
yarn add time-offset
```

## Usage

### Importing the Library

You can import the `TimeOffset` class into your project as follows:

```javascript
import { TimeOffset } from 'time-offset';
```

### Creating an Instance

You can create an instance of `TimeOffset` with an optional initial time-to-live (TTL) in seconds:

```javascript
const timeOffset = new TimeOffset(3600); // Initializes with 1 hour (3600 seconds)
```

### Adding Time

You can add time in seconds, minutes, hours, or days using the following methods:

- **Add Seconds**
  ```javascript
  timeOffset.addSeconds(30); // Adds 30 seconds
  ```

- **Add Minutes**
  ```javascript
  timeOffset.addMinutes(5); // Adds 5 minutes (300 seconds)
  ```

- **Add Hours**
  ```javascript
  timeOffset.addHours(2); // Adds 2 hours (7200 seconds)
  ```

- **Add Days**
  ```javascript
  timeOffset.addDays(1); // Adds 1 day (86400 seconds)
  ```

### Static Methods

You can also create a new `TimeOffset` instance and add time in a single line using static methods:

```javascript
const newTimeOffset = TimeOffset.addSeconds(120); // Creates a new instance with 120 seconds
```

### Retrieving Values

You can retrieve the accumulated time in seconds or get future/past dates based on the accumulated time:

- **Get Accumulated Seconds**
  ```javascript
  const totalSeconds = timeOffset.toAccumulatedSeconds();
  ```

- **Get Future Date**
  ```javascript
  const futureDate = timeOffset.toFutureDate(); // Returns a Date object for the future
  ```

- **Get Past Date**
  ```javascript
  const pastDate = timeOffset.toDatePast(); // Returns a Date object for the past
  ```

## Example

Here’s a simple example demonstrating the usage of the `TimeOffset` library:

```javascript
import { TimeOffset } from 'time-offset';

const timeOffset = new TimeOffset();
timeOffset.addHours(1).addMinutes(30).addSeconds(45);

console.log(`Total seconds: ${timeOffset.toAccumulatedSeconds()}`); // Outputs total accumulated seconds
console.log(`Future date: ${timeOffset.toFutureDate()}`); // Outputs future date
console.log(`Past date: ${timeOffset.toDatePast()}`); // Outputs past date
```

## API

### Constructor

- `constructor(ttl: number = 0)`: Initializes a new instance of `TimeOffset` with an optional TTL in seconds.

### Methods

- `addSeconds(seconds: number): TimeOffset`: Adds the specified seconds to the accumulated time.
- `addMinutes(minutes: number): TimeOffset`: Adds the specified minutes to the accumulated time.
- `addHours(hours: number): TimeOffset`: Adds the specified hours to the accumulated time.
- `addDays(days: number): TimeOffset`: Adds the specified days to the accumulated time.
- `toAccumulatedSeconds(): number`: Returns the total accumulated time in seconds.
- `toFutureDate(): Date`: Returns a Date object representing the future date based on the accumulated time.
- `toDatePast(): Date`: Returns a Date object representing the past date based on the accumulated time.

## Author

- [AleksDolgop | Github](https://github.com/AleksDolgop)

## Support

If you have questions or suggestions, create [issue](https://github.com/AleksDolgop/time-offset/issues)