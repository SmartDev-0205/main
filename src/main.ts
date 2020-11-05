import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

import Amplify from 'aws-amplify';
import { Hub, Logger } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


//   const logger = new Logger('My-Logger');

// const listener = (data) => {

//     switch (data.payload.event) {

//         case 'signIn':
//             logger.error('user signed in'); //[ERROR] My-Logger - user signed in
//             break;
//         case 'signUp':
//             logger.error('user signed up');
//             break;
//         case 'signOut':
//             logger.error('user signed out');
//             console.log("user singouted")
//             break;
//         case 'signIn_failure':
//             logger.error('user sign in failed');
//             break;
//         case 'configured':
//             logger.error('the Auth module is configured');

//     }
// }

// Hub.listen('auth', listener);
