import { Injectable } from '@angular/core';

@Injectable()
export class PhotoService {  
    
    getImagesWork1()  {
        return fetch('../../assets/data/photos-1.json').then(res => res.json());
    }
    getImagesWork2()  {
        return fetch('../../assets/data/photos-2.json').then(res => res.json());
    }
    getImagesWork3()  {
        return fetch('../../assets/data/photos-2.json').then(res => res.json());
    }
};


