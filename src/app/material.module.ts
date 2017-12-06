import { NgModule } from  '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatStepperModule } from '@angular/material';

@NgModule({
    imports : [MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatStepperModule],
    exports : [MatButtonModule, MatToolbarModule , MatCardModule, MatInputModule, MatSelectModule, MatSlideToggleModule, MatStepperModule]
})

export class MaterialModule{  }