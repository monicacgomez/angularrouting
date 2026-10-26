import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TablaMultiplicarComponent } from './tablamultiplicarcomponent';

describe('TablaMultiplicarComponent', () => {
  let component: TablaMultiplicarComponent;
  let fixture: ComponentFixture<TablaMultiplicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TablaMultiplicarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TablaMultiplicarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
