import { RegistrationResponse } from './../../types/registrationResponse.interface';
import { DatabaseService } from './../../shared/services/database.service';
import { AuthenticationService } from './../../shared/services/authentication.service';
import {
  Component,
  ComponentRef,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { User } from './../../types/user.interface';

interface FormData {
  username: string;
  email: string;
  password: string;
  confirm: string;
};

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  @ViewChild('form') form: NgForm;
  public componentRef: ComponentRef<RegisterComponent>;
  public loginServices = [
    { name: 'google', isPressed: false},
    { name: 'facebook', isPressed: false }
  ];

  constructor(private authService: AuthenticationService, private dbService: DatabaseService) {}
  ngOnInit() {}

  public cancel = () => this.componentRef.destroy();

  public onSubmit (form: NgForm) {
    console.log(form);
    // if (form.invalid) {
    //   alert('form is invalid');
    // }

    // if (form.value.password !== form.value.confirm) {
    //   alert('password and password confirmation are not identical.');
    // }

    this.createUser(form.value);

    this.cancel();
  }

  public togglePressed (value: string): void {
    const service = this.loginServices.find(loginService => loginService.name === value);
    service.isPressed = !service.isPressed;
  }

  public loginWithService (value: string) {
    console.log(value);
  }

  private createUser (values: FormData) {

    values.email = 'jessephilip@gmail.com';
    values.password = 'tootaloo';
    values.username = 'jessephilip';
    this.authService.createUserWithEmailAndPassword(values.email, values.password)
      .then((registered: RegistrationResponse) => {
        // registration was successful
        console.log('registered success:', registered);
        // save uid, save email, save username
        // const registrationObject = {
        //   email: registered.email,
        //   uid: registered.uid,
        //   username: values.username
        // };

        // this.dbService.set('users', `${registrationObject.uid}/profile/credentials`, registrationObject)
        //   .then(() => {
        //     this.dbService.getUserDb(registered.uid);
        //   });

        // create database entries
        // const user = {
        //   email: values.email,
        //   password: values.password
        // };

        // this.dbService.update(user);
      })
      .catch(error => {
        // registration was not successful.
        console.log(error)
      });
  }

}
