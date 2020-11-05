import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private toastController: ToastController,
  ) { }

  public async show(message: string) {
    const toast = await this.toastController.create({
      message: message,
      position: 'bottom',
      color: 'dark',
      buttons: [
        {
          text: 'Ok'
        }
      ]
    });
    toast.present();
    // setTimeout(()=>{ 
    //   try {
    //     this.toastController.dismiss();   
    //   } catch (error) {
    //     console.log("message was closed before");
    //   }
      
    // }, 2000);
  }
  close(){
    this.toastController.dismiss();
  }

}
