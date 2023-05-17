import { Injectable } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(
    private imageCompress: NgxImageCompressService,
  ) { }
  getBase64Image(img: HTMLImageElement) {
    // We create a HTML canvas object that will create a 2d image
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx:any = canvas.getContext("2d");   // This will draw image    
    ctx.drawImage(img, 0, 0);
    // Convert the drawn image to Data URL
    let dataURL = canvas.toDataURL("image/webp");return dataURL
    //dataURL.replace(/^data:image\/(png|jpg|webp);base64,/, "");
  }
  getBase64ImageFromURL(url: string) {
    return new Observable((observer: Observer<string>) => {
      // create an image object
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
          // This will call another method that will create image from url
          img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };       img.onerror = (err) => {
           observer.error(err);
        };     } else {
          observer.next(this.getBase64Image(img));
          observer.complete();
      }
    });
  }
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
        return result
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
}
