function createProtocol(script) {
    return function (command) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new Promise(function (resolve, reject) {
                var worker = new Worker(script);
                worker.onerror = reject;
                worker.onmessage = function (event) { return resolve(event.data.data); };
                worker.postMessage({ command: command, args: args });
            });
        };
    };
}
