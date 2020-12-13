import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterParentComponent } from './consulter-parent.component';

describe('ConsulterParentComponent', () => {
  let component: ConsulterParentComponent;
  let fixture: ComponentFixture<ConsulterParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulterParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulterParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
