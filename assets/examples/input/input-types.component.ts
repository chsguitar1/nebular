import { Component } from '@angular/core';

@Component({
  template: `
    <nb-card>
      <nb-card-body>
        <input type="text" nbInput fullWidth fieldSize="small" placeholder="Input">
        <textarea nbInput fullWidth shape="round" placeholder="Textarea"></textarea>
      </nb-card-body>
    </nb-card>
  `,
  styleUrls: ['./input-component.scss'],
})
export class NbInputTypesComponent {}
