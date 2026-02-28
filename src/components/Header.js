const { step } = require('@playwright/test');
const { BaseComponent } = require('./BaseComponent');

export class Header extends BaseComponent {
  constructor(page) {
    super(page);
    this.cartLink = page.getByLabel('Cart page');
  }

  async clickCartLink() {
    await step(`Click 'Cart' link`, async () => {
      await this.cartLink.click();
    });
  }
}
