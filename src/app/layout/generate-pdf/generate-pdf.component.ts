import { ListBatches, ListFeePattern } from './../../model/FeePattern';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Student } from 'src/app/model/Student';

@Component({
  selector: 'app-generate-pdf',
  templateUrl: './generate-pdf.component.html',
  styleUrls: ['./generate-pdf.component.css']
})
export class GeneratePdfComponent implements OnInit {


 // public feePatternList = {} as ListFeePattern;
  public batchesList = {} as ListBatches;
 public admitDetails = {} as Student;
  id: string;
  filename: string;
  constructor(private apiService : DataService) { }

  ngOnInit(): void {
    this.getAllBatches();
  }

  getAllBatches() {
    this.apiService.getAllBatches().subscribe(data => {
      this.batchesList = data;
    },
      error => {
        alert(error.error.text);
      });
  }

  saveBatch() {
    this.apiService.GeneratePdf(this.admitDetails.student_batch).subscribe(data => {
      console.log(data); 
       this.filename = this.admitDetails.student_batch + '.xlsx';
            this.downloadFile(data, this.filename)
    },
      error => {
      
   
      });
  }

  downloadFile(blob, filename: string) {
    let a = document.createElement("a");
    var newBlob = new Blob([blob], { type: "application/pdf" });
    const data = window.URL.createObjectURL(newBlob);
    a.href = data;
    console.log(filename);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
  }



}
