import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alert } from '../models/alert';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  Alert = {

  titulo:'SUCESSO!!!',
  descricao:'Seu cadatro foi realizado com sucesso',
  Close:false,
  Save:true,
  possuiFechar:false,
  possuiSave:true,
  corBtnCancelar:'btn btn-primary'

} as Alert

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert) { }

  ngOnInit(): void {
    if (this.data) {
      this.Alert.titulo = this.data.titulo || this.Alert.titulo;
      this.Alert.descricao = this.data.descricao || this.Alert.descricao;
      this.Alert.Close = this.data.Close || this.Alert.Close;
      this.Alert.Save = this.data.Save || this.Alert.Save;
      this.Alert.possuiSave = this.data.possuiSave || this.Alert.possuiSave;
      this.Alert.possuiFechar = this.data.possuiFechar || this.Alert.possuiFechar;
      this.Alert.corBtnCancelar = this.data.corBtnCancelar || this.Alert.corBtnCancelar;
     
    }

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
