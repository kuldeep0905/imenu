import { Component, OnInit } from '@angular/core';
import { CommonService} from '../common.service'

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  merchant:any
  show=true;
  andShow=true;
  respo:any;
  mer:any;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.show=false;
    this.commonService.getApi('api/adPanel/onlineTransactions',1).subscribe((data)=>{
      if (data['code'] == 200) {
console.log(data)
console.log(data['result'])
this.merchant=data['result']
this.mer=this.merchant['merchants_online_data']
console.log(this.merchant['merchants_online_data'])
      }else {
        this.commonService.showBug(data['message'])
      }
    },
    error => {
      console.log('error occur', error)
      this.commonService.showError('Server Error')



    })
  }

  MerchantDetails(id){
    this.show=true
    this.andShow=false;
     let temp={
      mid:id
    }
    this.commonService.postApi('api/adPanel/onlineOrderDetails',temp,1).subscribe((response)=>{
      if (response['code'] == 200) {
      this.respo=response['result']
      console.log(response)
      }
      else {
        this.commonService.showBug(response['message'])
      }
    }, error => {
      console.log('error occur', error)
      this.commonService.showError('Server Error')



    }
    )
  }

  back(){
    window.location.reload();
  }


}
