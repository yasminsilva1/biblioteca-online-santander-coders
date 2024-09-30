import ItemAcervo from '../models/ItemAcervo';
import Biblioteca from '../models/Biblioteca';

function RegistrarItem(biblioteca: Biblioteca, item: ItemAcervo) {
    biblioteca.adicionarItem(item);
}

export default RegistrarItem;