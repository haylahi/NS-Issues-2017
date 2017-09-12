import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, ViewContainerRef } from "@angular/core";
import { Globals } from "../../shared/global";
import { ModalDialogService } from "nativescript-angular/directives/dialogs";
import { RouterExtensions } from "nativescript-angular/router";
import { RestrictedAccessComponent } from "../../shared/restrictedAccess/restrictedAccess.component";
import { Router, NavigationEnd } from "@angular/router";
import { GridLayout } from "ui/layouts/grid-layout";
import { Page } from "ui/page";

@Component({
    moduleId: module.id,
    selector: "mb-tab",
    templateUrl: "./tab.component.html",
    styleUrls: ["tab.css"]
})
export class TabComponent implements OnInit {
    tabMenudisable: string = "enableText";
    currentPage: string = "";

    constructor(private _routerExtensions: RouterExtensions,
        private promoModal: ModalDialogService,
        private vcRef: ViewContainerRef,
        public _globals: Globals,
        public _router: Router,
        public _page: Page) {
    }

ngOnInit(): void {
    if (this._globals.isTurnOff) {
        let layout: GridLayout = <GridLayout>this._page.getViewById("accountLayout");
        this._globals.setIsUserInteractionEnabledRecursive(layout, false);
        this.tabMenudisable = "disableText";
    }

    console.log(this._router.url.toString());
    console.log(this._routerExtensions.router.url.toString());

    this.currentPage = this._router.url.toString();
}

    loginCheckNavigate(page: string) {
        if (this._globals.isLoggedIn) {
            // this.currentPage = page; // REMOVE THIS LINE so that each unique instance of TabComponent will always load the default highlighted button
            this._routerExtensions.navigate(["/" + page], {
                animated: false
            });
        }
        else if (this._globals.isUnauthenticated) {
            this.showRestrictedAccessPopup();
        }
        else {
            this._routerExtensions.navigate(["/login"], {
                animated: false
            });
        }
    }

    showRestrictedAccessPopup() {
        let options = {
            context: {},
            fullscreen: true,
            viewContainerRef: this.vcRef
        };
        this.promoModal.showModal(RestrictedAccessComponent, options).then((res) => {
        });
    }

    home() {
        if (this._globals.isLoggedIn) {
            this._routerExtensions.navigate(["/home/signedHome"], {
                animated: false
            });
        } else {
            this._routerExtensions.navigate(["/home/anonymousHome"], {
                animated: false
            });
        }
    }

}