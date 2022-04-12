import { mapEnumToOptions } from '@abp/ng.core';

export enum BookType {
  Undefined = 0,
  Thriller = 1,
  Action = 2,
  Comedy = 3,
  Horror = 4,
  Romantic = 5,
  Science = 6,
  Sci_fi = 7,
  Poetry = 8,
}

export const bookTypeOptions = mapEnumToOptions(BookType);
