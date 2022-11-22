import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {map, Observable, startWith, Subscription, tap} from "rxjs";

import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {WindowsTypeService} from "../../../shared/services/windows-type.service";
import {BrandService} from "../../../shared/services/brand.service";
import {WindowsType} from "../../../shared/interfaces/windows-type";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Window} from "../../../shared/interfaces/window";
import {Brand} from "../../../shared/interfaces/brand";
import {Model} from "../../../shared/interfaces/model";
import {ModelService} from "../../../shared/services/model.service";
import {BodyShelType} from "../../../shared/interfaces/body-shel-type";
import {BodyShellTypeService} from "../../../shared/services/body-shell-type.service";


@Component({
  selector: 'app-new-window',
  templateUrl: './new-window.component.html',
  styleUrls: ['./new-window.component.scss']
})
export class NewWindowComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  public models!: Observable<Model[]>;
  public windowsType: WindowsType [] = [];
  public modelList: Model[] = [];
  public brands: Brand [] = [];
  public bodyShellType: BodyShelType[] = [];
  public window!: Window;

  public windowForm: FormGroup = this.initForm();

  //Autocomplete
  myControl = new FormControl<string | Brand>('');
  options: Brand[] = [];
  filteredOptions!: Observable<Brand[]>;
  @ViewChild('myinput', {static: true}) public el!: ElementRef<HTMLInputElement>;

  constructor(private _fb: FormBuilder,
              private _brandService: BrandService,
              private _windowsTypeService: WindowsTypeService,
              private _bodyShellTypeService: BodyShellTypeService,
              private _modelService: ModelService,
              private _router: Router,
              private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    //Get body shell type list
    this.subscription.add(this._bodyShellTypeService.getBodyShellType().subscribe((body : BodyShelType[])=>{
      this.bodyShellType = body;
    }))

    // get model list
    this.subscription.add(this._modelService.getModelsByIdBrand().subscribe((model: Model[]) => {
        this.modelList = model;
        this.models = this.myControl.valueChanges.pipe(
          map(value => {
            const name: any = typeof value === 'string' ? value : value?.brandName;
            return name ? this._filtreModels(name as string) : this.modelList.slice();
          })
        )
      })
    );


    // get brand list
    this.subscription.add(this._brandService.getWindows().subscribe((brand: Brand []) => {
      this.brands = brand;
      this.options = this.brands;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name: any = typeof value === 'string' ? value : value?.brandName;
          return name ? this._filter(name as string) : this.options.slice();
        }),
      );
    }))
    // get list windows type
    this.subscription.add(this._windowsTypeService.getWindowsType().subscribe((wt: WindowsType[]) => {
      this.windowsType = wt;
    }))
    //recupere la valeur de tout les champs dand le formulaire.
    this.windowForm.valueChanges.subscribe((value) => {
      // console.log(value.brand.brandName);
      // console.log('value chanse');
      // this._filtreModels();

    })

    // recupere window
    this._activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index');
      if (index) {

      }
    });
  }

  get brand() {
    return this.windowForm.get('brand');
  }

  /**
   * Validators
   * @param formControl
   */
  validatorTest(formControl: AbstractControl): { [s: string]: true } | null {
    if (formControl.value === 'test') {
      return {incorrecte: true}
    } else {
      return null;
    }
  }

  /**
   * async validators
   * @param formControl
   */
  validatorAsync(formControl: AbstractControl): Promise<{ [s: string]: boolean } | null> {
    return new Promise((resolve, reject) => {
      console.log('test', this.brands);
      console.log('test');
      resolve(null)
    })
  }


  displayFn(brand: Brand): string {
    return brand && brand.brandName ? brand.brandName : '';
  }

  private _filter(name: string): Brand[] {
    const filterValue = name.toLowerCase();
    return this.options.filter((option: Brand) => option.brandName.toLowerCase().includes(filterValue));
  }

  private _filtreModels(name: string): Model[] {
    this._uniqueModels(this.modelList);
    return this.modelList.filter((m: Model) => m.brand.brandName.includes(name));
  }

  private _uniqueModels(model: Model[]): Model[] {
    var uniqueArr = [...new Set(model)]

    console.log(uniqueArr);
    // console.log(unique);
    return model.filter((m: Model) => {
      // console.log( !m.brand.brandName.includes(m.brand.brandName));
    })
  }

  private initForm(): FormGroup {
    return this.windowForm = this._fb.group({
      brand: [this.filteredOptions, Validators.required],
      body : [this.bodyShellType, Validators.required],
      type: [this.windowsType, Validators.required],
      model: ['', Validators.required],
      code: ['', Validators.required],
      name: ['', Validators.required],
      price: ['']
    });
  }

  // GETTER
  get type () {
    return this.windowForm.get('type')?.hasError('required');
  }
  get code() {
    return this.windowForm.get('code')?.hasError('required');
  }

  get name() {
    return this.windowForm.get('name')?.hasError('required');
  }

  public setBrand(brand: Brand): void {
    this.windowForm.patchValue({
      brand: brand
    })
  }

  public setBrandDownKey(): void {
    this.options.filter((b: Brand) => {
      if (b.brandName.toLowerCase() === this.el.nativeElement.value.toLowerCase()) {
        this.windowForm.patchValue({
          brand: b
        });
      }
    })
  }

  public refrechModelList() {
    // return this.models.filter((m: Model) => {
    //   m.brand.brandName.includes(this.el.nativeElement.value);
    // });

  }

  public submit(): void {
    console.log(this.windowForm.valid);
    this._router.navigate(['..'], {relativeTo: this._activatedRoute});
    // this.windowForm.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
