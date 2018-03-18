import {Injectable} from '@angular/core';

@Injectable()
export class ImageLoaderService {

  constructor() {
  }

  getSrc(imageId: string): string {
    return `https://loremflickr.com/200/200/lego?lock=${imageId}`;
  }
}
