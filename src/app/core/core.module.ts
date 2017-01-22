import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CoreStoreModule } from './store/store.module'; 
import { appServices } from './services';

@NgModule({
  imports: [ CommonModule, HttpModule, CoreStoreModule ],
  declarations: [],
  exports: [],
  providers: [ appServices ]
})

export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
          'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
