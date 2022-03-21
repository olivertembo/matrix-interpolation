export interface Iinterpolate {
    matrix: IMatric2D;
    preference?: ['linear', 'cubic'];
    horizontal?: boolean;
    vertical?: boolean;
    diagonal?: boolean;
}

export interface IMatric2D {
    matrix: number[][];
}