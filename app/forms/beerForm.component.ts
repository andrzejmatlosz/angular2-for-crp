import { Component } from '@angular/core';
import { Beer }    from './beer.model';

@Component({
  selector: 'beer-form',
  templateUrl: 'app/forms/beerForm.component.html'
})
export class BeerFormComponent {
    public companies: Array<string> = ['Kompania Piwowarska', 'Carlsberg', 'Żywiec'];
    public model: Beer = new Beer();
    public submitted: boolean = false;

    onSubmit() { 
        this.submitted = true; 
    }

    showAlert(message:string) {
        alert(message);
    }
    
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}
