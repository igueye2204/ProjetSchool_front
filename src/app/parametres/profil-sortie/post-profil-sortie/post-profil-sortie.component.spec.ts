import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProfilSortieComponent } from './post-profil-sortie.component';

describe('PostProfilSortieComponent', () => {
  let component: PostProfilSortieComponent;
  let fixture: ComponentFixture<PostProfilSortieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostProfilSortieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProfilSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
