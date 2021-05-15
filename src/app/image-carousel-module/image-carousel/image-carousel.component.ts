import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageDataService } from 'src/app/image-data.service';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.sass']
})
export class ImageCarouselComponent implements OnInit, OnDestroy {

  private counter: number = 0;
  private fileNames: string[] = [""];
  currentImageFile: string = "assets/loading-transparent.gif";
  private url: string = "assets/home-carousel/"

  constructor(private imageService: ImageDataService) { }

  ngOnInit(): void {
   var fileNameArrayObservable:Observable<string[]> = this.imageService.fetchImageList("/src/"+this.url);
   
   fileNameArrayObservable.subscribe((fileNameArray)=>{console.log(fileNameArray); this.fileNames = fileNameArray; console.log(this.fileNames); this.startTimer()})
  }

  ngOnDestroy(): void{
    clearInterval();
  }

  startTimer(): void{
    setTimeout(() => this.changePicture(), 0);
    setInterval(() => this.changePicture(), 3000)
  }

  changePicture(): void{
    this.currentImageFile = this.url+this.fileNames[this.counter];
    this.counter++;

    if(this.counter >= this.fileNames.length){
      this.counter = 0;
    }
  }

  

}
