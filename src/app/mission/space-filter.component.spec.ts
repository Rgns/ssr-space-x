import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceFilterComponent } from './space-filter.component';

describe('SpaceFilterComponent', () => {
  let component: SpaceFilterComponent;
  let fixture: ComponentFixture<SpaceFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
