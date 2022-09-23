import { Component, OnInit } from '@angular/core';
import { map, tap, distinctUntilChanged, switchMap } from 'rxjs/operators'
import { FormBuilder, Validators , FormControl, FormArray} from '@angular/forms';
import { CepService } from '../services/cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit{

  addressForm = this.fb.group({
    nome: null,
    valor: [null, Validators.required],
    condominio: [null, Validators.required],
    rua: [null, Validators.required],    
    numero: [null, Validators.required],
    bairro: [null, Validators.required],
    estado: [null, Validators.required],
    cidade: [null, Validators.required],
    cep: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],    
  });

  hasUnitNumber = false;

  tipos = [
    {name: 'Casa'},
    {name: 'Apartamento'},
    
  ];
  states = [
    {name: 'Minas Gerais', abbreviation: 'MG'},
    
  ];

  constructor(    
    private cepService: CepService,
    private fb: FormBuilder
    ) {}
 
  ngOnInit() {
   
    /*this.addressForm.get('cep').statusChanges
      .pipe(
        distinctUntilChanged(),
        tap(value => console.log('status CEP:', value)),
        switchMap(status => status === 'VALID' ?
          this.cepService.getEndereco(this.addressForm.get('endereco.cep').value)
          : empty()
        )
      )
      .subscribe(dados => dados ? this.populaDadosForm(dados) : {});*/

      /*this.addressForm.get('endereco.estado').valueChanges
        .pipe(
          tap(estado => console.log('Novo estado: ', estado)),
          //map(estado => this.estados.filter(e => e.sigla === estado)),
          //map(estados => estados && estados.length > 0 ? estados[0].id : empty()),
          //switchMap((estadoId: number) => this.dropdownService.getCidades(estadoId)),
          tap(console.log)
        )
        .subscribe(cidades => this.cidade = cidades);*/
 }

  onSubmit(): void {
    alert('Thanks!');
  }

  consultaCEP() {
    const cep = '';//this.addressForm.get('').value;

    if (cep != null && cep !== '') {
      this.cepService.getEndereco(cep)
      .subscribe(dados => this.populaDadosForm(dados));
    }
  }

  populaDadosForm(dados: any) {
    
    this.addressForm.patchValue({
     
        rua: dados.logradouro,
        // cep: dados.cep,
        //complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      
    });

    

    // console.log(form);
  }
}
