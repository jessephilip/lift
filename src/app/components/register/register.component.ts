import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  public componentRef: ComponentRef<RegisterComponent>;
  public isLoginPressed = {
    'google': {
      'pressed' : false
    },
    'facebook': {
      'pressed' : false
    }
  };

  constructor() {}
  ngOnInit() {}

  public cancel = () => this.componentRef.destroy();

  public onSubmit (form: NgForm) {
    console.log(form);
    if (form.invalid) {
      alert('form is invalid');
    }

    if (form.value.password !== form.value.confirm) {
      alert('password and password confirmation are not identical.');
    }
  }

  public loginWithService(value: string) {
    alert(value);
  }

}
