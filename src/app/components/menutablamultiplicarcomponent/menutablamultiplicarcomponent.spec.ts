import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Menutablamultiplicarcomponent } from './menutablamultiplicarcomponent';

describe('MenuTablaMultiplicarComponent', () => {
  let component: Menutablamultiplicarcomponent;
  let fixture: ComponentFixture<Menutablamultiplicarcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Menutablamultiplicarcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Menutablamultiplicarcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
