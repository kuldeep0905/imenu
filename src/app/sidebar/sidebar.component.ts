import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private _router: Router,private toastr: ToastrService) { }

  ngOnInit() {
  }
  logout(){
    if (confirm("Are you sure, you want to logout?")) {
			localStorage.removeItem("imenu_user");
			this.toastr.success("Logout successsfully !", 'Logout!');
			this._router.navigate(['login']);
		} else {
			return false;
		}
  }
  

}
