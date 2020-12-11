import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import * as firebase from 'Firebase';
import * as moment from "moment";
@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  ref = firebase.database().ref('jadwals/');
  key = this.route.snapshot.paramMap.get('key');

  jadwalForm: FormGroup;
  dataJadwal = {
    nama: '',
    jadwal_jam: ''
  }
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    this.jadwalForm = this.formBuilder.group({
      'nama': [null, Validators.required],
      'jadwal_jam': [null, Validators.required],
    });
    this.dataJadwal.nama = this.jadwalForm.value.nama;
    this.dataJadwal.jadwal_jam = moment(this.jadwalForm.value.jadwal_jam).format("HH:MM");

  }

  ngOnInit() {
  }
  savejadwal() {
    firebase.database().ref('jadwals/' + this.dataJadwal.nama + '/').set(this.dataJadwal);
    this.router.navigate(['/home']);
  }

}
export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}