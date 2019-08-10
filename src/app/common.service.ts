import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
  
})
export class CommonService {
  setToggle(arg0: boolean) {
    throw new Error("Method not implemented.");
  }
  API_URL:string='http://52.27.53.102:3434/';
  userids
  toggle: any;


  constructor( private httpClient: HttpClient, private toastr: ToastrService, private spinner: NgxSpinnerService) { }

  public login<T>(requestObj: any): Observable<T> {
		return this.httpClient.post<T>(`${this.API_URL}api/adPanel/login`, requestObj);
	}

	public register<T>(requestObj: any): Observable<T> {
		return this.httpClient.post<T>(`${this.API_URL}merchant/signup`, requestObj);
	}


	public send_notifications<T>(obj): Observable<T> {
		console.log(JSON.parse(localStorage.getItem('admin_user')).token);
		const headers = new HttpHeaders({ 'accesstoken': JSON.parse(localStorage.getItem('imenu_user')).token });
		return this.httpClient.post<T>(`${this.API_URL}event/send_notification`, obj, { headers: headers });
	}
  postApi(url, data, isHeader): Observable<any> {
		// this.spinner.show();
		console.log(`entered in post api `)
		if (isHeader == 0) {
			console.log(`header 0`)
			var httpOptions;
			httpOptions = {
				headers: new HttpHeaders({ "Content-Type": "application/json" })
			}

			return this.httpClient.post((this.API_URL + url), data, httpOptions)
		}
		else if (isHeader == 1) {
			var httpOptions;
			httpOptions = {

				headers: new HttpHeaders({
					"token": JSON.parse(localStorage.getItem('imenu_user'))[0].token,
					// "_id": localStorage.adminId,
					/* 	"Content-Type": "application/json" */
				})
			}
			return this.httpClient.post((this.API_URL + url), data, httpOptions)
		}
  }

  getApi(url, isHeader) {

	if (isHeader == 0) {
		var httpOptions;
		httpOptions = {
			headers: new HttpHeaders({ "Content-Type": "application/json" })
		}
		return this.httpClient.get((this.API_URL + url), httpOptions)
	}
	else if (isHeader == 1) {
		// console.log('token', localStorage.token)
		var httpOptions;
		httpOptions = {
			headers: new HttpHeaders({ "token": JSON.parse(localStorage.getItem('imenu_user'))[0].token, "Content-Type": "application/json" })
		}
		return this.httpClient.get((this.API_URL + url), httpOptions)
	}
}

  showSpinner() {
		this.spinner.show()
	}
	hideSpinner() {
		this.spinner.hide()
	}

	showSuccess(msg) {
		this.toastr.success(msg);
	}
	showError(msg) {
		this.toastr.error(msg)
	}
	showBug(msg) {
		this.toastr.info(msg)
	}
}
