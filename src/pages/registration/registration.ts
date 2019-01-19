import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterServiceProvider } from '../../providers/register/register-service';

@IonicPage({
  name: 'registration'
})

@Component({
  selector: 'page-register',
  templateUrl: 'registration.html',
  providers:[ RegisterServiceProvider ]
})
export class RegistrationPage {

  // Form groups will automate any data and validation in our forms
  private registerGroup: FormGroup;

  // The submit attempt for the user will start off as false,
  // and we'll switch it on button press.
  private submitAttempt: boolean = false;

  constructor(
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder,
    public loadCtrl: LoadingController,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private registerService: RegisterServiceProvider) 
    {
       // this command will set up the form validation.
       this.registerGroup = this.formBuilder.group({
        // the email is required
        email: ['', Validators.required],
        // the password is required
        password: ['', Validators.required],
        // name is required
        name: ['', Validators.required],
        // surname is required
        surname: ['', Validators.required]
      });
    }

  public registerUser(): void 
  {
    // first,  make a submit attempt.
    this.submitAttempt = true;

    // if the form doesn't validate, stop the function
    if (!this.registerGroup.valid)
    {
      return;
    }

    // Create and show a leading interface
    const loader = this.loadCtrl.create({
      content: 'Registering User...'
    });
    loader.present();

    this.registerService.registerUser(this.registerGroup.value).subscribe(
      // We are successful
      data => {
        loader.dismiss();
        this.navCtrl.setRoot('login', {}, {animate: true});
      },

      // We have an error, handle it.
      error => {
        loader.dismiss();

        const alert = this.alertCtrl.create({
          title: 'Cannot Register',
          subTitle: error.message,
          buttons: ['OK']
        });
        alert.present();
      }
    );
  }

  cancel(){
    this.viewCtrl.dismiss();
  }

}