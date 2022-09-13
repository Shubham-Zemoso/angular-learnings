import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  genders = ["male", "female"];
  signupForm: FormGroup;
  forbiddenUsernames = ["Chris", "Max"];

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenName.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails
        ),
      }),

      gender: new FormControl("male"),
      hobbies: new FormArray([]),
    });

    // value changes
    // this.signupForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // status changes
    // this.signupForm.statusChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // setValue - to change all values
    // this.signupForm.setValue({
    //   userData: {
    //     username: "max",
    //     email: "abc@abc.com",
    //   },
    //   gender: "female",
    //   hobbies: [],
    // });

    // patchValue - to change some values
    // this.signupForm.patchValue({
    //   userData: {
    //     username: "max",
    //     email: "abc@abc.com",
    //   },
    // });
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get("hobbies")).push(control);
  }

  onSubmit() {
    console.log(this.signupForm);
    // to reset a form
    // can reset only specific controls also
    this.signupForm.reset();
  }

  //custom Validator
  forbiddenName(control: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return { nameIsForBidden: true };
    }

    return null;
  }

  //async custom validator
  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "test@test.com") {
          resolve({ emailIsFrobidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
