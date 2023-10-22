import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ExcangeServiceService } from './excange-service.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild('pageselect') paginator!: MatPaginator

   constructor(private service: ExcangeServiceService){}


  title = 'exchangeFrontend';
   displayedColumns: string[] = ['icon','name','value']
  dataSource = new MatTableDataSource();
  ngOnInit(): void {
  //  this.fetchandsavedata()
   this.getdata()
}

applyFilter(filterValue:any){
  console.log("filterValue--->",filterValue)
  this.dataSource.filter=filterValue
}
  getdata(){
    this.service.getdata().subscribe(res=>{

       this.dataSource=new MatTableDataSource(res.results)
       this.dataSource.paginator = this.paginator
      console.log("dataSource--->",res.results)

})
  }
  fetchandsavedata(){
    this.service.fetchandsaveData().subscribe(res=>{
      console.log("res-->",res)
    })
  }

}
