import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxImageCompressService } from 'ngx-image-compress';
import { ProfileService } from 'src/app/services/api/profile.service';
import { UserService } from 'src/app/services/auth/user.service';
import { IProfile } from 'src/app/shared/interface';
import { AvatarsComponent } from './avatars/avatars.component';

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
  image!:File;
  profile:IProfile = <IProfile>{};
  constructor(
    private formBuilder: UntypedFormBuilder,
    private imageCompress: NgxImageCompressService,
    private profileService: ProfileService,
    private user: UserService,
    private snack: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.updateForm(5)
  }
  formGroup = this.formBuilder.group({
    first_name: new UntypedFormControl(this.profile.first_name, [Validators.required]),
    last_name: new UntypedFormControl(this.profile.last_name, [Validators.required]),
    email: new UntypedFormControl(this.profile.email, [Validators.required, Validators.email]),
    password: new UntypedFormControl('', [Validators.required, Validators.minLength(8)]),
    specialty: new UntypedFormControl(this.profile.specialty)
  })
  compressImage(img: any) {
    // console.log(im g)
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
        this.image = this.convertToFile(result);
      });
  }
  convertToFile(base64Image:string){
    const byteCharacters = atob(base64Image.split(',')[1]);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const file = new File([byteArray], 'image.png', { type: 'image/png' });
    return file;
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
      this.formGroup.get('first_name')?.setValue(this.profile.first_name)
      this.formGroup.get('last_name')?.setValue(this.profile.last_name)
      this.formGroup.get('email')?.setValue(this.profile.email)
      this.formGroup.get("specialty")?.setValue(JSON.parse(this.profile.specialty.toString()))
      this.logoImage = this.profile.image
      // this.global.setLoading(false);
      return
    }      
  }
  edit(){
    if(this.formGroup.get("first_name")?.valid && this.formGroup.get("last_name")?.valid && this.formGroup.get("email")?.valid && (this.formGroup.get("password")?.valid || this.formGroup.get("password")?.value=='')){
      let formValue = new FormData()
      let form = this.formGroup.value
      if(form.specialty == null)
        form.specialty = ['']
      if(form.first_name!=this.profile.first_name)
        formValue.append("first_name", form.first_name)
      if(form.last_name!=this.profile.last_name)
        formValue.append('last_name', form.last_name)
      if(form.email!=this.profile.email)
        formValue.append('email', form.email)
      if(form.specialty != this.profile.specialty)
        formValue.append('specialty', JSON.stringify(form.specialty))
      if(form.password!='')
        formValue.append('password', this.profile.password)
      if(this.logoImage!=null){
        formValue.append("image",this.image)
      }
      if(Object.keys(form).length==0)
        this.snack.open('تغییری اعمال نشده است', 'بستن', {duration: 1000})
      else{
        this.profileService.edit(formValue)
      }
    }
  }
  getAvatar():void{
    const dialogRef = this.dialog.open(AvatarsComponent, {
      maxWidth: 400,
    })

  }
}
