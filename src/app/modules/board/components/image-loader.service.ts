import {Injectable} from '@angular/core';

@Injectable()
export class ImageLoaderService {
  private keyword: string;

  constructor() {
  }

  getSrc(imageId: string): string {
    return `https://loremflickr.com/200/200/${this.keyword}?lock=${imageId}`;
  }

  setKeyword(keyword: string) {
    this.keyword = keyword;
  }
}
