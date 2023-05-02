import { Component, Input, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';
import { INewProject } from '../../interface/new-project';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  @Input() prevDatas:INewProject={
    isNew: true,
    title: undefined,
    urlTitle: undefined,
    owner: undefined,
    info: undefined,
    startDate: undefined,
    endDate: undefined
  };
  startDateControl:any;
  endDateControl:any;
  config:any={
    calendar:'jalali',
    doneText:'تایید',
    cancelText:'انصراف',
    themeConfig: {
      light: {
          primaryColor: "#3f51b5", // string
          secondaryColor: "#444444", // string
          backgroudColor: "#ffffff" // string
      },
      dark: {
          primaryColor: "#ffffff", //string
          secondaryColor: "#eeeeee", // string
          backgroudColor: "#444444" // string
      },
      rounded: "medium" // flase | "medium" | "full"
    }
  }
  logoImage:any=undefined;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private imageCompress: NgxImageCompressService
  ) { }
  formGroup = this.formBuilder.group({
    title: new UntypedFormControl(this.prevDatas.isNew?this.prevDatas.title:'', [Validators.required]),
    urlTitle: new UntypedFormControl(this.prevDatas.isNew?this.prevDatas.urlTitle:'', [Validators.required]),
    owner: new UntypedFormControl(this.prevDatas.isNew?this.prevDatas.owner:'', [Validators.required]),
    info: new UntypedFormControl(this.prevDatas.isNew?this.prevDatas.info:'', [Validators.required]),
    startDate: new Date(),
    endDate: new Date(),
  });
  ngOnInit(): void {
  }
  compressImage(img: any) {
    img = img.replace('image/jpeg' , 'image/webp')
    img = img.replace('image/jpg' , 'image/webp')
    img = img.replace('image/JPEG' , 'image/webp')
    img = img.replace('image/JPG' , 'image/webp')
    img = img.replace('image/Jpeg' , 'image/webp')
    img = img.replace('image/png' , 'image/webp')
    img = img.replace('image/Png' , 'image/webp')
    img = img.replace('image/PNG' , 'image/webp')
    this.imageCompress.compressFile(img, -1, 85, 85 , 400 , 400).then(
      result => {
        // do something with the compressed image
        // this.getData.img = result;
        this.logoImage = result;
      });
  }  
  uploadLogo($event:any) {
    let file = $event.target.files[0]; // <--- File Object for future use.
    let fileType = file!.name.split('.').at(-1)
    let array_type = ['jpg', 'png','PNG','JPEG','JPG', 'jpeg', 'gif', 'bmp', 'webp' , 'tif', 'tiff']
    if(array_type.includes(fileType)){
      // this.eduInfoForm.controls['image'].setValue(file ? file : null); // <-- Set Value for Validation
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.compressImage(reader.result);
      };
    }else{
      // this.errorObject = <{text:string,type:string}>{type:'image',text:'نوع فایل انتخابی قابل قبول نیست'}
    }
  }
  log(e:any){
    // console.log(e);
  }
  console(){
    console.log(this.formGroup)
  }
}
