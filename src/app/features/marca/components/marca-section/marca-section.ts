import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-marca-section',
  standalone: true,
  imports: [FormsModule, TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, SelectModule, HttpClientModule, CommonModule],
  templateUrl: './marca-section.html',
  styleUrl: './marca-section.css'
})
export class MarcaSection {
  customers!: any[];

    representatives!: any[];

    statuses!: any[];

    selectedStatus: any;
selectedReps: any[] = [];


    loading: boolean = true;

    activityValues: number[] = [0, 100];

    constructor() {}

    ngOnInit() {

     this.customers = [
        {
            id: 1,
            name: 'Alberto Vera',
            country: { name: 'Ecuador', code: 'EC' },
            representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
            status: 'qualified',
            verified: true,
        },
        {
            id: 2,
            name: 'Lucía Andrade',
            country: { name: 'Perú', code: 'PE' },
            representative: { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            status: 'new',
            verified: false,
        },
        {
            id: 3,
            name: 'Carlos Méndez',
            country: { name: 'Colombia', code: 'CO' },
            representative: { name: 'Xuxue Feng', image: 'xuxuefeng.png' },
            status: 'proposal',
            verified: true,
        },
    ];
      this.loading = false;
      this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
        
      // this.customerService.getCustomersLarge().then((customers) => {
      //       this.customers = customers;
      //       this.loading = false;

      //       this.customers.forEach((customer) => (customer.date = new Date(<Date>customer.date)));
      //   });

        this.representatives = [
            { name: 'Amy Elsner', image: 'amyelsner.png' },
            { name: 'Anna Fali', image: 'annafali.png' },
            { name: 'Asiya Javayant', image: 'asiyajavayant.png' },
            { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
            { name: 'Elwin Sharvill', image: 'elwinsharvill.png' },
            { name: 'Ioni Bowcher', image: 'ionibowcher.png' },
            { name: 'Ivan Magalhaes', image: 'ivanmagalhaes.png' },
            { name: 'Onyama Limba', image: 'onyamalimba.png' },
            { name: 'Stephen Shaw', image: 'stephenshaw.png' },
            { name: 'Xuxue Feng', image: 'xuxuefeng.png' }
        ];

        this.statuses = [
            { label: 'Unqualified', value: 'unqualified' },
            { label: 'Qualified', value: 'qualified' },
            { label: 'New', value: 'new' },
            { label: 'Negotiation', value: 'negotiation' },
            { label: 'Renewal', value: 'renewal' },
            { label: 'Proposal', value: 'proposal' }
        ];
    }

    clear(table: any) {
        table.clear();
    }

    // getSeverity(status: string) {
    //     switch (status) {
    //         case 'unqualified':
    //             return 'danger';

    //         case 'qualified':
    //             return 'success';

    //         case 'new':
    //             return 'info';

    //         case 'negotiation':
    //             return 'warn';

    //         case 'renewal':
    //             return null;
    //     }
    // }
}
