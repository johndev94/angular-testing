import { Component } from '@angular/core';
import { Player } from '../player';
import { JsonPipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './player.component.html',
  styleUrl: './player.component.css'
})
export class PlayerComponent {
  id: number = 0;
  newPlayer: Player = {"id": 10, "name": "John", full_name: "John Doe", dob: "1990-01-01"};

  constructor(private route: ActivatedRoute, private playerService: PlayersService) {
  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('playerID'));
    
    this.playerService.getPlayer(this.id).subscribe(
      data => {
        this.newPlayer = data;
        console.log(data);
      }
    );
  }
}
