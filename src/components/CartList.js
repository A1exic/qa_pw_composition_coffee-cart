import { expect, step } from '@playwright/test';
import { BaseComponent } from './BaseComponent';

export class CartList extends BaseComponent {
  constructor(page) {
    super(page);

    this.cartListLocator = page.getByRole('list').nth(1);
    this.notCoffeeMessage = page.getByText('No coffee, go add some.');
  }

  coffeeItem(name) {
    return this.cartListLocator.getByRole('listitem').filter({ hasText: name });
  }

  coffeeListItemNameCell(name) {
    return this.coffeeItem(name).locator('div').nth(0);
  }

  coffeeListItemUnitCell(name) {
    return this.coffeeItem(name).locator('div').nth(1);
  }

  coffeeListItemTotalCostCell(name) {
    return this.coffeeItem(name).locator('div').nth(3);
  }

  coffeeListItemRemoveAllButton(name) {
    return this.page.getByLabel(`Remove all ${name}`);
  }

  coffeeListItemRemoveOneButton(name) {
    return this.page.getByLabel(`Remove one ${name}`).nth(1);
  }

  coffeeListItemAddOneButton(name) {
    return this.page.getByLabel(`Add one ${name}`).nth(1);
  }

  async clickCoffeeListItemRemoveAllButton(name) {
    await step(`Click 'Remove All' for ${name}`, async () => {
      await this.coffeeListItemRemoveAllButton(name).click();
    });
  }

  async clickCoffeeListItemRemoveOneButton(name) {
    await step(`Click 'Remove One' for ${name}`, async () => {
      await this.coffeeListItemRemoveOneButton(name).click();
    });
  }

  async clickCoffeeListItemAddOneButton(name) {
    await step(`Click 'Add One' for ${name}`, async () => {
      await this.coffeeListItemAddOneButton(name).click();
    });
  }

  async assertCoffeeItemIsVisible(name) {
    await step(`Assert ${name} item is visible`, async () => {
      await expect(this.coffeeItem(name)).toBeVisible();
    });
  }

  async assertCoffeeItemIsHidden(name) {
    await step(`Assert ${name} item is hidden`, async () => {
      await expect(this.coffeeItem(name)).toBeHidden();
    });
  }

  async assertCoffeeUnitContainsCorrectText(name, text) {
    await step(`Assert ${name} units correct`, async () => {
      await expect(this.coffeeListItemUnitCell(name)).toContainText(text);
    });
  }

  async assertCoffeeTotalCostContainsCorrectText(name, text) {
    await step(`Assert ${name} total cost correct`, async () => {
      await expect(this.coffeeListItemTotalCostCell(name)).toContainText(text);
    });
  }

  async assertNoCoffeeMessageIsVisible() {
    await step(`Assert 'No coffee' message is visible`, async () => {
      await expect(this.notCoffeeMessage).toBeVisible();
    });
  }
}
