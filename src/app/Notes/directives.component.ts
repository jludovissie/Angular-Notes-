import { Component, VERSION } from '@angular/core' 
import { DirectiveService } from '../Notes/directive.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directives.component.html',
  styleUrls: [ './directives.component.css' ]
})
export class DirectivesComponent  {

constructor( private directiveService: DirectiveService ){} 
myFamily;

ngOnInit(): void{
  
}
 ludovissieFamily = ['Jordan', 'Paul', 'Stephanie', 'Alexis', 'Hallie']
 ludovissieAge = ['30', '50', '49', '28', '20' ]

 love = true; 


 numberOfPets = 2;

 addPet(){
  this.numberOfPets++
 }
 clearPet(){
   this.numberOfPets = 0; 
 }
}