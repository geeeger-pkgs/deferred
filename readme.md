# usage

```typescript
import deferredCreator from "@geeeger/deferred"
import fs from 'fs'
function read(fileName) {
    const deferred = deferredCreator()
    fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err) {
            deferred.reject(err)
        }
        else {
            deferred.resolve(data)
        }
    })
    return deferred.promise
}

read()
    .then(() => {
        // balabala
    })
    .catch((e) => {
        // balabala
    })
```