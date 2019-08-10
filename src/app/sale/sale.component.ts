import { Component, OnInit } from '@angular/core';
import { CommonService} from '../common.service'

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  sales:any;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
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
