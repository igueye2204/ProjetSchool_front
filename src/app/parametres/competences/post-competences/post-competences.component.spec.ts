import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCompetencesComponent } from './post-competences.component';

describe('PostCompetencesComponent', () => {
  let component: PostCompetencesComponent;
  let fixture: ComponentFixture<PostCompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
