import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ProfileService } from 'src/app/services/api/profile.service';
import { UserService } from 'src/app/services/auth/user.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { IProfile } from 'src/app/shared/interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  passwordVisibility:boolean=false;
  logoImage:any = null;
  skils:string[]=[
    'Front-End',
    'Back-End',
    'DevOps',
    'CEO',
    'Writing',
    'SEO',
    'ProductOwner'
  ]
  profile:IProfile = <IProfile>{};
  constructor(
    private formBuilder: UntypedFormBuilder,
    private imageCompress: NgxImageCompressService,
    private global: GlobalService,
    private profileService: ProfileService,
    private user: UserService,
  ) { }

  ngOnInit(): void {
    this.updateForm(5)
  }
  formGroup = this.formBuilder.group({
    name: new UntypedFormControl(this.profile.first_name, [Validators.required]),
    lastName: new UntypedFormControl(this.profile.last_name, [Validators.required]),
    email: new UntypedFormControl(this.profile.email, [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required, Validators.minLength(8)]),
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
  updateForm(tryCount:number){
    if(tryCount < 1){
      // this.global.setLoading(false);
      return 
    }
    if(JSON.stringify(this.user.getProfile()) == '{}'){
      // this.global.setLoading(true);
      setTimeout(() => {
        return this.updateForm(tryCount-1)
      }, 200);
    }else{
      this.profile = this.user.getProfile();
      this.formGroup.get('name')?.setValue(this.profile.first_name)
      this.formGroup.get('lastName')?.setValue(this.profile.last_name)
      this.formGroup.get('email')?.setValue(this.profile.email)
      // this.global.setLoading(false);
      return
    }      
  }
  edit(){
    if(this.formGroup.get("first_name")?.valid && this.formGroup.get("last_name")?.valid && this.formGroup.get("email")?.valid && (this.formGroup.get("password")?.valid || this.formGroup.get("password")?.value=='')){
      let form = this.formGroup.value
      if(this.formGroup.get('password')?.value=='')
        delete form.password
      if(this.logoImage!=null)
        form.image = this.logoImage;
    }
  }
}
