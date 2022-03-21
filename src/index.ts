import { Iinterpolate } from './types';

function interpolate({matrix, }: Iinterpolate){
    const {matrix: matrix2D} = matrix;
    const {preference = ['linear', 'cubic'], horizontal = true, vertical = true, diagonal = true} = matrix;
    const {length} = matrix2D;
    const preference2D = preference.map(p => p === 'linear' ? 0 : 1);
    const preference3D = preference2D.map(p => [p, p, p]);
    const preference4D = preference3D.map(p => [p, p, p, p]);
    const preference5D = preference4D.map(p => [p, p, p, p, p]);
    const preference6D = preference5D.map(p => [p, p, p, p, p, p]);
    const preference7D = preference6D.map(p => [p, p, p, p, p, p, p]);
    const preference8D = preference7D.map(p => [p, p, p, p, p, p, p, p]);
    const preference9D = preference8D.map(p => [p, p, p, p, p, p, p, p, p]);
    const preference10D = preference9D.map(p => [p, p, p, p, p, p, p, p, p, p]);
    const preference11D = preference10D.map(p => [p, p, p, p, p, p, p, p, p, p, p]);
    const preference12D = preference11D.map(p => [p, p, p, p, p, p, p, p, p, p, p, p]);
    const preference13D = preference12D.map(p => [p, p, p, p, p, p, p, p, p, p, p, p, p]);
    const preference14D = preference13D.map(p => [p, p, p, p, p, p, p, p, p, p, p, p, p, p]);
    const preference15D = preference14D.map(p => [p, p, p, p, p
}

export default interpolate;
