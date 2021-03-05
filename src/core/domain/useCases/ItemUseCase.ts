import { IITem } from '../entities/IItem';
import { IItemRepository } from '../entities/IItemRepository';

export interface ItemUseCase {
  getItems(): Promise<IITem[]>;
}

export class ItemUseCase implements ItemUseCase {
  constructor(private itemRepository: IItemRepository) {}

  async getItems() {
    const items = await this.itemRepository.getItems();
    return items.map(
      item =>
        ({
          id: item.id,
          name: item.name,
          valueSnakeCase: item.value_snake_case,
        } as IITem),
    );
  }
}
