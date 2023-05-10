import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  passwordVisibility:boolean=false;
  logoImage:any;
  skils:string[]=[
    'Front-End',
    'Back-End',
    'DevOps',
    'CEO',
    'Writing',
    'SEO',
    'ProductOwner'
  ]
  constructor(
    private formBuilder: UntypedFormBuilder,
    private imageCompress: NgxImageCompressService,
  ) { }

  ngOnInit(): void {}
  formGroup = this.formBuilder.group({
    name: new UntypedFormControl('ابوالفضل', [Validators.required]),
    lastName: new UntypedFormControl('زراعتکار', [Validators.required]),
    email: new UntypedFormControl('abolfazl@inolinx.com', [Validators.required, Validators.pattern((/^(\d{10}|\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}))$/))]),
    password: new UntypedFormControl('password', [Validators.required, Validators.minLength(8)]),
  })
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
      let x;
      reader.onload = () => {
        this.compressImage(reader.result);
      };
      // this.testImage = x;
    }else{
      // this.errorObject = <{text:string,type:string}>{type:'image',text:'نوع فایل انتخابی قابل قبول نیست'}
    }
  }
}
