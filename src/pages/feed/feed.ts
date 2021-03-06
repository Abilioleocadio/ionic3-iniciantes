import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';


@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider
  ]
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Abílio Leocádio",
    data: "November 5, 1955",
    descricao: "Estou criando um App.",
    qtde_likes: 12,
    qtde_comments: 4,
    time_comment: "11h ago"
  }

  public nomeUsuario: string = "Abílio Leocádio do Código";

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private movieProvider: MoovieProvider) {
  }

  public somaDoisNumeros(num1: number, num2: number): void {
    alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatesMoovies().subscribe( 
      data => {
        console.log(data);
      }, error => {
        console.log(error); 
      } 
    )
  }

}
