import { CategoryEditState } from '../../screens/category-edit/interfaces';
import { CategoryListState } from '../../screens/category-list/interfaces';

export interface ReduxState {
  readonly categoryList: CategoryListState;
  readonly categoryEdit: CategoryEditState;
}
