import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil, tap } from 'rxjs';
import { ContactFormService } from 'src/app/services/contact-form.service';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnDestroy {
  private emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  private _destroy$ = new Subject<any>();

  public showSuccessMessage: boolean = false;

  contactForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  get buttonDisabled() {
    return this.contactForm.invalid || this.contactForm.disabled;
   }

  constructor(private fb: FormBuilder, private contactFormService: ContactFormService) {}


  sendMail() {

    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid)
    {

      this.contactForm.disable();
      this.contactFormService.sendMail(this.contactForm.value).pipe(
        tap(() => {
          this.contactForm.enable();
          this.showSuccessMessage = true;
          setTimeout(() => this.showSuccessMessage = false, 4000);

        }),
        takeUntil(this._destroy$)
      )
      .subscribe()

    }
  }


  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe()
  }

}
