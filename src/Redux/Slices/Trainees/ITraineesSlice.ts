import { SortingMethod } from "../../../Addons/Functional/Sorting";
import { TraineeModel } from "../../../Trainees/ITrainees";

export interface Trainees {
  trainees: TraineeModel[];
  editingTrainees: TraineeModel[];
}

export interface NullableTrainees {
  trainees?: TraineeModel[];
  editingTrainees?: TraineeModel[];
}

export type SortableProp = keyof TraineeModel;

export type SortingTarget = keyof Trainees | "both";

export interface SortingSettings {
  sortableProp: SortableProp;
  sortingMethod: SortingMethod;
  sortingTarget: SortingTarget;
}

export interface FilteringSettings {}

export interface Settings {
  sorting: SortingSettings;
  filtering: FilteringSettings;
}

export interface NullableSettings {
  sorting?: SortingSettings;
  filtering?: FilteringSettings;
}

export interface TraineesStore extends Trainees {
  settings: Settings;
}

export interface NullableTraineesStore extends NullableTrainees {
  settings?: NullableSettings;
}
