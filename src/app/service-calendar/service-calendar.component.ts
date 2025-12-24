import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-calendar',
  templateUrl: './service-calendar.component.html',
  styleUrls: ['./service-calendar.component.css']
})
export class ServiceCalendarComponent {
  showAppointmentForm = false;
  showSuccessMessage = false;
  firstNameError = '';
  lastNameError = '';
  emailError = '';
  phoneError = '';
  firstNameTouched = false;
  lastNameTouched = false;
  emailTouched = false;
  phoneTouched = false;
  appointmentForm = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  };

  constructor(private router: Router) {}

  openAppointmentForm() {
    this.showAppointmentForm = true;
  }

  closeAppointmentForm() {
    this.showAppointmentForm = false;
    this.resetForm();
  }

  viewAppointments() {
    this.router.navigate(['/view-appointment']);
  }

  onFirstNameBlur() {
    this.firstNameTouched = true;
    this.validateFirstNameField();
  }

  validateFirstNameField() {
    this.firstNameError = '';
    const firstName = this.appointmentForm.firstName.trim();

    if (!firstName) {
      this.firstNameError = 'First Name is required';
      return false;
    }

    return true;
  }

  onLastNameBlur() {
    this.lastNameTouched = true;
    this.validateLastNameField();
  }

  validateLastNameField() {
    this.lastNameError = '';
    const lastName = this.appointmentForm.lastName.trim();

    if (!lastName) {
      this.lastNameError = 'Last Name is required';
      return false;
    }

    return true;
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePhone(phone: string): boolean {
    const phoneRegex = /^[0-9\-\+\(\)\s]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
  }

  onEmailBlur() {
    this.emailTouched = true;
    this.validateEmailField();
  }

  validateEmailField() {
    this.emailError = '';
    const email = this.appointmentForm.email.trim();

    if (!email) {
      this.emailError = 'Please type a valid email';
      return false;
    }

    if (!this.validateEmail(email)) {
      this.emailError = 'Please type a valid email';
      return false;
    }

    return true;
  }

  onPhoneBlur() {
    this.phoneTouched = true;
    this.validatePhoneField();
  }

  validatePhoneField() {
    this.phoneError = '';
    const phone = this.appointmentForm.phone.trim();

    if (!phone) {
      this.phoneError = 'Phone number is required';
      return false;
    }

    const digits = phone.replace(/\D/g, '');
    if (digits.length < 10) {
      this.phoneError = `Phone number must have at least 10 digits (you have ${digits.length})`;
      return false;
    }

    if (!this.validatePhone(phone)) {
      this.phoneError = 'Please enter a valid phone number (e.g., 123-456-7890 or (123) 456-7890)';
      return false;
    }

    return true;
  }

  createAppointment() {
    this.firstNameTouched = true;
    this.lastNameTouched = true;
    this.emailTouched = true;
    this.phoneTouched = true;

    const isFirstNameValid = this.validateFirstNameField();
    const isLastNameValid = this.validateLastNameField();
    const isEmailValid = this.validateEmailField();
    const isPhoneValid = this.validatePhoneField();

    if (!isFirstNameValid || !isLastNameValid || !isEmailValid || !isPhoneValid) {
      return;
    }

    console.log('Appointment created:', this.appointmentForm);
    this.showSuccessMessage = true;
    
    setTimeout(() => {
      this.showSuccessMessage = false;
      this.closeAppointmentForm();
    }, 2000);
  }

  resetForm() {
    this.appointmentForm = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };
    this.firstNameError = '';
    this.lastNameError = '';
    this.emailError = '';
    this.phoneError = '';
    this.firstNameTouched = false;
    this.lastNameTouched = false;
    this.emailTouched = false;
    this.phoneTouched = false;
  }
}
