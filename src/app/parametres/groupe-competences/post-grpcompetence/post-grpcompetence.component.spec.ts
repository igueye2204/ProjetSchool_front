import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostGrpcompetenceComponent } from './post-grpcompetence.component';

describe('PostGrpcompetenceComponent', () => {
  let component: PostGrpcompetenceComponent;
  let fixture: ComponentFixture<PostGrpcompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostGrpcompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostGrpcompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
