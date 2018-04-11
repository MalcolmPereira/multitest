import { InjectionToken } from "@angular/core";

export const API_END_POINT_CONST = "http://localhost:3000/";

export interface IAppConfig {
   API_END_POINT: string;
   BASICS_SERVICE: string;
}

export const AppConfig : IAppConfig = {
   API_END_POINT: API_END_POINT_CONST,
   BASICS_SERVICE: API_END_POINT_CONST + "basics"
}

export const APP_CONFIG = new InjectionToken<IAppConfig>("AppConfig");
