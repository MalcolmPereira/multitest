import { InjectionToken } from "@angular/core";

export const API_END_POINT = "http://localhost:3000/";

export interface IAppConfig {
   API_END_POINT: string;
   MULTIPLY_SERVICE: string;
}

export const AppConfig : IAppConfig = {
   API_END_POINT: this.API_END_POINT,
   MULTIPLY_SERVICE: this.API_END_POINT + "multiply"
}

export const APP_CONFIG = new InjectionToken<IAppConfig>("AppConfig");
