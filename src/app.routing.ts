import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./app/components/home-component/home-component";
import { CineComponent } from "./app/components/cine-component/cine-component";
import { MusicaComponent } from "./app/components/musica-component/musica-component";

// Necesitamos un array con las rutas. Dicho array debe ser de la clase Routes
const appRoutes: Routes = [
    { path: "", component: HomeComponent},
    { path: "cine", component: CineComponent},
    { path: "musica", component: MusicaComponent}
]

// Para el módulo, debemos exportar dos variables
export const appRoutingProvider: any [] = []
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);
