import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service'
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.scss']
})
export class MerchantComponent implements OnInit {
  merchant:any;
  merchantDetail:any
  merchantDetailss:any;
  show=true;
  totalSale:any;
  andShow=true;
  review:any[]=[];
  abc=false;
  dat:any;
  kool=false;
  size:any;
  aaa:any;

  constructor(private commonService: CommonService) { 


    

  }

  ngOnInit() {
    

    this.commonService.getApi('api/adPanel/merchantList',1).subscribe((data)=>{
      if (data['code'] == 200) {
      console.log(data)
      this.merchant=data['result']
      console.log(this.merchant)
    }else {
      this.commonService.showBug(data['message'])
    }
  },
  error => {
    console.log('error occur', error)
    this.commonService.showError('Server Error')
 })
  }

  merchantDetails(id){
    this.show=false;
    //this.andShow=false;

    let temp={
      mid:id
    }

    this.commonService.postApi("api/adPanel/merchantDetail",temp,1).subscribe((data)=>{
this.merchantDetail=data['result'];
      console.log(data)
    })   
      }

      sales(id){
        // this.show=false;
        // this.andShow=false;
      let  temp={
          mid:id
        }

        this.commonService.postApi('api/adPanel/merchantSale',temp,1).subscribe((data)=>{
          if (data['code'] == 200) {
          this.merchantDetailss=data['result'];
          console.log(data)
          console.log(this.merchantDetailss)
          this.totalSale = this.merchantDetailss[0].total_sale;
          }else
          this.commonService.showError(data['message'])
        })
      }

      reviews(id){
        // this.show=false
        // this.andShow=false;
        // this.abc=true;
        let temp={
          mid:id
        }
        
        this.commonService.postApi('api/adPanel/merchantReviews',temp,1).subscribe((data)=>{
          if (data['code'] == 200) {
            this.show=false
            this.andShow=false;
            this.abc=true;
          this.review[0]=data['result'];
          
          console.log(data)
          console.log(this.review)
           console.log(this.review[0].comments)
           this.aaa=this.review[0].comments
          console.log(this.review[0].ratings)
          let z = parseFloat(this.review[0].ratings);
    // Turn value into number/100
     this.size = z/5*100;
    this.size= this.size + '%';
          
 }else
        this.commonService.showError(data['message'])
          
          
        })
        
      }
      back(){
        console.log("backk")
        window.location.reload();
      }

      reply(rep){
        this.kool=true;
        this.abc=false;
        let temp={
          cid:rep
        }
        this.commonService.postApi('api/adPanel/replies',temp,1).subscribe((data)=>{
          if (data['code'] == 200) {
          console.log(data)
         this.dat=data['result']
          console.log(this.dat)
        } else {
          this.commonService.showBug(data['message'])
        }
      }, error => {
        console.log('error occur', error)
        this.commonService.showError('Server Error')
  
  
  
      
        })
        
      }
      

}
