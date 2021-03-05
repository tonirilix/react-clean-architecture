import { ITemDto } from '../dtos/ItemDto';

export interface IItemRepository {
  getItems(): Promise<ITemDto[]>;
}
