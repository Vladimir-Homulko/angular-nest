import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function birthdayValidator(): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {

            const birthday = Date.parse(control.value);
            const now = Date.now();

            if (!birthday) {
                return null;
            }

            return (birthday - now) > 0 ? { birthday: true } : null;
      }
}