import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSermonComponent } from './latest-sermon.component';

describe('LatestSermonComponent', () => {
  let component: LatestSermonComponent;
  let fixture: ComponentFixture<LatestSermonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestSermonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestSermonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
