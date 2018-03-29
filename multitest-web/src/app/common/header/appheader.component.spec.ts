import { TestBed, async } from "@angular/core/testing";

import {
  AppMaterialModule,
  AppHeaderComponent
} from "../../common/index";

describe("AppHeaderComponent", () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule
      ],
      declarations: [
        AppHeaderComponent
      ],
    }).compileComponents();
  }));

  it("Should Create App Header Component", async(() => {
    const fixture = TestBed.createComponent(AppHeaderComponent);
    const header = fixture.debugElement.componentInstance;
    expect(header).toBeTruthy();
  }));
});
