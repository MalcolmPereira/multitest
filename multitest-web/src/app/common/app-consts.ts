import { InjectionToken } from "@angular/core";

export interface IAppConfig {
   API_END_POINT: string;
   MULTIPLY_SERVICE: string;
}

export const AppConfig : IAppConfig = {
   API_END_POINT: "http://localhost:3000/",
   MULTIPLY_SERVICE: this.API_END_POINT + "multiply"
}

export const APP_CONFIG = new InjectionToken<IAppConfig>("AppConfig");
