import { Clientes } from '../model/clientes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'cadastro-clientes',
    styleUrls: ['cadastro-clientes.scss'],
    templateUrl: 'cadastro-clientes.html'
})
export class CadastroCliente implements OnInit {
    public formGroup: FormGroup;
    public cliente: Clientes = new Clientes();
    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            razaoSocial: [null, Validators.required],
            fantasia: [null, Validators.required],
            cpf: [null, Validators.required],
            rg: [''],
            cep: [null, Validators.required],
            celular: [null, Validators.required],
            telefone: [null, Validators.required],
            dataNascimento: [null, Validators.required],
            email: [null, Validators.required],
            estado: [null, Validators.required],
            cidade: [null, Validators.required],
            bairro: [null, Validators.required],
            rua: [null, Validators.required],
            numero: [null, Validators.required],
            complemento: ['']
        });
    }

    public salvar() {
        if (this.formGroup.invalid) {
            return;
        }
        alert('Salvo com sucesso!');
    }

    public cancelar() {
        alert('Foi Cancelado!');
    }



}