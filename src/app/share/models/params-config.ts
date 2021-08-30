import { CampoIn } from "./campo-in";

export interface ParamsConfig {
    paginas: number;
    limite: number;
    pesquisaT?:string;
    campoAdd?: CampoIn;
}
