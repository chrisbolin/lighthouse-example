## Lighthouse Runner: An Example

_This is just a simple proof-of-concept. It's ugly. You've been warned._

### Usage

```
yarn lighthouse [url] [options]
```

Example: repeatedly test localhost:3000

```
yarn lighthouse http://localhost:3000/ --runs=10
```

The output can easily be pasted into a spreadsheet.

#### Options

`--runs` - Runs the test repeatedly

### Known Issues

- `--runs` does not kill child processes if quit