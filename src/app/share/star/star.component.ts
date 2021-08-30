import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {

  @Input() pontuacao!:number;
  widthstar!:number;

  ngOnInit(): void {
    this.widthstar = this.pontuacao * 94/5;
  }

}
