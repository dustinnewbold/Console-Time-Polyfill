# console.time-polyfill
A polyfill for console.time. Uses performance.now() API, if available. If it's not available, it falls back to Date, but will only get millisecond performance times instead of sub-millisecond performance times.
