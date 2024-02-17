import { Component } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css', './small-card.responsivel.component.css']
})
export class SmallCardComponent {
  fotoUm: string = '././assets/imagem_placeholder.jpg';
  tituloUm: string = 'What is Lorem Ipsum?';
  paragrafoUm: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,";

  fotoDois: string = '././assets/imagem_placeholder.jpg';
  tituloDois: string = 'What is Lorem Ipsum?';
  paragrafoDois: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,";

  fotoTres: string = '././assets/imagem_placeholder.jpg';
  tituloTres: string = 'What is Lorem Ipsum?';
  paragrafoTres: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,";

}
