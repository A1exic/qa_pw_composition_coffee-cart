import { BasePage } from './BasePage';
import { Header } from '../components/Header';
import { CartList } from '../components/CartList';
import { TotalCount } from '../components/TotalCount';

export class CartPage extends BasePage {
  constructor(page) {
    super(page);

    this._url = '/cart';

    this.header = new Header(page);
    this.cartList = new CartList(page);
    this.totalCount = new TotalCount(page);
  }
}
