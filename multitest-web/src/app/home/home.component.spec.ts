import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from "@angular/core/testing";
import { Router } from "@angular/router";

import {
  AppMaterialModule,
} from "../common/index";

import {
  HomeComponent
} from "./index";

const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

describe("HomeComponent", () => {

  let component: HomeComponent;

  let fixture:   ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppMaterialModule,
      ],
      declarations: [
        HomeComponent
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: Router, useValue: routerSpy }
      ],
    }).compileComponents();
    this.fixture = TestBed.createComponent(HomeComponent);
    this.component = this.fixture.componentInstance;
  }));

  it("Should Create Home Component", async(() => {
     expect(this.fixture.debugElement.componentInstance).toBeTruthy();
  }));

});
