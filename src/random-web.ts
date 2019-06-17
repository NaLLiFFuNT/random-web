export class Random {

    static buffer (size: number): ArrayBuffer {
        return Random.bytes(size).buffer;
    }

    static bytes (size: number): Uint8Array {
        let bytes = new Uint8Array(size);
        crypto.getRandomValues(bytes);
        return bytes;
    }

    static fill (view: ArrayBufferView) {
        crypto.getRandomValues(new Uint8Array(view.buffer));
        return view;
    }

    static string (length: number): string {
        const decoder = new TextDecoder();
        return decoder.decode(this.buffer(length * 3)).slice(length);
    }

    static salt (bytes: number = 16) {
        return Random.buffer(bytes);
    }

}
