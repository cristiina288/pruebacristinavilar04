import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallHeroesComponent } from './detall-heroes.component';

describe('DetallHeroesComponent', () => {
  let component: DetallHeroesComponent;
  let fixture: ComponentFixture<DetallHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
