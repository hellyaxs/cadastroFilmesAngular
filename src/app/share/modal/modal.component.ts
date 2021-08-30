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
  possuiFechar:false,
  possuiSave:true,
  SaveValue:true,
  CloseValue:false,
  corBtnSave:'btn btn-danger',
  corBtnCancelar:'btn btn-primary',
  BtnTextClose:'Cancelar',
  BtnText:'Ok'

} as Alert

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alert) { }

  ngOnInit(): void {
    if (this.data) {
      this.Alert.titulo = this.data.titulo || this.Alert.titulo;
      this.Alert.descricao = this.data.descricao || this.Alert.descricao;
      this.Alert.possuiSave = this.data.possuiSave || this.Alert.possuiSave;
      this.Alert.possuiFechar = this.data.possuiFechar || this.Alert.possuiFechar;
      this.Alert.corBtnCancelar = this.data.corBtnCancelar || this.Alert.corBtnCancelar;
      this.Alert.corBtnSave = this.data.corBtnSave || this.Alert.corBtnSave;
      this.Alert.BtnTextClose = this.data.BtnTextClose || this.Alert.BtnTextClose;
      this.Alert.BtnText = this.data.BtnText || this.Alert.BtnText;
     
    }

  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
