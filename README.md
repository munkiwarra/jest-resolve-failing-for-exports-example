### Reproduction example for jest-resolver failing on subpath exports entry with different file extensions

To reproduce this issue:
* 1. ```yarn set version berry``` (if yarn v1 fails, which it did for me)
* 2. ```yarn ```
* 3. ```yarn workspace package-a test```

The test will fail with an error stating that notFound.js is not found, because jest does not try to resolve notFound.jsx.
The "exports" field in package.json for package-b says to look up first for any js file, and if nothing is found for jsx.
The second entry will only be ignored if the first is found (at least for webpack - https://webpack.js.org/guides/package-exports/#alternatives - but this does work with other tools too)

If one switches *.js and *.jsx found.jsx will not be found, but found.js will not be tried to resolve.