import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Menu } from './componentes/menu/menu';
import { AlterarSenha } from './pages/altera-senha/altera-senha';
import { CadastroCliente } from './pages/cadastro-clientes/cadastro-clientes';
import { CadastroUsuario } from './pages/cadastro-usuarios/cadastro-usuarios';
 
import { AppComponent } from './app.component';
import { MaterialModule } from './material.modules';
import { AppRoute } from './app-router';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuario,
    CadastroCliente,
    AlterarSenha,
    Menu
  ],
  imports: [
    AppRoute,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    BrowserModule, BrowserAnimationsModule, MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }