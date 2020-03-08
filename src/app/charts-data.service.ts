import { Injectable } from '@angular/core';

export interface Item {
  name: string;
  value: number;
  abs: number;
}

@Injectable({
  providedIn: 'root'
})
export class ChartsDataService {
  private readonly NAMES = ['ClientA', 'ClientB', 'ClientC', 'ClientD', 'ClientE', 'ClientF', 'ClientG', 'ClientH'];

  private readonly MIN_ITEM = 10;
  private readonly MAX_ITEM = 20;

  private readonly MAX_VALUE = 100;

  constructor() { }

  private generateRandomValue(start: number, end: number) {
    return Math.ceil(Math.random() * (end - start) + start);
  }

  getData(): Item[] {
    const nbItems = this.generateRandomValue(this.MIN_ITEM, this.MAX_ITEM);
    const samples = [];
    for (let i = 0; i < nbItems; i++) {
      const val = this.generateRandomValue(1, this.MAX_VALUE);
      samples.push({
        name: this.NAMES[i],
        value: val,
        abs: Math.abs(val)
      });
    }
    return samples;
  }
}