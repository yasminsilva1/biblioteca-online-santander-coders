import { ItemAcervo } from '../models/ItemAcervo';
import { Biblioteca } from './Biblioteca';

export function registrarItem<T extends ItemAcervo>(biblioteca: Biblioteca, item: T): void {
    biblioteca.adicionarItem(item);
}