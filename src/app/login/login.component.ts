import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ToastrService } from 'ngx-toastr';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
declare var $: any;
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	public user: any = localStorage.getItem('imenu_user') ? JSON.parse(localStorage.getItem('imenu_user')) : { first_name: '', last_name: '', email: '', password: '', phone: '', country_code: '', my_referral_code: '', termsandcondition: false };
  myGroup: any;
  
	constructor(private commonService: CommonService, private toastr: ToastrService, private _router: Router, private _fb: FormBuilder) {


		this.myGroup = this._fb.group({
			email: ['', Validators.compose([Validators.required, Validators.pattern(/^[A-Z0-9_-]+([\.-][A-Z0-9_-]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,4})+$/i)])],
			// email:['',],
			// pass: ['',Validators]
			password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
		})
	}


	ngOnInit() {
		//$('#wrapper').css('padding-left', '0px');
    
      if (localStorage.getItem('imenu_user')) {
        this._router.navigate(['dashboard'])
    }
    
    
	}


submitEnq(register_form) {
  this.commonService.showSpinner();

  this.commonService
    .login<any[]>(register_form)
    .subscribe((data: any) => {
    
      this.commonService.hideSpinner();
// localStorage.setItem("asdfasdf",'asdfasdf')
      if (data['code'] == 200) {

        // this.toastr.success(data.message, 'Login Success!!');
        this.myGroup.reset();
        localStorage.setItem('imenu_user', JSON.stringify(data.result));
        this._router.navigate(['dashboard']);
      } else {
        this.toastr.error(data['message'], 'Login Failed!!');
        
      }
    },
      error => () => {
        this.toastr.error(error + 'Something went wrong!', 'Error!!');
      },
      () => {
        //console.log('');
      });
}


}

