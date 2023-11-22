import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/Services/Administrador/admin.service';
import { IAdmin } from 'src/common/Interfaces';
//* ACTIONS :
import { AdminDetailActions } from './pages/store/admin-detail.actions';
//* SELECTOR DETAIL ADMIN :
import { selectDetailAdmin } from './pages/store/admin-detail.selectors';

@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.component.html',
  styleUrls: ['./detail-admin.component.scss'],
})
export class DetailAdminComponent {
  constructor(private activetedRouter: ActivatedRoute, private store: Store) {}

  Administrador!: IAdmin;
  SuscriptionAdministrador!: Subscription;

  ngOnInit(): void {
    this.store.dispatch(
      AdminDetailActions.loadAdminDetails({
        id: this.activetedRouter.snapshot.params['id'],
      })
    );

    this.SuscriptionAdministrador = this.store
      .select(selectDetailAdmin)
      .subscribe((value: any) => {
        this.Administrador = value;
      });
  }

  ngOnDestroy(): void {
    this.SuscriptionAdministrador.unsubscribe();
  }
}
