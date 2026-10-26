import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./app/components/home-component/home-component";
import { CineComponent } from "./app/components/cine-component/cine-component";
import { MusicaComponent } from "./app/components/musica-component/musica-component";
import { NumeroDobleComponent } from "./app/components/numero-doble-component/numero-doble-component";
import { TablaMultiplicarComponent } from "./app/components/tablamultiplicarcomponent/tablamultiplicarcomponent";
import { NotFoundComponent } from "./app/components/not-found-component/not-found-component";

// Necesitamos un array con las rutas. Dicho array debe ser de la clase Routes
const appRoutes: Routes = [
    { path: "", component: HomeComponent},
    { path: "cine", component: CineComponent},
    { path: "musica", component: MusicaComponent},
    { path: "doble", component: NumeroDobleComponent},
    { path: "doble/:numero", component: NumeroDobleComponent},
    { path: "tabla/:valor", component: TablaMultiplicarComponent},
    { path: "**", component: NotFoundComponent}
    
]

// Para el módulo, debemos exportar dos variables
export const appRoutingProvider: any [] = []
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);
