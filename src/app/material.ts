import {
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    MatTableModule,
    MatTooltipModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
  } from '@angular/material';
  
  import { MatDialogModule } from '@angular/material/dialog';
  import { MatSnackBarModule } from '@angular/material/snack-bar';
  import { MatFormFieldModule } from '@angular/material/form-field';

  import { NgModule } from '@angular/core';
  import { RouterModule } from '@angular/router';
  import { FlexLayoutModule } from '@angular/flex-layout';
    
  @NgModule({
    imports: [
      RouterModule,
      MatButtonModule,
      MatCheckboxModule,
      MatIconModule,
      MatToolbarModule,
      MatChipsModule,
      MatCardModule,
      MatGridListModule,
      MatTableModule,
      MatTooltipModule,
      MatSnackBarModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatListModule,
      MatSidenavModule,
      FlexLayoutModule,
      MatCardModule
    ],
    exports: [
      RouterModule,
      MatButtonModule,
      MatCheckboxModule,
      MatIconModule,
      MatToolbarModule,
      MatChipsModule,
      MatCardModule,
      MatGridListModule,
      MatTableModule,
      MatTooltipModule,
      MatSnackBarModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatListModule,
      MatSidenavModule,
      FlexLayoutModule,
      MatCardModule
    ],
  })
  export class MaterialModule { }