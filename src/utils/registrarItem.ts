import ItemAcervo from '../models/ItemAcervo';
import Biblioteca from '../models/Biblioteca';

function registrarItem(biblioteca: Biblioteca, item: ItemAcervo) {
    biblioteca.adicionarItem(item);
}

export default registrarItem;