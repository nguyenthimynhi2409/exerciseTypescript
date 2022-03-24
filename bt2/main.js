var runWithMatrixProtocol = createProtocol("./worker.js");
var parallelDeterminant = runWithMatrixProtocol("determinant");
parallelDeterminant([
    [1, 2],
    [3, 4],
]).then(function (determinant) { return console.log(determinant); } // -2
);
