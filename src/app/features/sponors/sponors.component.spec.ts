import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponorsComponent } from './sponors.component';

describe('SponorsComponent', () => {
  let component: SponorsComponent;
  let fixture: ComponentFixture<SponorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
