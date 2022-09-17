import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import * as d3Cloud from 'd3-cloud';

@Component({
  selector: 'app-skills-dictionary',
  templateUrl: './skills-dictionary.component.html',
  styleUrls: ['./skills-dictionary.component.css']
})
export class SkillsDictionaryComponent implements OnInit,AfterViewInit {


  @ViewChild('skillsWordCloudDiv', { static: false })
  skillsWordCloud: ElementRef | undefined;

  constructor(private renderer:Renderer2) {

   }
  ngAfterViewInit(): void {
    const wordCloudWords = d3Cloud().words();
    wordCloudWords.push({text:'A',size:5});

    this.renderer.setStyle(this.skillsWordCloud?.nativeElement, 'color', 'blue');
    d3Cloud().size([100,100])
    .words(wordCloudWords)

    const svg = d3.create("svg")
    .attr("viewBox", [0, 0, 100, 100])
    .attr("width", 100)
    .attr("text-anchor", "middle")
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");


  }

  ngOnInit(): void {
  }

}
