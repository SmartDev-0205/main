import {Injectable} from '@angular/core';
import {LoadingController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(
    private loadingController: LoadingController
  ) { }

  public async create(loadingOptions?: any) {
    const loading = await this.loadingController.create(loadingOptions);
    loading.present();
    return loading;
  }

}
