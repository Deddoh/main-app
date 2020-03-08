import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Item, ChartsDataService } from '../charts-data.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styles: [
    `div.tooltip {
      position: absolute;
      text-align: center;
      width: 100px;
      height: 40px;
      padding: 5px;
      font: 12px sans-serif;
      background: black;
      color: white;
      border: 0px;
      border-radius: 8px;
      pointer-events: none;
      vertical-align: middle;
      z-index: 10;
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class PieChartComponent implements OnInit {
  // let margin = {top:20, right:50, bottom:40, left:140}
  get height(): number { return parseInt(d3.select('#b').style('height'), 10); }
  get width(): number { return parseInt(d3.select('#b').style('width'), 10); }
  radius: number;
  // Arcs & pie
  private arc: any; private hoveredArc: any; private arcLabel: any; private pie: any;  private slices: any;
  private color: any;
  // Drawing containers
  private svg: any;  private mainContainer: any; private texts: any; private tooltip: any;
  // Data
  dataSource: Item[];
  total: number;

  // Labels
private labelValue: any;  private labelName: any;
private labelPercent: any;  private labelTotal: any;

  constructor(private service: ChartsDataService) {
    this.dataSource = this.service.getData();
    this.total = this.dataSource.reduce((sum, it) => sum += it.abs, 0);

  }

  ngOnInit() {
    this.svg = d3.select('#pie').select('svg');
    // tooltip
    this.tooltip = d3.select('#pie')
    .append('div').attr('class', 'tooltip').style('display', 'none').style('opacity', 0)
    this.initSvg();
  }

  private initSvg() {
    this.setSVGDimensions();

    // Color scale.
    this.color = d3.scaleOrdinal(d3.schemeCategory10);

    this.mainContainer = this.svg.append('g')
      .attr('transform', 'translate(' + (this.radius) + ',' + (this.radius) + ')');

    this.pie = d3.pie()
      .sort(null)
      .value((d: any) => d.abs);

    this.draw();
    window.addEventListener('resize', this.resize.bind(this));


  //   this.labelTotal = this.mainContainer.append('text')
  //   .attr('text-anchor', 'middle').style('font-size', '6em')
  //   .attr('dy', '.5em').text(this.total);
  // this.labelName = this.mainContainer.append('text')
  //   .attr('text-anchor', 'middle').attr('dy', '.4em').attr('dx', '-1em')
  //   .style('font-size', '4em').style('opacity', 0);
  // this.labelValue = this.mainContainer.append('text')
  //   .attr('text-anchor', 'middle').style('font-size', '2em')
  //   .attr('dx', '2em').attr('dy', '.4em').style('opacity', 0);
  // this.labelPercent = this.mainContainer.append('text')
  //   .attr('text-anchor', 'middle').attr('dy', '1.7em').style('opacity', 0);

  }

  private setSVGDimensions() {
    this.radius = (Math.min(this.width, this.height)) / 2;

    this.svg
      .attr('width', 2 * this.radius)
      .attr('height', 2 * this.radius);

    this.svg.select('g')
      .attr('transform', 'translate(' + this.radius + ',' + this.radius + ')');
  }

  private draw() {
    this.setArcs();
    this.drawSlices();
    this.drawLabels();
  }

  private setArcs() {
    const thickness = (1 - 25 / 100);
    this.arc = d3.arc()
      .outerRadius(this.radius)
      .innerRadius(0);
    // .innerRadius(this.radius * thickness);

    this.arcLabel = d3.arc()
      .innerRadius(this.radius * .8)
      .outerRadius(this.radius * .8);
  }

  private drawSlices() {
    this.slices = this.mainContainer.selectAll('path')
      .remove()
      .exit()
      .data(this.pie(this.dataSource))
      .enter().append('g')
      .append('path')
      .attr('d', this.arc);
    this.slices
      // .on('mouseover', function (s){
      //   this.computeLabels(true, s.data);
      // }.bind(this))
      .on('mousemove', function (s) {
        const percent = (Math.abs(s.data.abs / this.total) * 100).toFixed(2) + '%';
        this.tooltip .style('top', (d3.event.layerY + 15) + 'px').style('left', (d3.event.layerX) + 'px')
          .style('display', 'block').style('opacity', 1).style('height', '40px')
          this.tooltip.html(`name: ${s.data.name}<br>value: ${s.data.value}<br>share: ${percent}`);
      }.bind(this))
      .on('mouseout', function (){
        // this.computeLabels(false);
        this.tooltip.style('display', 'none').style('opacity', 0);
      }.bind(this))
      .attr('fill', 'transparent')
      .attr('fill', (d, i) => this.color(i));
  }

  // private computeLabels(visible: boolean, data?: any) {
  //   if (visible) {
  //     const percent = (Math.abs(data.abs / this.total) * 100).toFixed(2) + '%';
  //     this.labelName.text(data.name).style('opacity', 1);
  //     this.labelValue.text(data.value).style('opacity', 1);
  //     this.labelPercent.text(percent).style('opacity', 1);
  //     this.labelTotal.style('opacity', 0);
  //   } else {
  //     [this.labelName, this.labelValue, this.labelPercent].forEach(l => l.style('opacity', 0));
  //     this.labelTotal.style('opacity', 1);
  //   }
  // }

  private drawLabels() {
    this.texts = this.mainContainer.selectAll('text')
      .remove()
      .exit()
      .data(this.pie(this.dataSource))
      .enter().append('text')
      .attr('text-anchor', 'middle')
      .attr('transform', d => `translate(${this.arcLabel.centroid(d)})`)
      .attr('dy', '0.35em');

    this.texts.append('tspan')
      .filter(d => (d.endAngle - d.startAngle) > 0.05)
      .attr('x', 0)
      .attr('y', 0)
      .style('font-weight', 'bold')
      .text(d => d.data.name);

    this.texts.append('tspan')
      .filter(d => (d.endAngle - d.startAngle) > 0.25)
      .attr('x', 0)
      .attr('y', '1.3em')
      .attr('fill-opacity', 0.7)
      .text(d => d.data.value.toLocaleString());
  }

  private resize() {
    this.setSVGDimensions();
    this.setArcs();
    this.repaint();
    this.drawLabels();
  }

  private repaint() {
    this.drawSlices();
    this.drawLabels();
    
    
  }
}
