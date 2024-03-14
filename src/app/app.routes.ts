import { Routes } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { ClickedButtonComponent } from './clicked-button/clicked-button.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form/form.component';
import { EmployeeComponent } from './employee/employee.component';
import { PlayerComponent } from './player/player.component';

export const routes: Routes = [
    { path: 'players', component: PlayersComponent, title: 'Players'}, // /players
    { path: '', component: MyButtonComponent, title: 'My Button'}, // default route
    { path: 'clicked-button', component: ClickedButtonComponent, title: 'Clicked Button'},
    { path: 'employee', component: EmployeeComponent, title: 'Employee'},
    { path: 'form', component: FormComponent, title: 'Form'},
    { path: 'player/:playerID', component: PlayerComponent, title: 'Player Details'},
];
