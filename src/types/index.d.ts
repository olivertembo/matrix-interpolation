export interface IinterpolateMatrix {
    matrix: IMatric2D;
    preference?: ['linear', 'cubic'];
    horizontal?: boolean;
    vertical?: boolean;
    diagonal?: boolean;
}

export interface Row {
    row: number | null;
}

export interface IMatric2D {
    matrix: [number | null, ...(number | null)[], null] ;
}