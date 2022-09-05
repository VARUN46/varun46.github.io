import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDictionaryComponent } from './skills-dictionary.component';

describe('SkillsDictionaryComponent', () => {
  let component: SkillsDictionaryComponent;
  let fixture: ComponentFixture<SkillsDictionaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsDictionaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsDictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
