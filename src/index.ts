import { IinterpolateMatrix } from "./types";

function interpolateMatrix({matrix, preference, horizontal, vertical, diagonal}: IinterpolateMatrix){
    const {matrix: matrix2D} = matrix;
    console.log(matrix2D);
}

export default interpolateMatrix;
