## Lighthouse on the CLI - Example

_This is just a simple proof of concept. It's ugly. You've been warned._

### Usage

```
yarn lighthouse [url] [options]
```

Example: repeatedly test localhost:3000

```
yarn lighthouse http://localhost:3000/ --loop
```

#### Options

`--loop` - Runs the test repeatedly

### Known Issues

`--loop`