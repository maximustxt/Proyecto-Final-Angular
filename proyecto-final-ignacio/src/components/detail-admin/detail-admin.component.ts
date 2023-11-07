import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminService } from 'src/Services/Administrador/admin.service';
import { IAdmin } from 'src/common/Interfaces';

@Component({
  selector: 'app-detail-admin',
  templateUrl: './detail-admin.component.html',
  styleUrls: ['./detail-admin.component.scss'],
})
export class DetailAdminComponent {
  constructor(
    private activetedRouter: ActivatedRoute,
    private servicesAdministradors: AdminService
  ) {}

  Administrador!: IAdmin;
  SuscriptionAdministrador!: Subscription;

  ngOnInit(): void {
    this.SuscriptionAdministrador = this.servicesAdministradors
      .getDetailAdministradores(this.activetedRouter.snapshot.params['id'])
      .subscribe((value: any) => {
        this.Administrador = value;
      });
  }

  ngOnDestroy(): void {
    this.SuscriptionAdministrador.unsubscribe();
  }
}
