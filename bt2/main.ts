type Matrix = number[][];
type MatrixProtocol = {
  determinant: {
    in: [Matrix];
    out: number;
  };
  "dot-product": {
    in: [Matrix, Matrix];
    out: Matrix;
  };
  invert: {
    in: [Matrix];
    out: Matrix;
  };
};

let runWithMatrixProtocol = createProtocol<MatrixProtocol>("./worker.js");
let parallelDeterminant = runWithMatrixProtocol("determinant");
parallelDeterminant([
  [1, 2],
  [3, 4],
]).then(
  (determinant) => console.log(determinant) // -2
);
