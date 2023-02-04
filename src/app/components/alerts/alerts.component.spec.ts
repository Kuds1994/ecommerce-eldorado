import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AlertsComponent } from './alerts.component';

describe('AlertsComponent', () => {
  let component: AlertsComponent;
  let fixture: ComponentFixture<AlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsComponent ],
      imports: [BrowserAnimationsModule]
    })
    .compileComponents();

    

    fixture = TestBed.createComponent(AlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should set alerts to true', () => {
    spyOn(component, 'setAlerts')

    expect(component.setAlerts).toBeTruthy();
  });

  it('should have called setAlerts', () => {
    
    spyOn(component, 'setAlerts')

    component.setAlerts()

    expect(component.setAlerts).toHaveBeenCalled();
  });

  it('should have called hide', () => {
    
    spyOn(component, 'hide')

    component.hide()

    expect(component.hide).toHaveBeenCalled();
  });

});
