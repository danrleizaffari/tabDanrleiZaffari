import { AlterarSenha } from './pages/altera-senha/altera-senha';
import { CadastroCliente } from './pages/cadastro-clientes/cadastro-clientes';
import { CadastroUsuario } from './pages/cadastro-usuarios/cadastro-usuarios';
import { RouterModule,Router, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


export const appRoutes: Routes = [

    {
        path: 'cadastro-cliente',
        component: CadastroCliente
    }, {
        path: 'cadastro-usuario',
        component: CadastroUsuario
    }, {
        path: 'alterar-senha',
        component: AlterarSenha
    }

]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })

    ],
    exports: [RouterModule]
})

export class AppRoute {

    constructor(public router: Router) {

    }
}