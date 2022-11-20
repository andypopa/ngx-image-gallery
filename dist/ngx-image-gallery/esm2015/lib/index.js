import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxImageGalleryComponent } from './components/ngx-image-gallery/ngx-image-gallery.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { MouseWheelDirective } from './directives/mousewheel.directive';
export * from './components/ngx-image-gallery/ngx-image-gallery.component';
export * from './directives/click-outside.directive';
export * from './directives/mousewheel.directive';
let NgxImageGalleryModule = class NgxImageGalleryModule {
};
NgxImageGalleryModule = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            NgxImageGalleryComponent,
            MouseWheelDirective,
            ClickOutsideDirective
        ],
        exports: [
            NgxImageGalleryComponent,
            MouseWheelDirective,
            ClickOutsideDirective
        ]
    })
], NgxImageGalleryModule);
export { NgxImageGalleryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbWVnYWtpbGwvbmd4LWltYWdlLWdhbGxlcnkvIiwic291cmNlcyI6WyJsaWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBRTdDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDREQUE0RCxDQUFDO0FBQ3BHLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBRXRFLGNBQWMsNERBQTRELENBQUM7QUFDM0UsY0FBYyxzQ0FBc0MsQ0FBQztBQUNyRCxjQUFjLG1DQUFtQyxDQUFDO0FBa0JsRCxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtDQUNqQyxDQUFBO0FBRFkscUJBQXFCO0lBZmpDLFFBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRTtZQUNMLFlBQVk7U0FDZjtRQUNELFlBQVksRUFBRTtZQUNWLHdCQUF3QjtZQUN4QixtQkFBbUI7WUFDbkIscUJBQXFCO1NBQ3hCO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0JBQXdCO1lBQ3hCLG1CQUFtQjtZQUNuQixxQkFBcUI7U0FDeEI7S0FDSixDQUFDO0dBQ1cscUJBQXFCLENBQ2pDO1NBRFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHtOZ3hJbWFnZUdhbGxlcnlDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50cy9uZ3gtaW1hZ2UtZ2FsbGVyeS9uZ3gtaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQnO1xuaW1wb3J0IHtDbGlja091dHNpZGVEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9jbGljay1vdXRzaWRlLmRpcmVjdGl2ZSc7XG5pbXBvcnQge01vdXNlV2hlZWxEaXJlY3RpdmV9IGZyb20gJy4vZGlyZWN0aXZlcy9tb3VzZXdoZWVsLmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9uZ3gtaW1hZ2UtZ2FsbGVyeS9uZ3gtaW1hZ2UtZ2FsbGVyeS5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmVzL2NsaWNrLW91dHNpZGUuZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlcy9tb3VzZXdoZWVsLmRpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL25neC1pbWFnZS1nYWxsZXJ5LmNvbmYnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgTmd4SW1hZ2VHYWxsZXJ5Q29tcG9uZW50LFxuICAgICAgICBNb3VzZVdoZWVsRGlyZWN0aXZlLFxuICAgICAgICBDbGlja091dHNpZGVEaXJlY3RpdmVcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgTmd4SW1hZ2VHYWxsZXJ5Q29tcG9uZW50LFxuICAgICAgICBNb3VzZVdoZWVsRGlyZWN0aXZlLFxuICAgICAgICBDbGlja091dHNpZGVEaXJlY3RpdmVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEltYWdlR2FsbGVyeU1vZHVsZSB7XG59XG4iXX0=