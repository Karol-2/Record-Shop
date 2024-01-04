import { FormArray, FormControl, FormGroup } from "@angular/forms";

export interface AuctionForm{
    readonly artistName: FormControl<string | null>;
    readonly albumName: FormControl<string | null>;
    readonly categoryId: FormControl<number | null>;
    readonly type: FormControl<string | null>;
    readonly price: FormControl<number | null>;
    readonly description: FormControl<string | null>;
    readonly photos: FormArray<FormGroup<PhotoForm>>;
}

export interface PhotoForm{
    readonly photo: FormControl<string | null>;
}