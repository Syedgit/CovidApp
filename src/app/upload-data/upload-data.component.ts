import { Component, OnInit } from '@angular/core';
import { DataSourceService } from '../data-source.service';
@Component({
  selector: 'app-upload-data',
  templateUrl: './upload-data.component.html',
  styleUrls: ['./upload-data.component.css']
})
export class UploadDataComponent implements OnInit {

  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(public dataService: DataSourceService) { }
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    console.log("file", this.fileData);
    this.preview();
 }

  preview() {
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
  }
  ngOnInit() {
  }

  uploadFile(){

    console.log("file", this.fileData);
    this.dataService.createFiles(this.fileData).subscribe( 
      result => {
       console.log("Result", result);
      }
   )
  }

}
