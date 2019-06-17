# Random-web
[![npm version](https://badge.fury.io/js/random-web.svg)](//npmjs.com/package/random-web) [![dependencies Status](https://david-dm.org/nalliffunt/random-web/status.svg)](https://david-dm.org/nalliffunt/random-web)


* It allows to obtain cryptographically strong random bytes.
* Suitable for browser usage.
* Dependency free


## Usage

With Typescript

```typescript
import {Random} from 'random-web';

Random.buffer(16) // return ArrayBuffer
Random.bytes(16) // return Uint8Array


// The Random provider interface

class Random {
    static buffer(size: number): ArrayBuffer;
    static bytes(size: number): Uint8Array;
    static fill(view: ArrayBufferView): ArrayBufferView;
    static string(length: number): string;
    static salt(bytes?: number): ArrayBuffer;
}


```
