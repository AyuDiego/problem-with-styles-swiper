import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {
    getData() {
        return [
            {
                itemImageSrc: '../../assets/img/background.jpg',
                thumbnailImageSrc: '../../assets/img/background.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: '../../assets/img/background.jpg',
                thumbnailImageSrc: '../../assets/img/background.jpg',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: '../../assets/img/background.jpg',
                thumbnailImageSrc: '../../assets/img/background.jpg',
                alt: 'Description for Image 3',
                title: 'Title 3'
            }
        ];
    }

    getImages() {
        return Promise.resolve(this.getData());
    }
};


// getImages() {
//     return fetch('assets/data/photos.json').then((res) => res.json()).then((data) => data.images);
// }
