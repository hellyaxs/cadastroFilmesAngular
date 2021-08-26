import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { ValidorCamposService } from 'src/app/share/campos/validor-campos.service';
import { ModalComponent } from 'src/app/share/modal/modal.component';
import { Alert } from 'src/app/share/models/alert';
import { Filmes } from 'src/app/share/models/filmes';

@Component({
  templateUrl: './cadastro-filmes.component.html',
  styleUrls: ['./cadastro-filmes.component.css']
})

export class CadastroFilmesComponent implements OnInit {

  cadastro!:FormGroup;
  generos!: Array<string>;

  get f(){
   return this.cadastro.controls;
  }

  constructor(private fg:FormBuilder,
              public validation:ValidorCamposService,
              private crud:FilmesService,
              private modal:MatDialog,
              private router:Router
              ){}

  ngOnInit(): void {

    this.cadastro = this.fg.group({
      titulo:['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      urlFoto:['',Validators.minLength(10)],
      DatadeLançamento:['',[Validators.required]],
      descricao:['',Validators.minLength(12)],
      NotaIMDb:[0,[Validators.required,Validators.max(10),Validators.min(0)]],
      urlIMDb:['',[Validators.minLength(10)]],
      genero:['',Validators.required] 
    })
    this.generos=['ação','drama','suspense','terror','aventura'];
  }

  public salvar():void{
    this.cadastro.markAllAsTouched();
    if(this.cadastro.invalid){
      return;
    }
    const filme = this.cadastro.getRawValue() as Filmes;
    this.salvarBD(filme);
    
    //alert('SUCESSO!!! \n\n' + JSON.stringify(this.cadastro.value, null, 4));
  }

  public reiniciarForm():void{
    return this.cadastro.reset();
  }

    private salvarBD(filme: Filmes): void {
      this.crud.salvar(filme).subscribe(
      ()=>{
        const propiedade = { 
        data:{
                titulo:'SUCESSO!!!',
                descricao:'Seu cadatro foi realizado com sucesso',
                Save:true,
                possuiFechar:false,
                possuiSave:false,
                corBtnCancelar:'btn btn-primary'
             } as Alert
        }
        const dialogRef = this.modal.open(ModalComponent,propiedade);
        dialogRef.afterClosed().subscribe((options:boolean)=>{
          if(options=true){
            this.router.navigateByUrl('filmes/galeria');
          }else{
            this.reiniciarForm();
          }
        })
        this.reiniciarForm();
      },
      () => { 
        const erroMg= {data:{
          titulo:'Erro!!!',
          descricao:'Erro no envio de dados',
          Save:false,
          possuiFechar:true,
          possuiSave:false,
          corBtnCancelar:'btn btn-danger'
        }as Alert}
        const erro = this.modal.open(ModalComponent,erroMg);
        this.reiniciarForm();
      })
    }


  
  
  
}
