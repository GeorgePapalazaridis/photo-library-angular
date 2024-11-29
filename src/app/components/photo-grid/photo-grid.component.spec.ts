// import { ComponentFixture, TestBed } from "@angular/core/testing";
// import { PhotoGridComponent } from "./photo-grid.component";
// import { PhotoService } from "@photoLibrary/services";
// import { PhotoDto } from "@photoLibrary/dto";

// describe("PhotoGridComponent", () => {
//     let component: PhotoGridComponent;
//     let fixture: ComponentFixture<PhotoGridComponent>;
//     let photoService: jasmine.SpyObj<PhotoService>;

//     beforeEach(async () => {
//         const photoServiceMock = jasmine.createSpyObj("PhotoService", [
//             "getRandomPhotos",
//         ]);

//         await TestBed.configureTestingModule({
//             imports: [PhotoGridComponent],
//             providers: [{ provide: PhotoService, useValue: photoServiceMock }],
//         }).compileComponents();

//         fixture = TestBed.createComponent(PhotoGridComponent);
//         component = fixture.componentInstance;
//         photoService = TestBed.inject(
//             PhotoService
//         ) as jasmine.SpyObj<PhotoService>;
//     });

//     it("should create the component", () => {
//         expect(component).toBeTruthy();
//     });

//     it("should load initial photos on init", async () => {
//         const mockPhotos: PhotoDto[] = [
//             { url: "url1", title: "Photo 1" },
//             { url: "url2", title: "Photo 2" },
//         ];
//         photoService.getRandomPhotos.and.returnValue(mockPhotos);

//         component.ngOnInit();
//         fixture.detectChanges();

//         await fixture.whenStable(); // Wait for async operations to complete

//         expect(photoService.getRandomPhotos).toHaveBeenCalledWith(6);
//         expect(component.photos).toEqual(mockPhotos);
//     });

//     it("should show spinner while loading photos", async () => {
//         const mockPhotos: PhotoDto[] = [
//             { url: "url1", title: "Photo 1" },
//             { url: "url2", title: "Photo 2" },
//         ];

//         photoService.getRandomPhotos.and.returnValue(mockPhotos);

//         component.ngOnInit();
//         fixture.detectChanges();

//         expect(component.isLoading).toBeTrue(); // Spinner should be visible
//         expect(
//             fixture.debugElement.nativeElement.querySelector(
//                 "app-loading-spinner"
//             )
//         ).toBeTruthy(); // DOM spinner check

//         await fixture.whenStable();
//         fixture.detectChanges();

//         expect(component.isLoading).toBeFalse();
//         expect(component.photos).toEqual(mockPhotos);
//     });

//     it("should append photos on scroll", async () => {
//         const initialPhotos: PhotoDto[] = [
//             { url: "url1", title: "Photo 1" },
//             { url: "url2", title: "Photo 2" },
//         ];
//         const newPhotos: PhotoDto[] = [
//             { url: "url3", title: "Photo 3" },
//             { url: "url4", title: "Photo 4" },
//         ];

//         photoService.getRandomPhotos.and.returnValues(initialPhotos, newPhotos);

//         component.ngOnInit();
//         fixture.detectChanges();

//         expect(photoService.getRandomPhotos).toHaveBeenCalledWith(6);
//         expect(component.photos).toEqual(initialPhotos);

//         spyOn(component, "_isScrollAtBottom").and.returnValue(true);
//         component.onScroll();
//         fixture.detectChanges();

//         await fixture.whenStable();
//         fixture.detectChanges();

//         expect(photoService.getRandomPhotos).toHaveBeenCalledTimes(2);
//         expect(component.photos.length).toBe(4);
//         expect(component.photos).toEqual([...initialPhotos, ...newPhotos]);
//     });
// });
