import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//--Angular Materials Included.
import { MatNativeDateModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
// import { DataSource } from '@angular/cdk/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatSnackBar} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    //--Forms Module Included
    FormsModule,
    ReactiveFormsModule,
    //--Angular Materials Included.
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSliderModule,
    MatDatepickerModule,
    MatSortModule,
    MatTableModule,
    MatSidenavModule,
    MatRadioModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatStepperModule,
    MatTabsModule,
    MatBottomSheetModule
  ],
  exports: [
    //--Forms Module Included
    FormsModule,
    ReactiveFormsModule,
    //--Angular Materials Included.
    MatNativeDateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSliderModule,
    MatDatepickerModule,
    MatSortModule,
    MatTableModule,
    MatSidenavModule,
    MatRadioModule,
    MatPaginatorModule,
    MatIconModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatStepperModule,
    MatTabsModule,
    MatBottomSheetModule
  ]
})
export class MaterialRepositoryModule { }
