import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Gallery, GalleryRef } from '@ngx-gallery/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  url: string = 'api/adPanel/userCount';
  data: any;
  sales:any;
   kool:any[]=[]

  constructor(private commonService: CommonService) {

    

  }

  ngOnInit() {

    this.commonService.getApi(this.url, 1).subscribe(response => {
      if (response['code'] == 200) {
        this.data = response['result']
        this.kool[0]=response
        console.log(this.kool)
        console.log(this.data)

        console.log(response)
      } else {
        this.commonService.showBug(response['message'])
      }
    }, error => {
      console.log('error occur', error)
      this.commonService.showError('Server Error')



    })

    this.commonService.getApi('api/adPanel/salesDetail',1).subscribe((data)=>{
      if (data['code'] == 200) {
      console.log(data)
      this.sales=data['result']

    } else {
      this.commonService.showBug(data['message'])
    }
  }, error => {
    console.log('error occur', error)
    this.commonService.showError('Server Error')



  
    })

  }

  
  
  
}

