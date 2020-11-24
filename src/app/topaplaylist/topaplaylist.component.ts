import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topaplaylist',
  templateUrl: './topaplaylist.component.html',
  styleUrls: ['./topaplaylist.component.scss']
})
export class TopaplaylistComponent implements OnInit {

  constructor() { }
  playlist=[];
  topPlaylist=[];
  ngOnInit(): void {
    this.playlist=JSON.parse(localStorage.getItem('playlistUsers'));
    console.log(this.playlist);
    
    this.playlist.forEach(item=>{
      if(!(item.idUser in this.playlist)){
        console.log(item);
        this.playlist[item.idUser]=true;
        this.topPlaylist.push(item.idUser)
      }
    });
    console.log(this.topPlaylist);
    
    
  }

}
