import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { UltimateFormControl, UltimateFormValidations } from './ultimate-form/altimate-form.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formControls') formControls!:ElementRef;
  ultimateFormControls :(UltimateFormControl|string)[]=[
   'name',
   {name:'age',type:'number',validationFns:[UltimateFormValidations.isEmpty]}, 
   {name:'password',type:'password',placeholder:'Enter 8 - 16 digits password',validationFns:[UltimateFormValidations.isEmpty,UltimateFormValidations.isShorterThanEight]}, 
    {name:'favoriteColor',displayName:'My Favorite Color'},
  ]
  title = 'angular-reusable-form';

  constructor(private renderer:Renderer2){}

  updateForm(){
    const formControlsString = this.formControls.nativeElement.value;
    this.ultimateFormControls = formControlsString
    .split(';')
    .filter((formControlString: string)=>formControlString.length >0)
    .map((formControlString: string) => {   
    let formControl:UltimateFormControl|null = null;

     try {
      formControl = JSON.parse(formControlString.replaceAll('\'','\"'));
     }finally{
      return (formControl && formControl.name? formControl:formControlString)
     } 
    })
  }
}
