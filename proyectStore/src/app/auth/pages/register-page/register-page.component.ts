import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
// const id: void <string>
export class RegisterPageComponent implements OnInit {
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  public heroForm = new FormGroup({
    id: new FormControl<string>(''),
    name: new FormControl<string>(''),
    lastname: new FormControl<string>(''),
    email: new FormControl<string>(''),
    user: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });
  

  onSubmit():void{

    if (this.heroForm.invalid)return;

    // if ( this.currentHero.id ) {
    //   this.heroesService.updateHero( this.currentHero )
    //     .subscribe( hero => {
    //       this.showSnackbar(`${ hero.superhero } updated!`);
    //     });


    console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.getRawValue()
    })
  }

}
