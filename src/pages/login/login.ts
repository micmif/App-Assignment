import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../providers/user-service/user-service';

@IonicPage({
  name: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [ UserService ]
})
export class LoginPage 
{
  // Form Groups will automate any data and validation
  // in our forms.
  private loginGroup: FormGroup;

  // The submit attempt for the user will start off as false
  // and we'll switch it on button press.
  private submitAttempt: boolean = false;


  constructor(
    public formBuilder: FormBuilder,
    public navCtrl: NavController, 
    public navParams: NavParams,
    private userService: UserService)
    {
      this.loginGroup = this.formBuilder.group({
        // the email field is required
        email: ['', Validators.required],

        // the password field is requred 
        password: ['', Validators.required]
      });
    } 

    // processes and sends the login request.
    public login(): void
    {
      // first, make a submit attempt
      this.submitAttempt = true;

      // if the form doesn't validate, stop the function
      if (!this.loginGroup.valid)
      {
        return;
      }

      // Observable functiions will only start their code if we write subscribe()
      this.userService.login(this.loginGroup.value).subscribe(
        // We are successful, do the rest
        data => {
          console.log("We are successful!");
          console.log(data);
        },

      // We have an error, handle it
        error => {
          console.log("We have failed!");
          console.log(error);
        }
      );
    }
}
