import { Component, OnInit } from '@angular/core';
import { ListimageService } from '../../services/listimage.service';

@Component({
  selector: 'app-listimage',
  templateUrl: './listimage.component.html',
  styleUrls: ['./listimage.component.css']
})
export class ListimageComponent implements OnInit {

  Characters: any[] = []

  constructor(
    private ls: ListimageService
  ) { }

  ngOnInit(): void {
    this.ls.getCharacter().subscribe( res => {
      const imagen = res.results.map( (el: any) => el.image)
      this.Characters = imagen;
    })
  }

}
