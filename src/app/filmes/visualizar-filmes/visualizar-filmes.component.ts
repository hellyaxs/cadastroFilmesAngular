import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmesService } from 'src/app/core/filmes.service';
import { ModalComponent } from 'src/app/share/modal/modal.component';
import { Alert } from 'src/app/share/models/alert';
import { Filmes } from 'src/app/share/models/filmes';

@Component({
  selector: 'app-visualizar-filmes',
  templateUrl: './visualizar-filmes.component.html',
  styleUrls: ['./visualizar-filmes.component.css']
})
export class VisualizarFilmesComponent implements OnInit {
  readonly semFoto = 'https://www.termoparts.com.br/wp-content/uploads/2017/10/no-image.jpg';
  filme!:Filmes;
  id!:number;

  constructor(private activeRouter: ActivatedRoute,
              private FilmesService: FilmesService,
              private router:Router,
              private modal:MatDialog) { }

  ngOnInit(): void {
    this.id = this.activeRouter.snapshot.params['id'];
   this.visualizar(this.id);
  }

  Edit():void{
    this.router.navigateByUrl('filmes/cadastro/'+ this.id);
  }

  excluir():void{
    const propiedade = { 
      data:{
              titulo:'AVISO!!!',
              descricao:'Deseja excluir este filme click em Ok',
              possuiFechar:true,
              SaveValue:true,
              possuiSave:true,
              corBtnCancelar:'btn btn-primary ms-3'
           } as Alert
      }
      const dialogRef = this.modal.open(ModalComponent,propiedade);
      dialogRef.afterClosed().subscribe((options:boolean)=>{
        if(options){
          this.FilmesService.excluir(this.id).subscribe(() => this.router.navigateByUrl('filmes'));
        }
      })
   
  }

  private visualizar(id:number):void{
  this.FilmesService.vusualizarFilmes(id).subscribe((Filme :Filmes) => this.filme = Filme);

  }
}
