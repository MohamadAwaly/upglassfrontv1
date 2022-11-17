import {Component, OnInit} from '@angular/core';
import {map, Observable, startWith} from "rxjs";
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Window} from "../../../shared/interfaces/window";
import {BrandService} from "../../../shared/services/brand.service";
import {Brand} from "../../../shared/interfaces/brand";
import {WindowsTypeService} from "../../../shared/services/windows-type.service";
import {WindowsType} from "../../../shared/interfaces/windows-type";

@Component({
  selector: 'app-new-window',
  templateUrl: './new-window.component.html',
  styleUrls: ['./new-window.component.scss']
})
export class NewWindowComponent implements OnInit {

  public brands: Brand [] = [];
  public windowsType: WindowsType [] = [];

  public windowForm: FormGroup = this.initForm();

  //Autocomplete
  myControl = new FormControl<string | Brand>('');
  options!: Brand[];
  filteredOptions!: Observable<Brand[]>;

  constructor(private _fb: FormBuilder,
              private _brandService: BrandService,
              private _windowsTypeService: WindowsTypeService) {
  }

  ngOnInit(): void {
    // get brand list
    this._brandService.getWindows().subscribe((brand: Brand []) => {
      this.brands = brand;
      this.options = this.brands;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.brandName;
          return name ? this._filter(name as string) : this.options.slice();
        }),
      );
    });
    // get list windows type
    this._windowsTypeService.getWindowsType().subscribe((wt: WindowsType[]) => {
      this.windowsType = wt;
    });
    //recupere la valeur de tout les champs dand le formulaire.
    this.windowForm.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }

  get brand() {
    return this.windowForm.get('brand');
  }

  validatorTest(formControl: AbstractControl): { [p: string]: true } | null {
    if (formControl.value === 'test') {
      return {notTest: true}
    } else {
      return null;
    }
  }

  displayFn(brand: Brand): string {
    return brand && brand.brandName ? brand.brandName : '';
  }

  private _filter(name: string): Brand[] {
    const filterValue = name.toLowerCase();
    return this.options.filter(option => option.brandName.toLowerCase().includes(filterValue));
  }


  private initForm(window: Window = {
                     code: '',
                     name: '',
                     unitSalePrice: 0,
                     totalQty: 0,
                     model: {modelName: '', code: ''},
                     windowsType: {name: ''},
                     optionsWindows: []
                   },
                   brand: Brand = {idBrand : 0 ,brandName: ''}): FormGroup {
    return this._fb.group({
      brand: [brand, Validators.required],
      // windowsType:[Window.windowsType.name, Validators.required],
      code: [window.code, [Validators.minLength(2), Validators.required]],
      name: [window.name, Validators.required],
      unitSalePrice: [window.unitSalePrice],
    })
  }

  public submit(): void {
    console.log('form :: ', this.windowForm)
    // this.windowForm.reset();
  }

}
