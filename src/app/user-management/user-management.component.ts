import {Component,OnInit} from '@angular/core';
import {CommonService} from '../common.service'
declare var $:any;

@Component( {
    selector: 'app-user-management',
    templateUrl: './user-management.component.html',
    styleUrls: ['./user-management.component.scss']
  }

) export class UserManagementComponent implements OnInit {
  data: any;
  res: any;
  show=true
  SHOW=true;
  andShow=true;
  od=true;
  orderDetail:any[]=[];

  
  kool:any;
   constructor(private commonService: CommonService) {}

  ngOnInit() {

    this.commonService.getApi('api/adPanel/imenuUserList', 1).subscribe((response)=> {
      if (response['code'] == 200) {
        console.log(response);
        this.data=response['result']
      }else {
        this.commonService.showBug(response['message'])
      }
    },
    error => {
      console.log('error occur', error)
      this.commonService.showError('Server Error')



    }
      
      

    )
  }

  userDetails(id) {

    // console.log(id)
    this.show=false
    this.andShow=false
     let temp= {
      uid: id
    }

    this.commonService.postApi('api/adPanel/userProfile', temp, 1).subscribe((response)=> {
      if (response['code'] == 200) {
        console.log(response);
        console.log(response['result']) 
        this.res=response['result'] 
        // console.log(JSON.parse(localStorage.getItem('imenu_user'))[0].token)
      }else
      this.commonService.showError(response['message'])
        
})
  }
  orderHistory(id){
    this.SHOW=false

    let temp= {
      uid: id
    }

    this.commonService.postApi('api/adPanel/orderHistory',temp,1).subscribe((data)=>{
      if (data['code'] == 200) {
      this.show=false
      console.log(data)
      this.kool=data['result'];
       console.log(this.kool)
       console.log(this.kool.length)
    //   console.log(this.kool[0])
    //   this.kool=this.kool[0]
    //   console.log(this.kool['items'])
    // this.kool=this.kool['items']   
      }else
      this.commonService.showError(data['message'])       
    })
  }
  back(){
    window.location.reload();
  }

  orderDetails(oid){
    
this.od=false
for(let i=0;i<=this.kool.length;i++)
{
  console.log("oiddunderloop",oid);
  if(oid==this.kool[i].oid)
  {
    
    this.orderDetail[0]=this.kool[i]

    console.log(this.orderDetail);
    
    // console.log(this.orderDetail);
    // console.log(this.orderDetail['title']);
    
  }
}
console.log("ordererer",this.orderDetail);

  }
  pdf(ab){
    window.open(ab, "_blank");
  }
 
}
