import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  ref = firebase.database().ref('jadwals/');
  jadwalForm: FormGroup;
  dataJadwal = {
    nama: '',
    jadwal_jam: ''
  }
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.jadwalForm = this.formBuilder.group({
      'nama': [null, Validators.required],
      'jadwal_jam': [null, Validators.required],
    });
    this.getjadwal(this.route.snapshot.paramMap.get('nama'));
    this.dataJadwal.nama = this.jadwalForm.value.nama;
  }

  ngOnInit() {
  }
  getjadwal(key) {
    firebase.database().ref('jadwals/' + key).on('value', resp => {
      let jadwal = snapshotToObject(resp);
      this.jadwalForm.controls['nama'].setValue(jadwal.nama);
      this.jadwalForm.controls['jadwal_jam'].setValue(jadwal.jadwal_jam);
    });
  }
  updatejadwal() {
    let newjadwal = firebase.database().ref('jadwals/' + this.dataJadwal.nama + '/').update(this.jadwalForm.value);
    this.router.navigate(['/home']);
  }

}
export const snapshotToObject = snapshot => {
  let item = snapshot.val();
  item.key = snapshot.key;

  return item;
}