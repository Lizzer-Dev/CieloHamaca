import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(protected fb: FormBuilder) {
    this.form = this.fb.group([{
     /* name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^\\d{7,14}$')]],
      email: ['', [Validators.email, Validators.pattern('[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'), Validators.required]],
      artesania: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3)]],
      is_requeride: false*/
    }]);
  }

  get f() {return this.form.controls}

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
  }
}
