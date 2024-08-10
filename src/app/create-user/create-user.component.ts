import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  user = {
    name: "",
    mail: "",
    age: 0
  }

  onSubmit(createUserForm: any) {
    console.log(createUserForm.value);
  }

}
