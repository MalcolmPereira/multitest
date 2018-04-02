import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from "@angular/core/testing";
import { Router } from "@angular/router";

import {
  AppMaterialModule,
  AppHeaderComponent
} from "../../common/index";

import { IUser, UserService, IUserService } from "../../user/index"

const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

class MockUserSevice implements IUserService {

  login(username: string, userpassword: string, useremail: string): IUser {
    throw new Error("Method not implemented.");
  }

  logoff() {
    throw new Error("Method not implemented.");
  }

  getCurrentUser(): IUser {
    return {
         "id": 1,
         "name": "some user",
         "email": "someuser@email.com"
     }
  }
}

describe("AppHeaderComponent", () => {

  let component: AppHeaderComponent;

  let service: IUserService = new MockUserSevice();

  let fixture:   ComponentFixture<AppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppMaterialModule,
      ],
      declarations: [
        AppHeaderComponent
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: Router, useValue: routerSpy },
        { provide: UserService, useValue: service }
      ],
    }).compileComponents();
    this.fixture = TestBed.createComponent(AppHeaderComponent);
    this.component = this.fixture.componentInstance;
  }));

  it("Should Create App Header Component and Contain Title", async(() => {
    expect(this.fixture.debugElement.componentInstance).toBeTruthy();
    expect(this.fixture.nativeElement.querySelector('h3').textContent).toContain(this.component.title);
  }));
});
