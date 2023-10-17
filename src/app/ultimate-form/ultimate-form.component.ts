import { Component, Input } from "@angular/core";
import { UltimateFormControl } from "./altimate-form.model";

const defaultControlValues={
  type:'text',
  placeholder:'',
}

@Component({
  selector: "app-ultimate-form",
  templateUrl: "./ultimate-form.component.html",
  styleUrls: ["./ultimate-form.component.css"],
})
export class UltimateFormComponent{
  fieldValues : any = {};
  fieldControls:UltimateFormControl[]=[];

  @Input() set fields(fields:(UltimateFormControl|string)[]) {
    this.fieldControls = fields.map(field =>{
      if(typeof field === "string"){
        return {...defaultControlValues,name:field, displayName:field}
    }else{
      return {
        ...defaultControlValues,
        displayName:field.name,
        ...field};
    }})

    this.fieldControls.forEach(control => {       
      this.fieldValues[control.name]='';
  })
  };


  constructor(){ }



  onSubmit = () => {
    const output:string = Object.entries(this.fieldValues).map(entry=>`${entry[0]}:${entry[1]}`).join('\n');
    alert(output);
    // alert(JSON.stringify(this.fieldValues));
  };
}
