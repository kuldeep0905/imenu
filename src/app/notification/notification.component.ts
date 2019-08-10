import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonService } from '../common.service';
import { ToastrService } from 'ngx-toastr';
import { Validators } from '@angular/forms';
import { format } from 'url';




declare var $: any;


@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  // form = new FormGroup({
  //   item: new FormControl(''),
  //   title: new FormControl(''),
  //   description: new FormControl('')
  // });
  form;
  items: { name: string; value: string; }[];

  constructor(private commonService: CommonService,private toastr: ToastrService,private toasterservice: ToastrService, private formbuilder: FormBuilder) {
    this.items = [
      { name: 'MERCHANTS', value: "0"},
      { name: 'USERS', value: "1" },
      { name: 'BOTH', value: "2"}
    ]
    this.createForm()
  }

  createForm() {
    this.form = this.formbuilder.group({
      item: [''],
      title: ['', Validators.compose([
        Validators.required, // Field is required
      ])],
      description: ['', Validators.compose([
        Validators.required, // Field is required
      ])],
    })
  }

  ngOnInit() {

   }

  send(val) {
    console.log($('#getValue').val())
    let temp = {
      // item:this.form.get('item').value,
      sendTo: $('#getValue').val(),
      title: val.title,
      message: val.description,
      object: " lorem lorem lorem"
    }

    this.commonService.postApi('api/adPanel/pushNotification', temp, 1).subscribe((data) => {
      if (data['code'] == 200) {
      console.log(data);
      this.toastr.success("send successfully !", 'Notification');
      }else {
        this.commonService.showBug(data['message'])
      }
    },
    error => {
      console.log('error occur', error)
      this.commonService.showError('Server Error')
  
  
  
    }

    )
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.ngOnInit()
  }
  back(){
    window.location.reload();
  }
 
}
