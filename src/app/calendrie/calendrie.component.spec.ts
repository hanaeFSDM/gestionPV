import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrieComponent } from './calendrie.component';

describe('CalendrieComponent', () => {
  let component: CalendrieComponent;
  let fixture: ComponentFixture<CalendrieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendrieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
