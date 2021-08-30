import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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
  id!:number;

  get f(){
   return this.cadastro.controls;
  }

  constructor(private fg:FormBuilder,
              public validation:ValidorCamposService,
              private crud:FilmesService,
              private modal:MatDialog,
              private router:Router,
              private activateRouter:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params['id'];

    if(this.id){
        this.crud.vusualizarFilmes(this.id).subscribe((filme:Filmes)=>this.criarFormulario(filme))
    } else {
        this.criarFormulario(CadastroFilmesComponent.criarFormularioBranco());
    }
    this.generos=['Ação', 'Romance', 'Aventura', 'Terror', 'Ficção cientifica', 'Comédia', 'Aventura', 'Drama'];
  }

  public salvar():void{
    this.cadastro.markAllAsTouched();
    if(this.cadastro.invalid){
      return;
    }
    const filme = this.cadastro.getRawValue() as Filmes;
    if(this.id){
        filme.id = this.id;
        this.EditarBD(filme);
    } else {
        this.salvarBD(filme);
    }


    //alert('SUCESSO!!! \n\n' + JSON.stringify(this.cadastro.value, null, 4));
  }

  public reiniciarForm():void{
    return this.cadastro.reset();
  }

  private criarFormulario(filme:Filmes):void{
    this.cadastro = this.fg.group({
      titulo:[filme.titulo, [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      urlFoto:[filme.urlFoto,Validators.minLength(10)],
      dtLancamento:[filme.dtLancamento,[Validators.required]],
      descricao:[filme.descricao,Validators.minLength(12)],
      nota:[filme.nota,[Validators.required,Validators.max(10),Validators.min(0)]],
      urlIMDb:[filme.urlIMDb,[Validators.minLength(10)]],
      genero:[filme.genero,Validators.required]
    })
  }
  private static criarFormularioBranco():Filmes{
   return {
     id:null,
     titulo:null,
     urlFoto:null,
     dtLancamento: null,
     descricao:null,
     nota:null,
     urlIMDb: null,
     genero:null
   } as unknown as Filmes
  }

    private salvarBD(filme: Filmes): void {
      this.crud.salvar(filme).subscribe(
      ()=>{
        const propiedade = {
        data:{
                titulo:'SUCESSO!!!',
                descricao:'Seu cadatro foi realizado com sucesso',
                possuiFechar:false,
                possuiSave:false,
                corBtnCancelar:'btn btn-primary'
             } as Alert
        }
        const dialogRef = this.modal.open(ModalComponent,propiedade);
        dialogRef.afterClosed().subscribe((options:boolean)=>{
          if(options){
            this.router.navigateByUrl('filmes');
          }else{
            this.reiniciarForm();
          }
        })
      },
      () => {
        const erroMg= {data:{
          titulo:'Erro!!!',
          descricao:'Erro no envio de dados',
          possuiFechar:true,
          possuiSave:false,
          corBtnCancelar:'btn btn-danger ms-3'
        }as Alert}
        const erro = this.modal.open(ModalComponent,erroMg);
        this.reiniciarForm();
      })
    }

    private EditarBD(filme: Filmes): void {
      this.crud.editar(filme).subscribe(
      ()=>{
        const propiedade = {
        data:{
                titulo:'SUCESSO!!!',
                descricao:'Seu cadatro foi Atualizado com sucesso',
                possuiFechar:false,
                possuiSave:false,
                corBtnCancelar:'btn btn-primary'
             } as Alert
        }
        const dialogRef = this.modal.open(ModalComponent,propiedade);
      },
      () => {
        const erroMg= {data:{
          titulo:'Erro!!!',
          descricao:'Erro no envio de dados',
          possuiFechar:true,
          possuiSave:false,
          corBtnCancelar:'btn btn-danger ms-3'
        }as Alert}
        const erro = this.modal.open(ModalComponent,erroMg);
        this.reiniciarForm();
      })
    }




}
