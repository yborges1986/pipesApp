import { reduce } from 'rxjs';

export enum Colors {
  rojo,
  azul,
  verde,
  negro,
}

export interface Hero {
  name: string;
  fly: boolean;
  color: Colors;
}
