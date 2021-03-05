import Http from 'core/adapters/infrastructure/Http';
import ItemRepository from 'core/adapters/repositories/ItemRepository';
import { ItemUseCase } from 'core/domain/useCases/ItemUseCase';

const http = new Http();
const repository = new ItemRepository(http);
const useCase = new ItemUseCase(repository);
export default useCase;
