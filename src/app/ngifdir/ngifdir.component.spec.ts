import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifdirComponent } from './ngifdir.component';

describe('NgifdirComponent', () => {
  let component: NgifdirComponent;
  let fixture: ComponentFixture<NgifdirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifdirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgifdirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
