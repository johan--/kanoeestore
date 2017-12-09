import { NgModule } from  '@angular/core';
import { CommonModule } from '@angular/common';
import { 
    MatButtonModule, 
    MatToolbarModule, 
    MatCardModule, 
    MatInputModule, 
    MatSelectModule, 
    MatSlideToggleModule, 
    MatStepperModule,
    MatExpansionModule, 
    MatIconModule, 
    MatListModule, 
    MatGridListModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSnackBarModule
} from '@angular/material';

@NgModule({
    imports : [
        MatButtonModule, 
        MatToolbarModule, 
        MatCardModule, 
        MatInputModule, 
        MatSelectModule, 
        MatSlideToggleModule, 
        MatStepperModule, 
        MatExpansionModule, 
        MatIconModule, 
        MatListModule, 
        MatGridListModule,
        MatDialogModule,
        MatProgressBarModule,
        MatSnackBarModule
    ],
    exports : [
        MatButtonModule, 
        MatToolbarModule,
        MatCardModule, 
        MatInputModule, 
        MatSelectModule, 
        MatSlideToggleModule, 
        MatStepperModule, 
        MatExpansionModule, 
        MatIconModule, 
        MatListModule,
        MatGridListModule,
        MatDialogModule,
        MatProgressBarModule,
        MatSnackBarModule
    ]
})

export class MaterialModule{  }