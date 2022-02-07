import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Country} from "../../shared/models/country";

@Component({
  selector: 'app-country-details-dialog',
  templateUrl: './country-details-dialog.component.html',
  styleUrls: ['./country-details-dialog.component.scss']
})
export class CountryDetailsDialogComponent {
  constructor(public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: Country) {
  }

  onCloseClick(): void {
    this.dialogRef.close();
  }

  getNativeName(nativeName: any) {
    const keys = Object.keys(nativeName);
    return nativeName[keys[0]].official;
  }
}
