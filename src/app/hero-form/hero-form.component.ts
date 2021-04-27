import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

import { NzDropDownModule } from 'ng-zorro-antd/dropdown';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
  }

  add(name: string, power: string, alterEgo: string): void {
    console.log("name", name);
    console.log("power", power);

    // name = name.trim();
    // power= power.trim();
    // alterEgo = alterEgo.trim();
    // if (!name) { return; }
    this.heroService.addHero({ name, power, alterEgo } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        console.log("hero", hero);
      });
  }

  heroes: Hero[] = [];

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];



}
