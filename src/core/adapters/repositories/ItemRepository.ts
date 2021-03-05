import { ITemDto } from 'core/domain/dtos/ItemDto';
import { IItemRepository } from 'core/domain/entities/IItemRepository';
import { IHttp } from '../infrastructure/IHttp';

class ItemRepository implements IItemRepository {
  constructor(private readonly http: IHttp) {}

  async getItems() {
    return await this.http.request<ITemDto[]>({
      method: 'POST',
      url: 'https://run.mocky.io/v3/257942a4-967c-4176-9648-773a5edbe965',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export default ItemRepository;
